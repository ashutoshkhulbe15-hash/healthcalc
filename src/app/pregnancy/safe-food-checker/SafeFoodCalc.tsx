"use client";
import { useState } from "react";
import Link from "next/link";
import { CalcShell } from "@/components/CalcUI";

const TOPICS = [
  { name: "Alcohol", href: "/pregnancy/safe-food/alcohol" },
  { name: "Coffee and caffeine", href: "/pregnancy/safe-food/coffee" },
  { name: "Matcha and caffeine", href: "/pregnancy/safe-food/matcha" },
  { name: "Eggs", href: "/pregnancy/safe-food/eggs" },
  { name: "Peanut butter", href: "/pregnancy/safe-food/peanut-butter" },
  { name: "Salmon", href: "/pregnancy/safe-food/salmon" },
  { name: "Cod", href: "/pregnancy/safe-food/cod" },
  { name: "Tuna", href: "/pregnancy/safe-food/tuna" },
  { name: "Sushi", href: "/pregnancy/safe-food/sushi" },
];

export function SafeFoodCalc() {
  const [search, setSearch] = useState("");
  const filtered = TOPICS.filter((topic) => topic.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <CalcShell>
      <div className="mb-5">
        <label htmlFor="food-search" className="block text-sm font-medium text-slate-600 mb-2">Search food topics</label>
        <input id="food-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)}
          placeholder="Search a topic (e.g. tuna, eggs, coffee)"
          className="w-full px-4 py-3 border-[1.5px] border-slate-200 rounded-lg text-[15px] focus:border-brand-500 focus:outline-none" />
      </div>
      <div className="space-y-2.5">
        {filtered.length === 0 && <p className="text-sm text-slate-500 text-center py-8">No listed topics match your search.</p>}
        {filtered.map((topic) => (
          <Link key={topic.href} href={topic.href} className="block p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 no-underline hover:border-brand-400 hover:bg-brand-50">
            <span className="font-semibold text-sm">{topic.name}</span>
            <span className="block text-xs text-slate-600 mt-0.5">Open the topic guide</span>
          </Link>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4">Showing {filtered.length} of {TOPICS.length} listed topics. This directory does not assess a food, meal or individual risk. Read each guide and its sources; other foods are not included in this search.</p>
    </CalcShell>
  );
}
