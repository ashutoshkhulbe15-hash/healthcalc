"use client";
import { useState } from "react";

// ── Data ──
const WEEKS = [4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 34, 36, 38, 40];

const WEIGHT_DATA: Record<string, { min: number[]; max: number[] }> = {
  underweight: {
    min: [0.5, 1, 1.5, 1.8, 2.5, 3.5, 4.5, 5.5, 7, 8.5, 10, 11, 12.5, 14],
    max: [1, 2, 2.5, 3, 4, 5, 6.5, 8, 10, 11.5, 13, 14.5, 16, 18],
  },
  normal: {
    min: [0.5, 1, 1.5, 1.5, 2, 3, 4, 5, 6.5, 8, 9.5, 10.5, 11.5, 12.5],
    max: [1, 1.5, 2, 2.5, 3.5, 4.5, 5.5, 7, 8.5, 10, 11.5, 13, 14.5, 16],
  },
  overweight: {
    min: [0.5, 0.5, 1, 1, 1.5, 2, 3, 3.5, 4.5, 5.5, 7, 8, 9, 10],
    max: [1, 1.5, 1.5, 2, 2.5, 3.5, 4.5, 5.5, 7, 8, 9.5, 10.5, 11.5, 12.5],
  },
  obese: {
    min: [0.5, 0.5, 0.5, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 5.5, 6, 6.5],
    max: [1, 1, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 7.5, 8.5, 9.5],
  },
};

function getBMICategory(bmi: number) {
  if (bmi < 18.5) return { key: "underweight", label: "Underweight", rec: "12.5–18 kg (28–40 lbs)" };
  if (bmi < 25) return { key: "normal", label: "Normal weight", rec: "11.5–16 kg (25–35 lbs)" };
  if (bmi < 30) return { key: "overweight", label: "Overweight", rec: "7–11.5 kg (15–25 lbs)" };
  return { key: "obese", label: "Obese", rec: "5–9 kg (11–20 lbs)" };
}

// ── Gauge Bar ──
function GaugeBar({ value, rangeMin, rangeMax, label }: { value: number; rangeMin: number; rangeMax: number; label: string }) {
  const total = rangeMax * 1.8;
  const pct = Math.min(100, Math.max(0, (value / total) * 100));
  const rMinPct = (rangeMin / total) * 100;
  const rMaxPct = (rangeMax / total) * 100;
  const inRange = value >= rangeMin && value <= rangeMax;

  return (
    <div className="mb-3">
      <div className="flex justify-between text-[13px] text-slate-500 mb-1">
        <span>{label}</span>
        <span className={`font-semibold ${inRange ? "text-brand-600" : "text-red-500"}`}>
          {value.toFixed(1)} kg
        </span>
      </div>
      <div className="relative h-2.5 bg-slate-200 rounded-full">
        <div
          className="absolute h-full bg-green-100 rounded-full"
          style={{ left: `${rMinPct}%`, width: `${rMaxPct - rMinPct}%` }}
        />
        <div
          className={`absolute -top-[3px] w-4 h-4 rounded-full border-[3px] border-white shadow -translate-x-1/2 ${inRange ? "bg-brand-600" : "bg-red-500"}`}
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px] text-slate-400 mt-0.5">
        <span>{rangeMin.toFixed(1)} kg</span>
        <span>{rangeMax.toFixed(1)} kg</span>
      </div>
    </div>
  );
}

// ── Trajectory Chart ──
function TrajectoryChart({ data, currentWeek, currentGain }: { data: { min: number[]; max: number[] }; currentWeek: number; currentGain: number }) {
  const W = 500, H = 200, pad = 40;
  const maxY = Math.max(...data.max, currentGain || 0) + 2;
  const x = (i: number) => pad + (i / (data.min.length - 1)) * (W - pad * 2);
  const y = (v: number) => H - pad - (v / maxY) * (H - pad * 2);

  const areaPath =
    data.min.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ") +
    [...data.max].reverse().map((v, i) => `L${x(data.max.length - 1 - i)},${y(v)}`).join(" ") +
    "Z";
  const pathMin = data.min.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const pathMax = data.max.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const weekIdx = WEEKS.findIndex((w) => w >= currentWeek);
  const dotX = weekIdx >= 0 ? x(weekIdx) : null;
  const dotY = currentGain ? y(currentGain) : null;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[500px]">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 5, 10, 15, 20]
        .filter((v) => v <= maxY)
        .map((v) => (
          <g key={v}>
            <line x1={pad} y1={y(v)} x2={W - pad} y2={y(v)} stroke="#E2E8F0" strokeWidth="1" />
            <text x={pad - 8} y={y(v) + 4} textAnchor="end" fontSize="10" fill="#94A3B8">{v}</text>
          </g>
        ))}
      {WEEKS.map(
        (w, i) =>
          i % 2 === 0 && (
            <text key={w} x={x(i)} y={H - pad + 16} textAnchor="middle" fontSize="10" fill="#94A3B8">
              W{w}
            </text>
          )
      )}
      <path d={areaPath} fill="url(#areaGrad)" />
      <path d={pathMin} fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <path d={pathMax} fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      {dotX && dotY && (
        <>
          <circle cx={dotX} cy={dotY} r="6" fill="#0F766E" stroke="white" strokeWidth="2.5" />
          <text x={dotX} y={dotY - 12} textAnchor="middle" fontSize="11" fontWeight="600" fill="#0F766E">
            {currentGain.toFixed(1)} kg
          </text>
        </>
      )}
      <text x={pad} y={14} fontSize="11" fill="#64748B" fontWeight="500">
        Weight gain (kg)
      </text>
    </svg>
  );
}

