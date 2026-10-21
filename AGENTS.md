<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All site content (categories, topics, texts like Impressum/Datenschutz) lives in Lovable Cloud tables and is edited in /admin; never hardcode content in routes. Why: the site is a CMS.
- Login uses usernames mapped to pseudo e-mails via `usernameToEmail` in src/lib/cms.ts; users are created only by admins through server functions in src/lib/users.functions.ts. Why: simple username login without e-mail.
- Roles live in `user_roles` (admin = everything, editor = content + files); check with `has_role`/`is_staff`. Why: avoid privilege escalation.
- Uploaded files are in the private `media` bucket and served via the `/files/*` route. Why: public buckets are blocked and URLs stay on whatever domain the site uses.
- Header/footer data comes from the root route loader, not useQuery, to avoid SSR hydration mismatches.
