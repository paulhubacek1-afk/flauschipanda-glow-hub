create type public.app_role as enum ('admin','editor');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.is_staff(_user_id uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id) $$;

create policy "own roles readable" on public.user_roles for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  created_at timestamptz not null default now()
);
grant select on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "staff read profiles" on public.profiles for select to authenticated
  using (id = auth.uid() or public.has_role(auth.uid(),'admin'));

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  icon text not null default '✨',
  description text not null default '',
  sort_order int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
grant select on public.categories to anon, authenticated;
grant insert, update, delete on public.categories to authenticated;
grant all on public.categories to service_role;
alter table public.categories enable row level security;
create policy "public read categories" on public.categories for select to anon, authenticated
  using (published or public.is_staff(auth.uid()));
create policy "staff write categories" on public.categories for all to authenticated
  using (public.is_staff(auth.uid())) with check (public.is_staff(auth.uid()));

create table public.topics (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on delete cascade,
  slug text not null,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  image_url text,
  link_url text,
  link_label text,
  sort_order int not null default 0,
  published boolean not null default true,
  updated_at timestamptz not null default now(),
  unique (category_id, slug)
);
grant select on public.topics to anon, authenticated;
grant insert, update, delete on public.topics to authenticated;
grant all on public.topics to service_role;
alter table public.topics enable row level security;
create policy "public read topics" on public.topics for select to anon, authenticated
  using (published or public.is_staff(auth.uid()));
create policy "staff write topics" on public.topics for all to authenticated
  using (public.is_staff(auth.uid())) with check (public.is_staff(auth.uid()));

create table public.site_settings (
  key text primary key,
  value text not null default ''
);
grant select on public.site_settings to anon, authenticated;
grant insert, update, delete on public.site_settings to authenticated;
grant all on public.site_settings to service_role;
alter table public.site_settings enable row level security;
create policy "public read settings" on public.site_settings for select to anon, authenticated using (true);
create policy "admin write settings" on public.site_settings for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

insert into public.site_settings(key,value) values
('site_title','🐼 FlauschiPandas Themenübersicht'),
('site_subtitle','Glow‑Directory • KI‑Tools • Projekte'),
('intro_title','Willkommen im Panda‑Glow‑Hub'),
('intro_text','Über 80 Themen rund um Tiere, Kinder, KI, Creator‑Tipps und Alltag – alles an einem Ort.'),
('donate_title','Unterstütze FlauschiPandas'),
('donate_text','Dir gefällt das Projekt? Mit einer kleinen Spende hältst du den Panda am Leuchten.'),
('donate_url',''),
('donate_label','Jetzt spenden'),
('affiliate_title','Empfohlene Tools'),
('affiliate_text','Unsere Lieblings‑Tools für Creator und KI‑Fans.'),
('affiliate_url',''),
('affiliate_label','Zu den Tools'),
('impressum',E'## Impressum\n\nAngaben gemäß § 5 ECG / § 25 MedienG\n\n**Name:** Paul‑Gérard Hubacek\n**Adresse:** [Straße, PLZ Ort, Österreich]\n**E‑Mail:** [deine@email.at]\n\n**Unternehmensgegenstand:** Informationsportal / Blog\n\n**Blattlinie:** Informationen, Tipps und Inhalte zu Tieren, Kindern, KI, Creator‑Themen und Alltag.\n\n**Haftung für Links:** Für Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.'),
('datenschutz',E'## Datenschutzerklärung\n\n**Verantwortlicher:** Paul‑Gérard Hubacek, [Adresse], [E‑Mail]\n\n### Welche Daten wir verarbeiten\nBeim Besuch dieser Website werden technisch notwendige Daten (IP‑Adresse, Browser, Zeitpunkt) durch unseren Hosting‑Anbieter verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).\n\n### Cookies\nWir verwenden nur technisch notwendige Speicherungen (z. B. deine Cookie‑Auswahl und den Login für Redakteure). Optionale Cookies (z. B. Statistik, Affiliate) werden nur mit deiner Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO).\n\n### Affiliate‑Links\nEinige Links sind Affiliate‑Links. Beim Kauf erhalten wir ggf. eine Provision, für dich ändert sich der Preis nicht.\n\n### Deine Rechte\nDu hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Beschwerden kannst du bei der Österreichischen Datenschutzbehörde (dsb.gv.at) einreichen.'),
('footer_text','© FlauschiPandas · Mit Glow gemacht');