// ── Input Field ──
function InputField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 rounded-lg text-[15px] focus:border-brand-500 focus:outline-none transition-colors"
      />
    </div>
  );
}

// ── Result Card ──
function ResultCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-slate-50 rounded-[10px] p-3.5">
      <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
      <div className="text-xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
}

// ── Main Calculator ──
type Result = {
  bmi: number;
  cat: ReturnType<typeof getBMICategory>;
  gain: number;
  minGain: number;
  maxGain: number;
  week: number;
  weekData: { min: number[]; max: number[] };
};

export function PregnancyWeightGainCalc() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [preWeight, setPreWeight] = useState("");
  const [height, setHeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [week, setWeek] = useState("");
  const [twins, setTwins] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const calculate = () => {
    const pw = parseFloat(preWeight);
    const h = unit === "metric" ? parseFloat(height) / 100 : parseFloat(height) * 0.0254;
    const cw = parseFloat(currentWeight);
    const wk = parseInt(week);
    if (!pw || !h || !cw || !wk || wk < 1 || wk > 42) return;

    const bmi = pw / (h * h);
    const cat = getBMICategory(bmi);
    const gain = unit === "metric" ? cw - pw : (cw - pw) * 0.4536;
    const weekData = WEIGHT_DATA[cat.key];
    const weekIdx = WEEKS.findIndex((w) => w >= wk);
    const minGain = weekIdx >= 0 ? weekData.min[weekIdx] : weekData.min[weekData.min.length - 1];
    const maxGain = weekIdx >= 0 ? weekData.max[weekIdx] : weekData.max[weekData.max.length - 1];
    const tf = twins ? 1.4 : 1;

    setResult({
      bmi,
      cat,
      gain,
      minGain: minGain * tf,
      maxGain: maxGain * tf,
      week: wk,
      weekData: {
        min: weekData.min.map((v) => v * tf),
        max: weekData.max.map((v) => v * tf),
      },
    });
  };

  const inRange = result ? result.gain >= result.minGain && result.gain <= result.maxGain : false;

  return (
    <>
      {/* ─── Calculator Card ─── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 md:p-9 mb-8 shadow-sm">
        {/* Unit toggle */}
        <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5 w-fit mb-6">
          {(["metric", "imperial"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                unit === u
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {u === "metric" ? "Metric (kg/cm)" : "Imperial (lbs/in)"}
            </button>
          ))}
        </div>

        {/* Input grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <InputField
            label={`Pre-pregnancy weight (${unit === "metric" ? "kg" : "lbs"})`}
            value={preWeight}
            onChange={setPreWeight}
            placeholder={unit === "metric" ? "e.g. 60" : "e.g. 132"}
          />
          <InputField
            label={`Height (${unit === "metric" ? "cm" : "inches"})`}
            value={height}
            onChange={setHeight}
            placeholder={unit === "metric" ? "e.g. 165" : "e.g. 65"}
          />
          <InputField
            label={`Current weight (${unit === "metric" ? "kg" : "lbs"})`}
            value={currentWeight}
            onChange={setCurrentWeight}
            placeholder={unit === "metric" ? "e.g. 67" : "e.g. 148"}
          />
          <InputField
            label="Current week of pregnancy"
            value={week}
            onChange={setWeek}
            placeholder="e.g. 24"
          />
        </div>

        {/* Twins checkbox */}
        <label className="flex items-center gap-2 text-sm text-slate-600 mb-6 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={twins}
            onChange={(e) => setTwins(e.target.checked)}
            className="w-[18px] h-[18px] accent-brand-600 rounded"
          />
          Expecting twins or multiples
        </label>

        {/* Calculate button */}
        <button
          onClick={calculate}
          className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all active:translate-y-0"
        >
          Calculate My Weight Gain
        </button>
      </div>

      {/* ─── Results Card ─── */}
      {result && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 md:p-9 mb-8 shadow-sm">
          {/* Status */}
          <div className="flex items-center gap-2 mb-5">
            <div className={`w-2 h-2 rounded-full ${inRange ? "bg-green-500" : "bg-red-500"}`} />
            <span className={`text-sm font-semibold ${inRange ? "text-brand-600" : "text-red-600"}`}>
              {inRange
                ? "Within recommended range"
                : result.gain < result.minGain
                ? "Below recommended range"
                : "Above recommended range"}
            </span>
          </div>

          {/* Result cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            <ResultCard label="Your weight gain" value={`${result.gain.toFixed(1)} kg`} sub={`at week ${result.week}`} />
            <ResultCard label="Recommended range" value={`${result.minGain.toFixed(1)}–${result.maxGain.toFixed(1)} kg`} sub={`for week ${result.week}`} />
            <ResultCard label="Pre-pregnancy BMI" value={result.bmi.toFixed(1)} sub={result.cat.label} />
            <ResultCard label="Total target by week 40" value={result.cat.rec} sub="IOM guidelines" />
          </div>

          {/* Gauge */}
          <GaugeBar value={result.gain} rangeMin={result.minGain} rangeMax={result.maxGain} label={`Week ${result.week} weight gain`} />

          {/* Chart */}
          <div className="mt-7">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Your Weight Gain Trajectory</h3>
            <p className="text-[13px] text-slate-500 mb-3">
              Shaded area = recommended range for your BMI category. Dot = your current position.
            </p>
            <TrajectoryChart data={result.weekData} currentWeek={result.week} currentGain={result.gain} />
          </div>
        </div>
      )}
    </>
  );
}
