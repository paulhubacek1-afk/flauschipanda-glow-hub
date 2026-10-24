"use client";

import { useId, useState } from "react";
import { Calculator, Plus, Trash2 } from "lucide-react";

import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

/**
 * Kleine Online-Rechner für die Seiten unter „Tools & Apps › Online-Rechner“.
 * Alles wird nur im Browser gerechnet – nichts wird gespeichert oder übertragen.
 * Startwerte sind neutrale Beispielzahlen, keine aktuellen Marktpreise.
 */

const euro = new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const num = (n: number, d = 2) => new Intl.NumberFormat("de-AT", { maximumFractionDigits: d }).format(Number.isFinite(n) ? n : 0);

function Shell({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="glow-border rounded-xl bg-card/80 p-6">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h2 id={id} className="flex items-center gap-2 font-display text-xl font-semibold">
          <Calculator className="size-5 text-primary" aria-hidden="true" /> {title}
        </h2>
        <Badge variant="outline">Rechnet nur in deinem Browser</Badge>
      </div>
      {children}
    </section>
  );
}

function NumberField({
  label,
  value,
  onChange,
  step = 1,
  min = 0,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  min?: number | null;
  suffix?: string;
}) {
  const id = useId();
  return (
    <label htmlFor={id} className="space-y-1 text-xs text-muted-foreground">
      <span>
        {label}
        {suffix ? ` (${suffix})` : ""}
      </span>
      <Input
        id={id}
        type="number"
        inputMode="decimal"
        step={step}
        min={min ?? undefined}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => {
          const n = Number(e.target.value.replace(",", "."));
          onChange(Number.isFinite(n) ? (min == null ? n : Math.max(min, n)) : 0);
        }}
      />
    </label>
  );
}

