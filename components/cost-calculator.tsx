"use client";

import { useId, useState } from "react";
import { Calculator } from "lucide-react";

import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { earnBamboo } from "@/lib/bamboo";

/**
 * Betriebskosten-Rechner. Enthält bewusst KEINE festen Marktpreise:
 * Die Startwerte sind neutrale Beispielzahlen und müssen durch eigene,
 * aktuelle Werte ersetzt werden.
 */
interface Vehicle {
  name: string;
  energyUnit: "l" | "kWh";
  consumption: number; // pro 100 km
  energyPrice: number; // € pro Einheit
  insurance: number; // € / Jahr
  tax: number; // € / Jahr
  maintenance: number; // € / Jahr
  depreciation: number; // € / Jahr
}

const initial: Vehicle[] = [
  { name: "Fahrzeug A", energyUnit: "l", consumption: 6, energyPrice: 1.5, insurance: 600, tax: 300, maintenance: 500, depreciation: 2000 },
  { name: "Fahrzeug B", energyUnit: "kWh", consumption: 17, energyPrice: 0.3, insurance: 650, tax: 0, maintenance: 350, depreciation: 2500 },
];

const euro = new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const cent = new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });

function yearlyCost(v: Vehicle, km: number) {
  const energy = (km / 100) * v.consumption * v.energyPrice;
  const fixed = v.insurance + v.tax + v.maintenance + v.depreciation;
  return { energy, fixed, total: energy + fixed };
}

export function CostCalculator() {
  const [km, setKm] = useState(12000);
  const [vehicles, setVehicles] = useState(initial);
  const kmId = useId();

  const update = (i: number, patch: Partial<Vehicle>) =>
    setVehicles((vs) => vs.map((v, idx) => (idx === i ? { ...v, ...patch } : v)));

  const results = vehicles.map((v) => yearlyCost(v, km));
  const cheaper = results[0].total === results[1].total ? -1 : results[0].total < results[1].total ? 0 : 1;

  return (
    <section aria-labelledby="kostenrechner" className="glow-border rounded-xl bg-card/80 p-6" onInput={() => earnBamboo("rechner:kosten", 2)}>
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h2 id="kostenrechner" className="flex items-center gap-2 font-display text-xl font-semibold">
          <Calculator className="size-5 text-primary" aria-hidden="true" /> Betriebskosten-Rechner
        </h2>
        <Badge variant="outline">Beispielwerte – bitte eigene eintragen</Badge>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        Die vorausgefüllten Zahlen sind keine aktuellen Marktpreise. Trage deine Fahrleistung, Angebote und Tarife ein.
      </p>

      <label htmlFor={kmId} className="mb-1.5 block text-sm font-medium">
        Fahrleistung pro Jahr: <span className="text-primary">{km.toLocaleString("de-AT")} km</span>
      </label>
      <input
        id={kmId}
        type="range"
        min={2000}
        max={50000}
        step={500}
        value={km}
        onChange={(e) => setKm(Number(e.target.value))}
        className="mb-6 w-full accent-[var(--primary)]"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {vehicles.map((v, i) => (
          <fieldset key={i} className="space-y-3 rounded-lg border bg-background/40 p-4">
            <legend className="sr-only">{v.name}</legend>
            <Input aria-label="Bezeichnung" value={v.name} onChange={(e) => update(i, { name: e.target.value })} className="font-medium" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Energieart">
                <select
                  value={v.energyUnit}
                  onChange={(e) => update(i, { energyUnit: e.target.value as Vehicle["energyUnit"] })}
                  className="h-10 w-full rounded-md border border-input bg-background/60 px-2 text-sm"
                >
                  <option value="l">Kraftstoff (Liter)</option>
                  <option value="kWh">Strom (kWh)</option>
                </select>
              </Field>
              <NumberField label={`Verbrauch ${v.energyUnit}/100 km`} value={v.consumption} step={0.1} onChange={(n) => update(i, { consumption: n })} />
              <NumberField label={`Preis € pro ${v.energyUnit}`} value={v.energyPrice} step={0.01} onChange={(n) => update(i, { energyPrice: n })} />
              <NumberField label="Versicherung €/Jahr" value={v.insurance} onChange={(n) => update(i, { insurance: n })} />
              <NumberField label="Steuern/Abgaben €/Jahr" value={v.tax} onChange={(n) => update(i, { tax: n })} />
              <NumberField label="Wartung & Reifen €/Jahr" value={v.maintenance} onChange={(n) => update(i, { maintenance: n })} />
              <NumberField label="Wertverlust €/Jahr" value={v.depreciation} onChange={(n) => update(i, { depreciation: n })} />
            </div>
            <dl className="grid grid-cols-3 gap-2 border-t pt-3 text-center">
              <Stat label="pro Jahr" value={euro.format(results[i].total)} highlight={cheaper === i} />
              <Stat label="pro Monat" value={euro.format(results[i].total / 12)} highlight={cheaper === i} />
              <Stat label="pro km" value={cent.format(km ? results[i].total / km : 0)} highlight={cheaper === i} />
            </dl>
          </fieldset>
        ))}
      </div>

      <p className="mt-5 text-sm" aria-live="polite">
        {cheaper === -1 ? (
          "Beide Fahrzeuge kosten mit diesen Werten gleich viel."
        ) : (
          <>
            Mit deinen Werten ist <strong className="text-primary">{vehicles[cheaper].name}</strong> um{" "}
            <strong>{euro.format(Math.abs(results[0].total - results[1].total))}</strong> pro Jahr günstiger.
          </>
        )}
      </p>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="space-y-1 text-xs text-muted-foreground">
      <span>{label}</span>
      {children}
    </label>
  );
}

function NumberField({ label, value, onChange, step = 1 }: { label: string; value: number; onChange: (n: number) => void; step?: number }) {
  return (
    <Field label={label}>
      <Input
        type="number"
        inputMode="decimal"
        min={0}
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
      />
    </Field>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight: boolean }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className={highlight ? "font-semibold text-primary" : "font-semibold"}>{value}</dd>
    </div>
  );
}