do $$
declare
  c record; t text; i int; j int;
begin
  i := 0;
  for c in select * from (values
    ('tiere','Tiere','🐾','Die stärkste Traffic‑Kategorie überhaupt.', array['Hunde','Katzen','Pferde','Hasen / Kaninchen','Hamster','Meerschweinchen','Pandas','Wölfe','Füchse','Tier‑Malvorlagen']),
    ('kinder','Babys & Kinder','🍼','Malbuch, Glow‑Kinderdesigns & mehr.', array['Baby‑Basics','Kinder‑Malvorlagen','Glow‑Kinderdesigns','Lernkarten','Bastelideen','Kinder‑Tiere','Baby‑Tipps','Kinder‑KI‑Prompts']),
    ('wohnen','Haushalt & Wohnen','🏠','Jeder braucht das — extrem klickstark.', array['Haushaltstipps','Glow‑Wohnideen','Deko‑Tipps','Immobilien‑Basics','Wohnungssuche','Ordnung & Putzen','Sparen im Haushalt','Glow‑Zimmer']),
    ('ki','KI‑Tools & Prompts','🤖','KI ist überall.', array['KI‑Basics','KI‑Prompts','Tier‑KI‑Prompts','Kinder‑KI‑Prompts','KI‑Automatisierung','KI‑Fehler vermeiden','KI‑Workflows','KI‑Tools erklärt']),
    ('creator','Creator‑Tipps','🎬','Für dein YouTube‑Branding.', array['Branding','Glow‑Design','Viral‑Shorts','Storytelling','Content‑Planung','Monetarisierung','Algorithmus‑Tipps','Community‑Aufbau']),
    ('tools','Tools & Apps','🧰','Super für Affiliate.', array['YouTube‑Tools','Design‑Tools','KI‑Tools','Business‑Tools','Social‑Media‑Tools','Affiliate‑Tools','Automatisierungs‑Tools','Glow‑Plugins']),
    ('musik','Musik & Entertainment','🎧','Dein Kanal → Branding.', array['EDM‑Tracks','YouTube‑Musik','Glow‑Music‑Branding','Playlist‑Tipps','Creator‑Music']),
    ('finanzen','Finanzen & Sparen','💰','Jeder sucht Spar‑Tipps.', array['Sparen im Alltag','Budget‑Tipps','Günstig leben','Finanz‑Basics','Schulden vermeiden','Geld verdienen online']),
    ('projekte','Projekte & Community','🌐','Dein Hub.', array['KiToolsReport','Panda‑Merch','Blog','FAQ','Über mich','Kontakt','Discord‑Community']),
    ('panda','Panda‑Branding','🐼','Deine Identität.', array['Warum Panda?','Panda‑Glow‑Style','Panda‑Story','Panda‑Designs','Panda‑Wallpaper','Panda‑KI‑Prompts']),
    ('spirituell','Spirituelles','🔮','Achtsamkeit, Energie & Glow für die Seele.', array['Meditation','Achtsamkeit','Affirmationen','Traumdeutung','Krafttiere','Mondphasen'])
  ) as v(slug,title,icon,descr,tops)
  loop
    insert into public.categories(slug,title,icon,description,sort_order) values (c.slug,c.title,c.icon,c.descr,i);
    j := 0;
    foreach t in array c.tops loop
      insert into public.topics(category_id,slug,title,excerpt,content,sort_order)
      select id,
        trim(both '-' from regexp_replace(replace(replace(replace(replace(replace(lower(t),'‑','-'),'ä','ae'),'ö','oe'),'ü','ue'),'ß','ss'),'[^a-z0-9]+','-','g')),
        t, 'Alles rund um ' || t || '.',
        '## ' || t || E'\n\nHier entsteht bald spannender Inhalt zu ' || t || '. Bearbeite diesen Text im Admin‑Bereich.',
        j
      from public.categories where slug = c.slug;
      j := j + 1;
    end loop;
    i := i + 1;
  end loop;
end $$;

create policy "public read media" on storage.objects for select to anon, authenticated using (bucket_id = 'media');
create policy "staff upload media" on storage.objects for insert to authenticated with check (bucket_id = 'media' and public.is_staff(auth.uid()));
create policy "staff update media" on storage.objects for update to authenticated using (bucket_id = 'media' and public.is_staff(auth.uid()));
create policy "staff delete media" on storage.objects for delete to authenticated using (bucket_id = 'media' and public.is_staff(auth.uid()));