function Result({ items }: { items: { label: string; value: string; strong?: boolean }[] }) {
  return (
    <dl className="mt-5 grid gap-3 rounded-lg border bg-background/40 p-4 sm:grid-cols-3" aria-live="polite">
      {items.map((it) => (
        <div key={it.label}>
          <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{it.label}</dt>
          <dd className={it.strong ? "text-lg font-semibold text-primary" : "font-semibold"}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------------- Spritkosten ---------------- */
export function FuelCalculator() {
  const [km, setKm] = useState(250);
  const [use, setUse] = useState(6.5);
  const [price, setPrice] = useState(1.6);
  const [people, setPeople] = useState(1);
  const [roundTrip, setRoundTrip] = useState(false);
  const dist = km * (roundTrip ? 2 : 1);
  const litres = (dist / 100) * use;
  const cost = litres * price;
  return (
    <Shell id="spritrechner" title="Spritkosten-Rechner">
      <p className="mb-4 text-sm text-muted-foreground">Trage Strecke, Verbrauch und den aktuellen Preis an deiner Tankstelle ein.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Strecke" suffix="km" value={km} onChange={setKm} />
        <NumberField label="Verbrauch" suffix="l/100 km oder kWh/100 km" value={use} step={0.1} onChange={setUse} />
        <NumberField label="Preis" suffix="€ pro Liter bzw. kWh" value={price} step={0.01} onChange={setPrice} />
        <NumberField label="Personen" value={people} onChange={(n) => setPeople(Math.max(1, Math.round(n)))} min={1} />
      </div>
      <label className="mt-3 flex items-center gap-2 text-sm">
        <input type="checkbox" checked={roundTrip} onChange={(e) => setRoundTrip(e.target.checked)} className="accent-[var(--primary)]" />
        Hin- und Rückfahrt
      </label>
      <Result
        items={[
          { label: "Kosten gesamt", value: euro.format(cost), strong: true },
          { label: "pro Person", value: euro.format(cost / Math.max(1, people)) },
          { label: "Verbrauch", value: `${num(litres, 1)} l bzw. kWh · ${num(dist, 0)} km` },
        ]}
      />
    </Shell>
  );
}

/* ---------------- Stromkosten ---------------- */
export function PowerCalculator() {
  const [watt, setWatt] = useState(100);
  const [hours, setHours] = useState(4);
  const [days, setDays] = useState(365);
  const [price, setPrice] = useState(0.3);
  const kwhYear = (watt / 1000) * hours * days;
  return (
    <Shell id="stromrechner" title="Stromkosten-Rechner">
      <p className="mb-4 text-sm text-muted-foreground">
        Die Leistung in Watt steht meist auf dem Typenschild oder im Datenblatt. Den Preis pro kWh findest du auf deiner Stromrechnung.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField label="Leistung" suffix="Watt" value={watt} onChange={setWatt} />
        <NumberField label="Betriebsdauer pro Tag" suffix="Stunden" value={hours} step={0.5} onChange={(n) => setHours(Math.min(24, n))} />
        <NumberField label="Nutzungstage pro Jahr" value={days} onChange={(n) => setDays(Math.min(366, Math.round(n)))} />
        <NumberField label="Strompreis" suffix="€ pro kWh" value={price} step={0.01} onChange={setPrice} />
      </div>
      <Result
        items={[
          { label: "pro Jahr", value: euro.format(kwhYear * price), strong: true },
          { label: "pro Monat", value: euro.format((kwhYear * price) / 12) },
          { label: "Verbrauch pro Jahr", value: `${num(kwhYear, 1)} kWh` },
        ]}
      />
    </Shell>
  );
}

/* ---------------- Budget ---------------- */
interface Row {
  name: string;
  amount: number;
}
export function BudgetCalculator() {
  const [income, setIncome] = useState(2000);
  const [rows, setRows] = useState<Row[]>([
    { name: "Miete & Wohnen", amount: 700 },
    { name: "Lebensmittel", amount: 350 },
    { name: "Mobilität", amount: 150 },
    { name: "Versicherungen", amount: 100 },
    { name: "Freizeit", amount: 150 },
  ]);
  const spent = rows.reduce((s, r) => s + (Number.isFinite(r.amount) ? r.amount : 0), 0);
  const left = income - spent;
  const update = (i: number, patch: Partial<Row>) => setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  return (
    <Shell id="budgetrechner" title="Budget-Rechner">
      <p className="mb-4 text-sm text-muted-foreground">Netto-Einkommen und monatliche Ausgaben eintragen – Beispielwerte einfach überschreiben.</p>
      <NumberField label="Netto-Einkommen pro Monat" suffix="€" value={income} onChange={setIncome} />
      <ul className="mt-4 space-y-2">
        {rows.map((r, i) => (
          <li key={i} className="flex items-end gap-2">
            <Input aria-label="Ausgabe" value={r.name} maxLength={40} onChange={(e) => update(i, { name: e.target.value })} className="flex-1" />
            <div className="w-32">
              <NumberField label="€/Monat" value={r.amount} onChange={(n) => update(i, { amount: n })} />
            </div>
            <button
              type="button"
              onClick={() => setRows((rs) => rs.filter((_, idx) => idx !== i))}
              className="mb-1 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label={`${r.name || "Ausgabe"} entfernen`}
            >
              <Trash2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>
      {rows.length < 20 && (
        <button
          type="button"
          onClick={() => setRows((rs) => [...rs, { name: "Neue Ausgabe", amount: 0 }])}
          className="mt-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm text-primary hover:bg-accent"
        >
          <Plus className="size-4" aria-hidden="true" /> Ausgabe hinzufügen
        </button>
      )}
      <Result
        items={[
          { label: left >= 0 ? "Bleibt übrig" : "Fehlbetrag", value: euro.format(left), strong: true },
          { label: "Ausgaben gesamt", value: euro.format(spent) },
          { label: "Sparquote", value: income > 0 ? `${num((Math.max(0, left) / income) * 100, 1)} %` : "–" },
        ]}
      />
      {income > 0 && (
        <p className="mt-3 text-xs text-muted-foreground">
          Zum Vergleich nach der 50-30-20-Regel: {euro.format(income * 0.5)} Fixkosten · {euro.format(income * 0.3)} Wünsche · {euro.format(income * 0.2)} Sparen.
        </p>
      )}
    </Shell>
  );
}

/* ---------------- Prozente ---------------- */
export function PercentCalculator() {
  const [a1, setA1] = useState(15);
  const [b1, setB1] = useState(80);
  const [a2, setA2] = useState(12);
  const [b2, setB2] = useState(48);
  const [a3, setA3] = useState(50);
  const [b3, setB3] = useState(65);
  const pct = (x: number) => `${num(x, 2)} %`;
  return (
    <Shell id="prozentrechner" title="Prozentrechner">
      <div className="mt-3 space-y-5">
        <div>
          <p className="mb-2 text-sm font-medium">Wie viel sind X % von Y?</p>
          <div className="grid grid-cols-2 gap-3">
            <NumberField label="Prozent" suffix="%" value={a1} step={0.1} onChange={setA1} min={null} />
            <NumberField label="von Grundwert" value={b1} step={0.01} onChange={setB1} min={null} />
          </div>
          <p className="mt-2 text-sm" aria-live="polite">
            = <strong className="text-primary">{num((a1 / 100) * b1)}</strong>
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">X ist wie viel Prozent von Y?</p>
          <div className="grid grid-cols-2 gap-3">
            <NumberField label="Wert" value={a2} step={0.01} onChange={setA2} min={null} />
            <NumberField label="Grundwert" value={b2} step={0.01} onChange={setB2} min={null} />
          </div>
          <p className="mt-2 text-sm" aria-live="polite">
            = <strong className="text-primary">{b2 !== 0 ? pct((a2 / b2) * 100) : "–"}</strong>
          </p>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Um wie viel Prozent hat sich ein Wert verändert?</p>
          <div className="grid grid-cols-2 gap-3">
            <NumberField label="Alter Wert" value={a3} step={0.01} onChange={setA3} min={null} />
            <NumberField label="Neuer Wert" value={b3} step={0.01} onChange={setB3} min={null} />
          </div>
          <p className="mt-2 text-sm" aria-live="polite">
            = <strong className="text-primary">{a3 !== 0 ? `${b3 >= a3 ? "+" : ""}${pct(((b3 - a3) / Math.abs(a3)) * 100)}` : "–"}</strong>
          </p>
        </div>
      </div>
    </Shell>
  );
}

export function Calculators({ keys }: { keys: string[] }) {
  return (
    <>
      {keys.includes("spritrechner") && <FuelCalculator />}
      {keys.includes("stromrechner") && <PowerCalculator />}
      {keys.includes("budgetrechner") && <BudgetCalculator />}
      {keys.includes("prozentrechner") && <PercentCalculator />}
    </>
  );
}
