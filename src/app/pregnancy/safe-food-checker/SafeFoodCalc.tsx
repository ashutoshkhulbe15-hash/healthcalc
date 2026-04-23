"use client";
import { useState } from "react";
import { CalcShell } from "@/components/CalcUI";

const FOODS:{name:string;status:"safe"|"caution"|"avoid";note:string;cat:string}[]=[
  {name:"Pasteurized milk",status:"safe",note:"Fully pasteurized dairy is safe.",cat:"Dairy"},
  {name:"Hard cheese (cheddar, parmesan)",status:"safe",note:"Safe due to low moisture.",cat:"Dairy"},
  {name:"Soft cheese (brie, camembert)",status:"caution",note:"Only if made from pasteurized milk.",cat:"Dairy"},
  {name:"Unpasteurized cheese",status:"avoid",note:"Risk of Listeria contamination.",cat:"Dairy"},
  {name:"Raw milk",status:"avoid",note:"Risk of Listeria, Salmonella, E. coli.",cat:"Dairy"},
  {name:"Cooked chicken/turkey",status:"safe",note:"Cook to 165°F (74°C) internal temp.",cat:"Meat"},
  {name:"Well-done steak/beef",status:"safe",note:"Cook to at least 160°F (71°C).",cat:"Meat"},
  {name:"Rare/medium-rare steak",status:"avoid",note:"Undercooked meat may contain Toxoplasma.",cat:"Meat"},
  {name:"Deli meats (cold cuts)",status:"caution",note:"Heat until steaming to kill Listeria.",cat:"Meat"},
  {name:"Hot dogs",status:"caution",note:"Reheat until steaming hot before eating.",cat:"Meat"},
  {name:"Cooked salmon",status:"safe",note:"Excellent source of omega-3 DHA.",cat:"Seafood"},
  {name:"Cooked shrimp",status:"safe",note:"Low mercury, safe when fully cooked.",cat:"Seafood"},
  {name:"Sushi (raw fish)",status:"avoid",note:"Risk of parasites and bacteria.",cat:"Seafood"},
  {name:"High-mercury fish (shark, swordfish, king mackerel)",status:"avoid",note:"Mercury can harm fetal brain development.",cat:"Seafood"},
  {name:"Canned tuna (light)",status:"caution",note:"Limit to 2-3 servings/week due to mercury.",cat:"Seafood"},
  {name:"Fully cooked eggs",status:"safe",note:"Cook until yolk and white are firm.",cat:"Eggs"},
  {name:"Runny/soft-boiled eggs",status:"avoid",note:"Risk of Salmonella.",cat:"Eggs"},
  {name:"Raw cookie dough",status:"avoid",note:"Raw eggs + raw flour risk.",cat:"Eggs"},
  {name:"Washed fruits & vegetables",status:"safe",note:"Wash thoroughly to remove soil bacteria.",cat:"Produce"},
  {name:"Unwashed salad/sprouts",status:"avoid",note:"Raw sprouts carry E. coli risk.",cat:"Produce"},
  {name:"Coffee (1-2 cups/day)",status:"caution",note:"Limit to 200mg caffeine/day (ACOG).",cat:"Beverages"},
  {name:"Herbal tea (most types)",status:"caution",note:"Some herbs not studied in pregnancy. Check with provider.",cat:"Beverages"},
  {name:"Alcohol",status:"avoid",note:"No known safe amount during pregnancy.",cat:"Beverages"},
  {name:"Pasteurized juice",status:"safe",note:"Safe when pasteurized.",cat:"Beverages"},
  {name:"Unpasteurized juice",status:"avoid",note:"Risk of harmful bacteria.",cat:"Beverages"},
];

const COLORS={safe:"bg-green-100 text-green-700 border-green-200",caution:"bg-amber-50 text-amber-700 border-amber-200",avoid:"bg-red-50 text-red-700 border-red-200"};
const LABELS={safe:"✅ Safe",caution:"⚠️ Caution",avoid:"❌ Avoid"};

export function SafeFoodCalc(){
  const[search,setSearch]=useState("");
  const[filter,setFilter]=useState("all");
  const filtered=FOODS.filter(f=>{
    const matchSearch=f.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter=filter==="all"||f.status===filter;
    return matchSearch&&matchFilter;
  });

  return(
    <CalcShell>
      <div className="mb-5">
        <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="Search a food (e.g. sushi, cheese, coffee...)"
          className="w-full px-4 py-3 border-[1.5px] border-slate-200 rounded-lg text-[15px] focus:border-brand-500 focus:outline-none" />
      </div>
      <div className="flex gap-2 mb-5">
        {[{v:"all",l:"All"},{v:"safe",l:"✅ Safe"},{v:"caution",l:"⚠️ Caution"},{v:"avoid",l:"❌ Avoid"}].map(o=>(
          <button key={o.v} onClick={()=>setFilter(o.v)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${filter===o.v?"bg-brand-600 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
            {o.l}
          </button>
        ))}
      </div>
      <div className="space-y-2.5">
        {filtered.length===0&&<p className="text-sm text-slate-400 text-center py-8">No foods match your search.</p>}
        {filtered.map(f=>(
          <div key={f.name} className={`p-3.5 rounded-xl border ${COLORS[f.status]}`}>
            <div className="flex justify-between items-start gap-3">
              <div>
                <div className="font-semibold text-sm">{f.name}</div>
                <div className="text-xs mt-0.5 opacity-80">{f.note}</div>
              </div>
              <span className="text-xs font-bold whitespace-nowrap">{LABELS[f.status]}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 mt-4">Showing {filtered.length} of {FOODS.length} foods. Sources: ACOG, FDA, NHS.</p>
    </CalcShell>
  );
}
