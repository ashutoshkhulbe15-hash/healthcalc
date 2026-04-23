// ═══════════════════════════════════════════
// BMI CALCULATOR TEENS — SVGs
// ═══════════════════════════════════════════

export function TeenVsAdultBMI() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Teen BMI ≠ Adult BMI</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Left: Adult BMI - fixed categories */}
          <rect x="10" y="10" width="290" height="180" rx="12" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <text x="155" y="35" fontSize="12" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Adult BMI Scale</text>
          <text x="155" y="52" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Same categories for everyone</text>
          {[
            {y:68, label:"Underweight", range:"< 18.5", color:"#3B82F6", w:60},
            {y:96, label:"Normal", range:"18.5 – 24.9", color:"#10B981", w:140},
            {y:124, label:"Overweight", range:"25 – 29.9", color:"#F59E0B", w:100},
            {y:152, label:"Obese", range:"≥ 30", color:"#EF4444", w:80},
          ].map((r,i) => (
            <g key={i}>
              <rect x="30" y={r.y} width={r.w} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x="35" y={r.y+14} fontSize="10" fill={r.color} fontWeight="600" fontFamily="system-ui">{r.label}</text>
              <text x="200" y={r.y+14} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.range}</text>
            </g>
          ))}
          
          {/* Arrow */}
          <text x="320" y="105" fontSize="20" fill="#94A3B8" textAnchor="middle">→</text>
          
          {/* Right: Teen BMI - percentile based */}
          <rect x="340" y="10" width="290" height="180" rx="12" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="1.5"/>
          <text x="485" y="35" fontSize="12" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Teen BMI (CDC Percentiles)</text>
          <text x="485" y="52" fontSize="9" fill="#5EEAD4" textAnchor="middle" fontFamily="system-ui">Changes by age & sex</text>
          
          <text x="365" y="80" fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">BMI = 22</text>
          {[
            {y:95, age:"Age 12 girl", pct:"89th percentile", verdict:"Overweight", color:"#F59E0B"},
            {y:120, age:"Age 15 girl", pct:"58th percentile", verdict:"Healthy", color:"#10B981"},
            {y:145, age:"Age 18 girl", pct:"41st percentile", verdict:"Healthy", color:"#10B981"},
          ].map((r,i) => (
            <g key={i}>
              <text x="365" y={r.y+12} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.age}</text>
              <text x="460" y={r.y+12} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.pct}</text>
              <rect x="560" y={r.y} width="60" height="18" rx="9" fill={r.color} opacity="0.15"/>
              <text x="590" y={r.y+12} fontSize="9" fill={r.color} fontWeight="700" textAnchor="middle" fontFamily="system-ui">{r.verdict}</text>
            </g>
          ))}
          <text x="485" y="180" fontSize="9" fill="#0F766E" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Same BMI → different meaning at different ages</text>
        </svg>
      </div>
    </div>
  );
}

export function PercentileCategoriesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">CDC Weight Status Categories for Teens</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="25" width="620" height="32" rx="16" fill="#F1F5F9"/>
          <rect x="10" y="25" width="31" height="32" rx="16" fill="#3B82F6" opacity="0.3"/>
          <rect x="41" y="25" width="465" height="32" fill="#10B981" opacity="0.2"/>
          <rect x="506" y="25" width="62" height="32" fill="#F59E0B" opacity="0.3"/>
          <rect x="568" y="25" width="62" height="32" rx="16" fill="#EF4444" opacity="0.3"/>
          
          <text x="26" y="18" fontSize="9" fill="#3B82F6" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Under</text>
          <text x="273" y="18" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Healthy Weight (5th–84th percentile)</text>
          <text x="537" y="18" fontSize="9" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Over</text>
          <text x="599" y="18" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Obese</text>
          
          {[{x:41,l:"5th"},{x:506,l:"85th"},{x:568,l:"95th"}].map((m,i) => (
            <g key={i}><line x1={m.x} y1={57} x2={m.x} y2={70} stroke="#94A3B8" strokeWidth="1.5"/><text x={m.x} y={82} fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{m.l}</text></g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function PubertyGrowthSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How Puberty Affects Body Composition Differently</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Girls */}
          <rect x="10" y="10" width="300" height="130" rx="12" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="1"/>
          <text x="160" y="35" fontSize="12" fill="#BE185D" textAnchor="middle" fontWeight="700" fontFamily="system-ui">👧 Girls During Puberty</text>
          <text x="160" y="55" fontSize="10" fill="#9D174D" textAnchor="middle" fontFamily="system-ui">Ages 8–13 typically</text>
          {[
            {y:75, text:"↑ Body fat increases (normal & necessary)"},
            {y:95, text:"↑ Hip width and breast development"},
            {y:115, text:"↑ BMI percentile often rises — expected"},
          ].map((r,i) => (
            <g key={i}><text x="30" y={r.y} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.text}</text></g>
          ))}
          
          {/* Boys */}
          <rect x="330" y="10" width="300" height="130" rx="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1"/>
          <text x="480" y="35" fontSize="12" fill="#1D4ED8" textAnchor="middle" fontWeight="700" fontFamily="system-ui">👦 Boys During Puberty</text>
          <text x="480" y="55" fontSize="10" fill="#1E40AF" textAnchor="middle" fontFamily="system-ui">Ages 9–14 typically</text>
          {[
            {y:75, text:"↑ Muscle mass increases significantly"},
            {y:95, text:"↑ Shoulder width and height spurts"},
            {y:115, text:"↑ BMI rises from muscle, not fat"},
          ].map((r,i) => (
            <g key={i}><text x="350" y={r.y} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.text}</text></g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CALORIE DEFICIT — SVGs
// ═══════════════════════════════════════════

export function DeficitMechanismSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How a Calorie Deficit Creates Fat Loss</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="600" height="40" rx="8" fill="#0F766E" opacity="0.1" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="0"/>
          <text x="320" y="40" fontSize="13" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Your TDEE: 2,400 calories burned/day</text>
          
          <rect x="20" y="70" width="450" height="40" rx="8" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
          <text x="245" y="95" fontSize="13" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">You eat: 1,900 cal/day</text>
          
          <rect x="470" y="70" width="150" height="40" rx="8" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="545" y="88" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Deficit</text>
          <text x="545" y="103" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">500 cal/day</text>
          
          <path d="M320 115 L320 135" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arr)"/>
          <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="#64748B"/></marker></defs>
          
          <rect x="200" y="140" width="240" height="28" rx="14" fill="#0F766E" opacity="0.1"/>
          <text x="320" y="158" fontSize="11" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">≈ 1 lb fat loss per week (3,500 cal = 1 lb)</text>
        </svg>
      </div>
    </div>
  );
}

export function DeficitSizeComparisonSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Moderate vs Aggressive Deficit — What Research Shows</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Moderate */}
          <rect x="10" y="10" width="300" height="160" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"/>
          <text x="160" y="35" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Moderate Deficit (300-500 cal)</text>
          {[
            {y:58, text:"Fat loss: 0.5–1 lb/week"},
            {y:78, text:"Muscle preserved: ~95%"},
            {y:98, text:"Energy levels: maintained"},
            {y:118, text:"Sustainability: 6+ months"},
            {y:138, text:"Metabolic adaptation: minimal"},
          ].map((r,i) => (
            <g key={i}>
              <circle cx="30" cy={r.y-3} r="3" fill="#10B981"/>
              <text x="42" y={r.y} fontSize="11" fill="#334155" fontFamily="system-ui">{r.text}</text>
            </g>
          ))}
          
          {/* Aggressive */}
          <rect x="330" y="10" width="300" height="160" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="480" y="35" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">⚠️ Aggressive Deficit (750+ cal)</text>
          {[
            {y:58, text:"Fat loss: 1.5–2 lb/week initially"},
            {y:78, text:"Muscle loss: 20-30% of weight lost"},
            {y:98, text:"Energy: crashes, brain fog"},
            {y:118, text:"Sustainability: 2-6 weeks typical"},
            {y:138, text:"Metabolic adaptation: significant"},
          ].map((r,i) => (
            <g key={i}>
              <circle cx="350" cy={r.y-3} r="3" fill="#EF4444"/>
              <text x="362" y={r.y} fontSize="11" fill="#334155" fontFamily="system-ui">{r.text}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function TDEEComponentsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">What Makes Up Your Daily Calorie Burn (TDEE)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="380" height="44" rx="8" fill="#0F766E" opacity="0.15" stroke="#0F766E" strokeWidth="1"/>
          <text x="200" y="56" fontSize="13" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">BMR 60-70%</text>

          <rect x="390" y="30" width="60" height="44" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1"/>
          <text x="420" y="56" fontSize="10" fill="#7C3AED" textAnchor="middle" fontWeight="600" fontFamily="system-ui">TEF 10%</text>

          <rect x="450" y="30" width="110" height="44" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="1"/>
          <text x="505" y="56" fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">NEAT 15-20%</text>

          <rect x="560" y="30" width="70" height="44" rx="8" fill="#EC4899" opacity="0.15" stroke="#EC4899" strokeWidth="1"/>
          <text x="595" y="56" fontSize="10" fill="#BE185D" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Exercise</text>

          <text x="200" y="95" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Breathing, organs, brain</text>
          <text x="420" y="95" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Digesting</text>
          <text x="505" y="95" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Walking, fidgeting</text>
          <text x="595" y="95" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Gym, sports</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BMI CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function BMIScaleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">WHO BMI Classification Scale</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="bmi-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#3B82F6"/><stop offset="22%" stopColor="#10B981"/><stop offset="50%" stopColor="#F59E0B"/><stop offset="75%" stopColor="#EF4444"/><stop offset="100%" stopColor="#991B1B"/></linearGradient></defs>
          <rect x="20" y="15" width="600" height="26" rx="13" fill="url(#bmi-g)" opacity="0.6"/>
          {[{x:20,v:"< 18.5",l:"Underweight"},{x:152,v:"18.5",l:"Normal"},{x:320,v:"25",l:"Overweight"},{x:470,v:"30",l:"Obese I"},{x:560,v:"35+",l:"Obese II+"}].map((m,i)=>(
            <g key={i}><line x1={m.x} y1={41} x2={m.x} y2={52} stroke="#64748B" strokeWidth="1.5"/><text x={m.x} y={64} fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{m.v}</text><text x={m.x+40} y={10} fontSize="9" fill="#475569" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{m.l}</text></g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BMILimitationsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">When BMI Gets It Wrong — Same BMI, Different Bodies</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:30,label:"Athlete",bmi:"BMI 28",bf:"Body fat 12%",verdict:"Muscular — healthy",color:"#10B981",icon:"🏋️"},
            {x:230,label:"Sedentary adult",bmi:"BMI 28",bf:"Body fat 32%",verdict:"Overweight — at risk",color:"#F59E0B",icon:"🪑"},
            {x:430,label:"Elderly person",bmi:"BMI 22",bf:"Body fat 30%",verdict:"Normal BMI — low muscle",color:"#EF4444",icon:"👴"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="10" width="180" height="120" rx="12" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+90} y="35" fontSize="20" textAnchor="middle">{p.icon}</text>
              <text x={p.x+90} y="55" fontSize="12" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.label}</text>
              <text x={p.x+90} y="75" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.bmi}</text>
              <text x={p.x+90} y="93" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{p.bf}</text>
              <text x={p.x+90} y="115" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PREGNANCY WEIGHT GAIN — SVGs
// ═══════════════════════════════════════════

export function IOMRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">IOM Recommended Weight Gain by Pre-Pregnancy BMI</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:15,label:"Underweight (BMI < 18.5)",range:"28–40 lbs (12.5–18 kg)",w:440,color:"#3B82F6"},
            {y:55,label:"Normal (BMI 18.5–24.9)",range:"25–35 lbs (11.5–16 kg)",w:380,color:"#10B981"},
            {y:95,label:"Overweight (BMI 25–29.9)",range:"15–25 lbs (7–11.5 kg)",w:260,color:"#F59E0B"},
            {y:135,label:"Obese (BMI ≥ 30)",range:"11–20 lbs (5–9 kg)",w:200,color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+20} fontSize="11" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.label}</text>
              <rect x="230" y={r.y+4} width={r.w} height="26" rx="6" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1.5"/>
              <text x={230+r.w/2} y={r.y+21} fontSize="11" fill={r.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{r.range}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function WeightBreakdownSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Where Does Pregnancy Weight Actually Go?</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:10,label:"Baby",lbs:"7.5 lbs",pct:"25%",w:160,color:"#EC4899"},
            {y:42,label:"Placenta",lbs:"1.5 lbs",pct:"5%",w:32,color:"#F472B6"},
            {y:74,label:"Amniotic fluid",lbs:"2 lbs",pct:"7%",w:42,color:"#A78BFA"},
            {y:106,label:"Uterus growth",lbs:"2 lbs",pct:"7%",w:42,color:"#8B5CF6"},
            {y:138,label:"Increased blood volume",lbs:"4 lbs",pct:"13%",w:84,color:"#EF4444"},
            {y:170,label:"Maternal fat stores",lbs:"7 lbs",pct:"23%",w:148,color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="11" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.label}</text>
              <rect x="200" y={r.y+2} width={r.w} height="22" rx="4" fill={r.color} opacity="0.25" stroke={r.color} strokeWidth="1"/>
              <text x={210+r.w} y={r.y+17} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.lbs} ({r.pct})</text>
            </g>
          ))}
          <text x="320" y="10" fontSize="9" fill="#94A3B8" fontFamily="system-ui">Based on ~30 lb total gain (normal BMI)</text>
        </svg>
      </div>
    </div>
  );
}

export function TrimesterGainSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Weight Gain Pattern by Trimester (Normal BMI)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,w:170,label:"1st Trimester",sub:"Weeks 1–13",gain:"1–4 lbs total",rate:"~0.5 lb/week",color:"#A78BFA",h:30},
            {x:195,w:210,label:"2nd Trimester",sub:"Weeks 14–27",gain:"12–14 lbs",rate:"~1 lb/week",color:"#8B5CF6",h:60},
            {x:420,w:210,label:"3rd Trimester",sub:"Weeks 28–40",gain:"8–12 lbs",rate:"~1 lb/week",color:"#7C3AED",h:80},
          ].map((r,i)=>(
            <g key={i}>
              <rect x={r.x} y={90-r.h} width={r.w} height={r.h} rx="8" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1.5"/>
              <text x={r.x+r.w/2} y={95-r.h+15} fontSize="11" fill={r.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{r.label}</text>
              <text x={r.x+r.w/2} y={95-r.h+30} fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{r.sub}</text>
              <text x={r.x+r.w/2} y={95-r.h+45} fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.gain}</text>
              <text x={r.x+r.w/2} y={100} fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{r.rate}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// STEAK FOOD PAGE — SVGs
// ═══════════════════════════════════════════

export function SteakTempSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Steak Temperature Safety During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#EF4444"/><stop offset="55%" stopColor="#F59E0B"/><stop offset="70%" stopColor="#10B981"/><stop offset="100%" stopColor="#10B981"/></linearGradient></defs>
          <rect x="30" y="20" width="580" height="30" rx="15" fill="url(#tg)" opacity="0.3"/>
          <rect x="30" y="20" width="280" height="30" rx="15" fill="#EF4444" opacity="0.1" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="170" y="40" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ NOT SAFE</text>
          <rect x="420" y="20" width="190" height="30" rx="15" fill="#10B981" opacity="0.1" stroke="#10B981" strokeWidth="1.5"/>
          <text x="515" y="40" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ SAFE</text>
          {[
            {x:50,t:"120°F",n:"Rare",s:false},{x:160,t:"130°F",n:"Med-Rare",s:false},{x:280,t:"140°F",n:"Medium",s:false},{x:420,t:"145°F",n:"Med-Well ✓",s:true},{x:540,t:"160°F",n:"Well Done",s:true},
          ].map((m,i)=>(
            <g key={i}>
              <line x1={m.x} y1={50} x2={m.x} y2={68} stroke={m.s?"#059669":"#DC2626"} strokeWidth="2"/>
              <text x={m.x} y={82} fontSize="11" fill={m.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.t}</text>
              <text x={m.x} y={96} fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{m.n}</text>
            </g>
          ))}
          <text x="420" y="118" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">↑ Minimum: 145°F + 3 min rest</text>
        </svg>
      </div>
    </div>
  );
}

export function MeatRisksSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Risks of Undercooked Meat During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,label:"Toxoplasma gondii",risk:"Parasite in raw/rare meat",effect:"Can cause miscarriage, birth defects",color:"#EF4444",icon:"🦠"},
            {x:220,label:"E. coli",risk:"Bacteria on surface/ground meat",effect:"Kidney damage, dehydration",color:"#F59E0B",icon:"🔬"},
            {x:430,label:"Listeria",risk:"Survives refrigeration",effect:"Stillbirth, premature delivery",color:"#DC2626",icon:"⚠️"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="200" height="100" rx="12" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+100} y="28" fontSize="16" textAnchor="middle">{p.icon}</text>
              <text x={p.x+100} y="48" fontSize="11" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.label}</text>
              <text x={p.x+100} y="66" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{p.risk}</text>
              <text x={p.x+100} y="84" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="500" fontFamily="system-ui">{p.effect}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TUNA — SVGs
// ═══════════════════════════════════════════

export function TunaMercuryLevelsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Mercury Levels by Tuna Type — FDA Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:10, label:"Light/Skipjack", ppm:"0.12 ppm", verdict:"✅ Safe (2-3x/wk)", w:72, color:"#10B981"},
            {y:50, label:"Yellowfin/Ahi", ppm:"0.35 ppm", verdict:"⚠️ Limit (1x/wk)", w:210, color:"#F59E0B"},
            {y:90, label:"Albacore/White", ppm:"0.35 ppm", verdict:"⚠️ Limit (1x/wk)", w:210, color:"#F59E0B"},
            {y:130, label:"Bigeye (sushi)", ppm:"0.69 ppm", verdict:"❌ Avoid", w:414, color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+20} fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.label}</text>
              <rect x="150" y={r.y+4} width={r.w} height="24" rx="6" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1.5"/>
              <text x={155+r.w} y={r.y+20} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.ppm}</text>
              <text x="480" y={r.y+20} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function TunaVsSalmonSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Tuna vs Salmon — Pregnancy Comparison</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="300" height="120" rx="12" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5"/>
          <text x="160" y="35" fontSize="13" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">🐟 Light Tuna</text>
          {[{y:55,t:"Mercury: 0.12 ppm (low)"},{y:75,t:"Omega-3: 0.24g per 3oz"},{y:95,t:"Protein: 22g per 3oz"},{y:115,t:"Limit: 2-3 servings/week"}].map((r,i)=>(
            <text key={i} x="30" y={r.y} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
          <rect x="330" y="10" width="300" height="120" rx="12" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="480" y="35" fontSize="13" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">🍣 Salmon</text>
          {[{y:55,t:"Mercury: 0.02 ppm (very low)"},{y:75,t:"Omega-3: 1.24g per 3oz ⭐"},{y:95,t:"Protein: 22g per 3oz"},{y:115,t:"Limit: 2-3 servings/week"}].map((r,i)=>(
            <text key={i} x="350" y={r.y} fontSize="10" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function WeeklyFishLimitSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">FDA Weekly Fish Recommendation During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="20" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">Weekly target: 8-12 oz (2-3 servings) of low-mercury fish</text>
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=>(
            <g key={i}>
              <rect x={10+i*90} y="35" width="80" height="36" rx="8" fill={i===1||i===4?"#10B981":"#F1F5F9"} opacity={i===1||i===4?0.15:1} stroke={i===1||i===4?"#10B981":"#E2E8F0"} strokeWidth="1.5"/>
              <text x={50+i*90} y="50" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{d}</text>
              <text x={50+i*90} y="63" fontSize="10" fill={i===1||i===4?"#059669":"#CBD5E1"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{i===1?"🐟 Salmon":i===4?"🐟 Tuna":"—"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SOFT CHEESE — SVGs
// ═══════════════════════════════════════════

export function CheeseSafetyMatrixSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Cheese Safety During Pregnancy — Quick Reference</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="200" height="160" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"/>
          <text x="110" y="35" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Always Safe</text>
          {["Cheddar","Parmesan","Swiss","Mozzarella (pasteurized)","Cream cheese"].map((c,i)=>(
            <text key={i} x="30" y={58+i*20} fontSize="10" fill="#334155" fontFamily="system-ui">• {c}</text>
          ))}
          <rect x="220" y="10" width="200" height="160" rx="12" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5"/>
          <text x="320" y="35" fontSize="12" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">⚠️ Only If Pasteurized</text>
          {["Brie","Feta","Camembert","Goat cheese","Ricotta"].map((c,i)=>(
            <text key={i} x="240" y={58+i*20} fontSize="10" fill="#334155" fontFamily="system-ui">• {c}</text>
          ))}
          <rect x="430" y="10" width="200" height="160" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="530" y="35" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Avoid</text>
          {["Unpasteurized brie","Raw-milk feta","Artisanal soft cheese","Blue cheese (raw)","Queso fresco (raw)"].map((c,i)=>(
            <text key={i} x="450" y={58+i*20} fontSize="10" fill="#334155" fontFamily="system-ui">• {c}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ListeriaSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Listeria Is Especially Dangerous During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🦠",title:"Survives cold",desc:"Grows at fridge temps (4°C/40°F) unlike most bacteria",color:"#EF4444"},
            {x:170,icon:"🤰",title:"10x higher risk",desc:"Pregnant women are 10x more likely to get listeriosis",color:"#DC2626"},
            {x:330,icon:"⏰",title:"Delayed symptoms",desc:"Can take 1-4 weeks to show symptoms after exposure",color:"#F59E0B"},
            {x:490,icon:"⚠️",title:"Serious outcomes",desc:"Miscarriage, stillbirth, premature delivery, newborn infection",color:"#991B1B"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="150" height="100" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+75} y="30" fontSize="18" textAnchor="middle">{p.icon}</text>
              <text x={p.x+75} y="50" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+10} y="68" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(0,30)}</text>
              <text x={p.x+10} y="82" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(30)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function PasteurizationCheckSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How to Check If Cheese Is Pasteurized</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10, step:"1", title:"Check the label", desc:"Look for 'pasteurized milk' in ingredients", color:"#0F766E"},
            {x:170, step:"2", title:"US store-bought?", desc:"Most US commercial cheese is pasteurized by law", color:"#0F766E"},
            {x:330, step:"3", title:"Imported or artisan?", desc:"More likely unpasteurized — ask the vendor directly", color:"#F59E0B"},
            {x:490, step:"4", title:"Restaurant?", desc:"Ask your server — most use pasteurized, but confirm", color:"#F59E0B"},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x+20} cy="30" r="16" fill={p.color} opacity="0.15" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+20} y="35" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.step}</text>
              {i<3 && <line x1={p.x+40} y1="30" x2={p.x+160} y2="30" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4"/>}
              <text x={p.x+10} y="65" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+10} y="82" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(0,35)}</text>
              <text x={p.x+10} y="96" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(35)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SALMON — SVGs
// ═══════════════════════════════════════════

export function SalmonNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Salmon Is a Pregnancy Superfood — Per 3oz Serving</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🧠",nutrient:"DHA Omega-3",amount:"1.24g",why:"Baby's brain & eye development",pct:"250% of minimum",color:"#8B5CF6"},
            {x:170,icon:"💪",nutrient:"Protein",amount:"22g",why:"Tissue growth & repair",pct:"40% daily need",color:"#0F766E"},
            {x:330,icon:"☀️",nutrient:"Vitamin D",amount:"570 IU",why:"Bone development & immunity",pct:"95% daily need",color:"#F59E0B"},
            {x:490,icon:"🩸",nutrient:"B12",amount:"2.4μg",why:"Red blood cell formation",pct:"100% daily need",color:"#EF4444"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="150" height="118" rx="12" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+75} y="30" fontSize="20" textAnchor="middle">{p.icon}</text>
              <text x={p.x+75} y="50" fontSize="11" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.nutrient}</text>
              <text x={p.x+75} y="68" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.amount}</text>
              <text x={p.x+75} y="85" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{p.why}</text>
              <text x={p.x+75} y="105" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SalmonCookTempSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Salmon Cooking Guide for Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,method:"Raw/Sashimi",temp:"—",safe:false,icon:"❌"},
            {x:135,method:"Smoked (cold)",temp:"~80°F",safe:false,icon:"❌"},
            {x:260,method:"Medium rare",temp:"125°F",safe:false,icon:"❌"},
            {x:385,method:"Fully cooked",temp:"145°F",safe:true,icon:"✅"},
            {x:510,method:"Canned",temp:"Sterilized",safe:true,icon:"✅"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="10" width="115" height="70" rx="10" fill={m.safe?"#10B981":"#EF4444"} opacity="0.06" stroke={m.safe?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={m.x+57} y="32" fontSize="16" textAnchor="middle">{m.icon}</text>
              <text x={m.x+57} y="50" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{m.method}</text>
              <text x={m.x+57} y="66" fontSize="10" fill={m.safe?"#059669":"#DC2626"} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.temp}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function FishMercuryRankSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Mercury Levels — Best to Worst Fish for Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="18" fontSize="10" fill="#059669" fontWeight="700" fontFamily="system-ui">LOW MERCURY — EAT FREELY</text>
          {[{x:10,f:"Salmon"},{x:100,f:"Sardines"},{x:190,f:"Tilapia"},{x:280,f:"Shrimp"},{x:370,f:"Cod"}].map((p,i)=>(
            <g key={i}><rect x={p.x} y="25" width="80" height="26" rx="6" fill="#10B981" opacity="0.12" stroke="#10B981" strokeWidth="1"/><text x={p.x+40} y="42" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.f}</text></g>
          ))}
          <text x="10" y="72" fontSize="10" fill="#B45309" fontWeight="700" fontFamily="system-ui">MODERATE — LIMIT TO 1x/WEEK</text>
          {[{x:10,f:"Albacore tuna"},{x:130,f:"Halibut"},{x:220,f:"Snapper"}].map((p,i)=>(
            <g key={i}><rect x={p.x} y="80" width={i===0?110:80} height="26" rx="6" fill="#F59E0B" opacity="0.12" stroke="#F59E0B" strokeWidth="1"/><text x={p.x+(i===0?55:40)} y="97" fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.f}</text></g>
          ))}
          <text x="10" y="126" fontSize="10" fill="#DC2626" fontWeight="700" fontFamily="system-ui">HIGH MERCURY — AVOID</text>
          {[{x:10,f:"Shark"},{x:80,f:"Swordfish"},{x:170,f:"King mackerel"},{x:290,f:"Bigeye tuna"},{x:400,f:"Tilefish"}].map((p,i)=>(
            <g key={i}><rect x={p.x} y="132" width={i===2?110:80} height="4" rx="2" fill="#EF4444" opacity="0.5"/></g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PRE-MADE SALADS — SVGs  
// ═══════════════════════════════════════════

export function SaladRiskVsSafeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Pre-Made vs Homemade Salad — Risk Comparison</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="300" height="130" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="160" y="35" fontSize="13" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Pre-Made / Deli Salads</text>
          {["Multiple handlers = contamination risk","Sits in display case for hours/days","Cross-contamination from shared equipment","Listeria grows even while refrigerated","Cannot verify washing or freshness"].map((t,i)=>(
            <text key={i} x="30" y={56+i*18} fontSize="10" fill="#64748B" fontFamily="system-ui">• {t}</text>
          ))}
          <rect x="330" y="10" width="300" height="130" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"/>
          <text x="480" y="35" fontSize="13" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Homemade Fresh Salads</text>
          {["You control washing and prep","Eaten immediately after making","No shared equipment risk","Fresh ingredients, known source","Same great nutrition, zero risk"].map((t,i)=>(
            <text key={i} x="350" y={56+i*18} fontSize="10" fill="#64748B" fontFamily="system-ui">• {t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SafeSaladTipsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">4 Steps to Safe Salads During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,step:"1",title:"Wash thoroughly",desc:"Rinse all produce under running water",color:"#0F766E"},
            {x:170,step:"2",title:"Use fresh ingredients",desc:"No pre-cut bags sitting in the fridge for days",color:"#0F766E"},
            {x:330,step:"3",title:"Clean surfaces",desc:"Sanitize cutting board and hands before prep",color:"#0F766E"},
            {x:490,step:"4",title:"Eat immediately",desc:"Do not store — eat within an hour of making",color:"#0F766E"},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x+18} cy="25" r="14" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+18} y="30" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.step}</text>
              {i<3&&<line x1={p.x+36} y1="25" x2={p.x+158} y2="25" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4"/>}
              <text x={p.x+5} y="58" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+5} y="76" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SUSHI — SVGs
// ═══════════════════════════════════════════

export function SushiSafeUnsafeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Sushi During Pregnancy — What Is Safe vs Not</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="300" height="140" rx="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="160" y="35" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Avoid (Raw Fish)</text>
          {["Salmon sashimi","Tuna nigiri (raw)","Poke bowls (raw fish)","Ceviche","Any 'sushi-grade' raw fish"].map((t,i)=>(
            <text key={i} x="30" y={58+i*20} fontSize="10" fill="#64748B" fontFamily="system-ui">• {t}</text>
          ))}
          <rect x="330" y="10" width="300" height="140" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"/>
          <text x="480" y="35" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Safe (Cooked/Veggie)</text>
          {["California roll (imitation crab)","Shrimp tempura roll","Eel/unagi roll (cooked)","Vegetable roll","Cooked salmon roll"].map((t,i)=>(
            <text key={i} x="350" y={58+i*20} fontSize="10" fill="#64748B" fontFamily="system-ui">• {t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function RawFishRisksSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">3 Risks of Raw Fish During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🪱",title:"Parasites",desc:"Anisakis worms survive in raw fish. Freezing kills some but not all.",color:"#8B5CF6"},
            {x:220,icon:"🦠",title:"Bacteria",desc:"Listeria and Salmonella thrive on raw seafood at any temperature.",color:"#EF4444"},
            {x:430,icon:"🧪",title:"Mercury",desc:"Raw tuna in sushi is often bigeye — the highest-mercury species.",color:"#F59E0B"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="200" height="90" rx="12" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+100} y="30" fontSize="20" textAnchor="middle">{p.icon}</text>
              <text x={p.x+100} y="50" fontSize="11" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+15} y="70" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(0,45)}</text>
              <text x={p.x+15} y="84" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc.substring(45)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SushiOrderingGuideSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How to Order Sushi Safely While Pregnant</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,step:"1",text:"Ask: 'Is the fish cooked?'",color:"#0F766E"},
            {x:170,step:"2",text:"Choose: tempura, eel, veggie",color:"#0F766E"},
            {x:330,step:"3",text:"Avoid: anything raw or 'sushi-grade'",color:"#EF4444"},
            {x:490,step:"4",text:"Enjoy: soy sauce & wasabi are safe",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x+18} cy="25" r="14" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+18} y="30" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.step}</text>
              <text x={p.x+5} y="58" fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{p.text.substring(0,30)}</text>
              <text x={p.x+5} y="72" fontSize="10" fill="#334155" fontFamily="system-ui">{p.text.substring(30)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TDEE CALCULATOR — SVGs (additional)
// ═══════════════════════════════════════════

export function TDEEFormulaFlowSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How TDEE Is Calculated — Step by Step</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,label:"Your Stats",sub:"Age, weight, height, sex",color:"#64748B",icon:"📝"},
            {x:155,label:"BMR",sub:"Mifflin-St Jeor formula",color:"#0F766E",icon:"🔬"},
            {x:300,label:"× Activity",sub:"Multiplier (1.2–1.9)",color:"#8B5CF6",icon:"🏃"},
            {x:455,label:"= Your TDEE",sub:"Total daily calories",color:"#10B981",icon:"🎯"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="10" width="130" height="75" rx="12" fill={s.color} opacity="0.07" stroke={s.color} strokeWidth="1.5"/>
              <text x={s.x+65} y="35" fontSize="16" textAnchor="middle">{s.icon}</text>
              <text x={s.x+65} y="55" fontSize="11" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.label}</text>
              <text x={s.x+65} y="72" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{s.sub}</text>
              {i<3&&<text x={s.x+142} y="50" fontSize="16" fill="#CBD5E1" textAnchor="middle">→</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ActivityMultipliersSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Activity Multipliers — Impact on a 1,800 Cal BMR</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,label:"Sedentary (1.2)",tdee:"2,160",w:216,color:"#94A3B8"},
            {y:40,label:"Light (1.375)",tdee:"2,475",w:248,color:"#3B82F6"},
            {y:75,label:"Moderate (1.55)",tdee:"2,790",w:279,color:"#10B981"},
            {y:110,label:"Very Active (1.725)",tdee:"3,105",w:311,color:"#F59E0B"},
            {y:145,label:"Extreme (1.9)",tdee:"3,420",w:342,color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+18} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.label}</text>
              <rect x="170" y={r.y+2} width={r.w} height="22" rx="5" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1"/>
              <text x={175+r.w} y={r.y+17} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.tdee} cal</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function TDEEGoalsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">TDEE Application — Cut, Maintain, or Bulk</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,label:"Fat Loss",sub:"TDEE − 300-500 cal",example:"2,400 → eat 1,900-2,100",color:"#10B981",icon:"📉"},
            {x:220,label:"Maintain",sub:"Eat at TDEE",example:"2,400 → eat ~2,400",color:"#3B82F6",icon:"⚖️"},
            {x:430,label:"Lean Bulk",sub:"TDEE + 250-500 cal",example:"2,400 → eat 2,650-2,900",color:"#F59E0B",icon:"📈"},
          ].map((g,i)=>(
            <g key={i}>
              <rect x={g.x} y="5" width="195" height="88" rx="12" fill={g.color} opacity="0.06" stroke={g.color} strokeWidth="1.5"/>
              <text x={g.x+97} y="28" fontSize="16" textAnchor="middle">{g.icon}</text>
              <text x={g.x+97} y="48" fontSize="12" fill={g.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{g.label}</text>
              <text x={g.x+97} y="65" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{g.sub}</text>
              <text x={g.x+97} y="82" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{g.example}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MACRO CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function MacroSplitsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Popular Macro Splits by Goal</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,label:"Balanced / Maintain",p:"30%",c:"40%",f:"30%",pw:180,cw:240,fw:180,color:"#3B82F6"},
            {y:45,label:"Fat Loss / High Protein",p:"35%",c:"35%",f:"30%",pw:210,cw:210,fw:180,color:"#10B981"},
            {y:85,label:"Keto",p:"25%",c:"5%",f:"70%",pw:150,cw:30,fw:420,color:"#F59E0B"},
            {y:125,label:"Muscle Gain",p:"30%",c:"45%",f:"25%",pw:180,cw:270,fw:150,color:"#8B5CF6"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+18} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.label}</text>
              <rect x="190" y={r.y+2} width={r.pw*0.7} height="22" rx="4" fill="#EF4444" opacity="0.2"/>
              <text x={190+r.pw*0.35} y={r.y+17} fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="600" fontFamily="system-ui">P {r.p}</text>
              <rect x={190+r.pw*0.7} y={r.y+2} width={r.cw*0.7} height="22" fill="#3B82F6" opacity="0.2"/>
              <text x={190+r.pw*0.7+r.cw*0.35} y={r.y+17} fontSize="9" fill="#2563EB" textAnchor="middle" fontWeight="600" fontFamily="system-ui">C {r.c}</text>
              <rect x={190+r.pw*0.7+r.cw*0.7} y={r.y+2} width={r.fw*0.7} height="22" rx="4" fill="#F59E0B" opacity="0.2"/>
              <text x={190+r.pw*0.7+r.cw*0.7+r.fw*0.35} y={r.y+17} fontSize="9" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">F {r.f}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProteinSourcesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Protein Per Serving — Common Sources</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,food:"Chicken breast (4oz)",g:"35g",w:350,color:"#10B981"},
            {y:30,food:"Greek yogurt (1 cup)",g:"20g",w:200,color:"#3B82F6"},
            {y:55,food:"Eggs (2 large)",g:"12g",w:120,color:"#F59E0B"},
            {y:80,food:"Tofu (1/2 block)",g:"20g",w:200,color:"#8B5CF6"},
            {y:105,food:"Lentils (1 cup cooked)",g:"18g",w:180,color:"#EC4899"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.food}</text>
              <rect x="200" y={r.y+2} width={r.w*0.9} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={205+r.w*0.9} y={r.y+17} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.g}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// EGGS — SVGs
// ═══════════════════════════════════════════

export function EggNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">One Large Egg — Key Pregnancy Nutrients</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🧠",n:"Choline",v:"147mg",pct:"33% DV",note:"Brain development",color:"#8B5CF6"},
            {x:135,icon:"💪",n:"Protein",v:"6g",pct:"Complete",note:"All amino acids",color:"#0F766E"},
            {x:260,icon:"☀️",n:"Vitamin D",v:"44 IU",pct:"7% DV",note:"Bone growth",color:"#F59E0B"},
            {x:385,icon:"🩸",n:"Iron",v:"0.9mg",pct:"5% DV",note:"Blood formation",color:"#EF4444"},
            {x:510,icon:"👁️",n:"Lutein",v:"252μg",pct:"Eye health",note:"Antioxidant",color:"#3B82F6"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="88" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="26" fontSize="16" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="44" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="60" fontSize="13" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="78" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function EggCookingSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Egg Cooking Methods — Safe vs Unsafe During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,m:"Hard-boiled",s:true},{x:110,m:"Scrambled",s:true},{x:210,m:"Omelette",s:true},
            {x:310,m:"Soft-boiled",s:false},{x:420,m:"Runny fried",s:false},{x:530,m:"Raw (mayo)",s:false},
          ].map((e,i)=>(
            <g key={i}>
              <rect x={e.x} y="10" width="95" height="65" rx="10" fill={e.s?"#10B981":"#EF4444"} opacity="0.06" stroke={e.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={e.x+47} y="35" fontSize="16" textAnchor="middle">{e.s?"✅":"❌"}</text>
              <text x={e.x+47} y="55" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.m}</text>
              <text x={e.x+47} y="68" fontSize="8" fill={e.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.s?"SAFE":"AVOID"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// COFFEE — SVGs
// ═══════════════════════════════════════════

export function CaffeineLimitSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Caffeine Content — Common Drinks (mg)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="400" y1="5" x2="400" y2="155" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="405" y="15" fontSize="9" fill="#DC2626" fontWeight="700" fontFamily="system-ui">200mg LIMIT →</text>
          {[
            {y:20,drink:"Starbucks Grande (16oz)",mg:310,color:"#EF4444"},
            {y:45,drink:"Starbucks Tall (12oz)",mg:235,color:"#F59E0B"},
            {y:70,drink:"Home brewed (8oz)",mg:95,color:"#10B981"},
            {y:95,drink:"Black tea (8oz)",mg:47,color:"#10B981"},
            {y:120,drink:"Green tea (8oz)",mg:28,color:"#10B981"},
            {y:145,drink:"Decaf coffee (8oz)",mg:7,color:"#10B981"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.drink}</text>
              <rect x="240" y={r.y} width={r.mg*0.95} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={245+r.mg*0.95} y={r.y+14} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.mg}mg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function CaffeineAlternativesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Caffeine Swaps During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,from:"Grande coffee",to:"Home brewed 8oz",save:"Save 215mg",color:"#10B981"},
            {x:220,from:"Energy drink",to:"Green tea",save:"Save 132mg",color:"#10B981"},
            {x:430,from:"Afternoon coffee",to:"Decaf",save:"Save 88mg",color:"#10B981"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="195" height="78" rx="12" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+97} y="25" fontSize="10" fill="#DC2626" textAnchor="middle" fontFamily="system-ui">❌ {s.from}</text>
              <text x={s.x+97} y="42" fontSize="14" fill="#CBD5E1" textAnchor="middle">↓</text>
              <text x={s.x+97} y="58" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">✅ {s.to}</text>
              <text x={s.x+97} y="75" fontSize="9" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.save}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ALCOHOL — SVGs
// ═══════════════════════════════════════════

export function AlcoholRisksSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How Alcohol Affects the Fetus</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍷",step:"Mother drinks",desc:"Alcohol enters bloodstream",color:"#64748B"},
            {x:170,icon:"🔄",step:"Crosses placenta",desc:"Within minutes, freely",color:"#F59E0B"},
            {x:330,icon:"👶",step:"Same BAC in fetus",desc:"Cannot metabolize alcohol",color:"#EF4444"},
            {x:490,icon:"⚠️",step:"Prolonged exposure",desc:"Circulates much longer in baby",color:"#DC2626"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="145" height="88" rx="12" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+72} y="30" fontSize="18" textAnchor="middle">{s.icon}</text>
              <text x={s.x+72} y="50" fontSize="10" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.step}</text>
              <text x={s.x+72} y="68" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{s.desc}</text>
              {i<3&&<text x={s.x+155} y="48" fontSize="16" fill="#CBD5E1">→</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function FASDAwarenessSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">What Every Authority Says About Alcohol in Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,org:"ACOG",verdict:"No safe amount",color:"#DC2626"},
            {x:135,org:"CDC",verdict:"No safe amount",color:"#DC2626"},
            {x:260,org:"WHO",verdict:"No safe amount",color:"#DC2626"},
            {x:385,org:"NHS (UK)",verdict:"No safe amount",color:"#DC2626"},
            {x:510,org:"AAP",verdict:"No safe amount",color:"#DC2626"},
          ].map((a,i)=>(
            <g key={i}>
              <rect x={a.x} y="10" width="115" height="60" rx="10" fill={a.color} opacity="0.05" stroke={a.color} strokeWidth="1.5"/>
              <text x={a.x+57} y="35" fontSize="13" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{a.org}</text>
              <text x={a.x+57} y="55" fontSize="9" fill={a.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{a.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function MocktailsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Drink Alternatives During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍺",drink:"NA Beer",brand:"Athletic Brewing, Heineken 0.0",color:"#F59E0B"},
            {x:170,icon:"🍷",drink:"NA Wine",brand:"Fre, Ariel, Sutter Home",color:"#8B5CF6"},
            {x:330,icon:"🍹",drink:"Mocktails",brand:"Sparkling water + fruit + herbs",color:"#EC4899"},
            {x:490,icon:"🫧",drink:"Sparkling",brand:"LaCroix, Perrier, Topo Chico",color:"#3B82F6"},
          ].map((d,i)=>(
            <g key={i}>
              <rect x={d.x} y="5" width="145" height="68" rx="10" fill={d.color} opacity="0.06" stroke={d.color} strokeWidth="1"/>
              <text x={d.x+72} y="27" fontSize="18" textAnchor="middle">{d.icon}</text>
              <text x={d.x+72} y="47" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{d.drink}</text>
              <text x={d.x+72} y="63" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{d.brand}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PROTEIN INTAKE — SVGs
// ═══════════════════════════════════════════

export function ProteinByGoalSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Daily Protein Needs by Goal (per lb bodyweight)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,goal:"RDA Minimum",range:"0.36 g/lb",w:108,color:"#94A3B8",note:"Bare minimum — avoids deficiency"},
            {y:35,goal:"General Health",range:"0.5-0.7 g/lb",w:210,color:"#3B82F6",note:"Active adults, general fitness"},
            {y:65,goal:"Muscle Gain",range:"0.7-1.0 g/lb",w:300,color:"#10B981",note:"Resistance training + surplus"},
            {y:95,goal:"Fat Loss",range:"0.8-1.2 g/lb",w:360,color:"#F59E0B",note:"Preserve muscle during deficit"},
            {y:125,goal:"Seniors (65+)",range:"0.5-0.6 g/lb",w:180,color:"#8B5CF6",note:"Sarcopenia prevention"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.goal}</text>
              <rect x="140" y={r.y+2} width={r.w} height="22" rx="5" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1.5"/>
              <text x={145+r.w} y={r.y+17} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.range}</text>
              <text x="520" y={r.y+17} fontSize="8" fill="#94A3B8" fontFamily="system-ui">{r.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProteinTimingSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Optimal Protein Distribution — 150g Daily Target Example</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,meal:"Breakfast",g:"30g",food:"3 eggs + Greek yogurt",color:"#F59E0B"},
            {x:140,meal:"Lunch",g:"40g",food:"Chicken breast + rice",color:"#10B981"},
            {x:280,meal:"Snack",g:"25g",food:"Protein shake or cottage cheese",color:"#3B82F6"},
            {x:430,meal:"Dinner",g:"40g",food:"Salmon + vegetables",color:"#8B5CF6"},
            {x:560,meal:"Before bed",g:"15g",food:"Casein or Greek yogurt",color:"#EC4899"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="120" height="68" rx="10" fill={m.color} opacity="0.06" stroke={m.color} strokeWidth="1"/>
              <text x={m.x+60} y="22" fontSize="10" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.meal}</text>
              <text x={m.x+60} y="40" fontSize="16" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{m.g}</text>
              <text x={m.x+60} y="58" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{m.food}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProteinMythsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Protein Myths — What Research Actually Shows</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,myth:"High protein damages kidneys",truth:"No evidence in healthy kidneys (multiple meta-analyses)",color:"#10B981"},
            {x:220,myth:"Body can only use 30g at once",truth:"MPS peaks at ~40g, but excess still used for energy/other functions",color:"#10B981"},
            {x:430,myth:"Plant protein is incomplete",truth:"Soy is complete. Others combine easily (rice + beans)",color:"#10B981"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="200" height="90" rx="10" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1"/>
              <text x={m.x+100} y="22" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ MYTH: {m.myth}</text>
              <line x1={m.x+20} y1="32" x2={m.x+180} y2="32" stroke="#E2E8F0" strokeWidth="1"/>
              <text x={m.x+10} y="50" fontSize="8" fill="#059669" fontWeight="600" fontFamily="system-ui">✅ REALITY:</text>
              <text x={m.x+10} y="66" fontSize="8" fill="#64748B" fontFamily="system-ui">{m.truth.substring(0,42)}</text>
              <text x={m.x+10} y="80" fontSize="8" fill="#64748B" fontFamily="system-ui">{m.truth.substring(42)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BODY FAT CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function BodyFatRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Body Fat Ranges — ACE Classification (Men / Women)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="200" y="15" fontSize="10" fill="#3B82F6" fontWeight="700" fontFamily="system-ui">MEN</text>
          <text x="440" y="15" fontSize="10" fill="#EC4899" fontWeight="700" fontFamily="system-ui">WOMEN</text>
          {[
            {y:22,cat:"Essential Fat",m:"2-5%",w:"10-13%",mw:30,ww:40,color:"#EF4444"},
            {y:52,cat:"Athletes",m:"6-13%",w:"14-20%",mw:80,ww:70,color:"#8B5CF6"},
            {y:82,cat:"Fitness",m:"14-17%",w:"21-24%",mw:40,ww:40,color:"#10B981"},
            {y:112,cat:"Average",m:"18-24%",w:"25-31%",mw:70,ww:70,color:"#F59E0B"},
            {y:142,cat:"Obese",m:"25%+",w:"32%+",mw:100,ww:100,color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.cat}</text>
              <rect x="130" y={r.y+2} width={r.mw*2} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={135+r.mw*2} y={r.y+16} fontSize="10" fill={r.color} fontWeight="600" fontFamily="system-ui">{r.m}</text>
              <rect x="370" y={r.y+2} width={r.ww*2} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={375+r.ww*2} y={r.y+16} fontSize="10" fill={r.color} fontWeight="600" fontFamily="system-ui">{r.w}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function NavyMethodSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Navy Method — What You Measure</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"📏",title:"Neck",desc:"Measure just below the larynx (Adam's apple)",color:"#0F766E"},
            {x:170,icon:"📏",title:"Waist",desc:"At navel level, relaxed, after exhale",color:"#0F766E"},
            {x:330,icon:"📏",title:"Hips (women only)",desc:"At widest point of buttocks",color:"#EC4899"},
            {x:490,icon:"📐",title:"Height",desc:"Without shoes, standing straight",color:"#3B82F6"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="145" height="88" rx="10" fill={m.color} opacity="0.05" stroke={m.color} strokeWidth="1"/>
              <text x={m.x+72} y="28" fontSize="18" textAnchor="middle">{m.icon}</text>
              <text x={m.x+72} y="48" fontSize="11" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.title}</text>
              <text x={m.x+10} y="65" fontSize="8" fill="#64748B" fontFamily="system-ui">{m.desc.substring(0,30)}</text>
              <text x={m.x+10} y="78" fontSize="8" fill="#64748B" fontFamily="system-ui">{m.desc.substring(30)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BodyFatMethodsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Body Fat Measurement Methods Compared</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,method:"Navy Tape",acc:"±3-4%",cost:"Free",ease:"Easy",best:"Monthly tracking",color:"#10B981"},
            {x:140,method:"Calipers",acc:"±3-5%",cost:"$10-20",ease:"Medium",best:"Trained measurer",color:"#3B82F6"},
            {x:270,method:"BIA Scale",acc:"±4-8%",cost:"$30-100",ease:"Easy",best:"Trend only",color:"#F59E0B"},
            {x:400,method:"DEXA Scan",acc:"±1-2%",cost:"$50-150",ease:"Easy",best:"Gold standard",color:"#8B5CF6"},
            {x:530,method:"Hydrostatic",acc:"±1-2%",cost:"$50-100",ease:"Hard",best:"Research",color:"#64748B"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="120" height="110" rx="10" fill={m.color} opacity="0.05" stroke={m.color} strokeWidth="1"/>
              <text x={m.x+60} y="25" fontSize="11" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.method}</text>
              <text x={m.x+60} y="45" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">Accuracy: {m.acc}</text>
              <text x={m.x+60} y="62" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">Cost: {m.cost}</text>
              <text x={m.x+60} y="79" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">Ease: {m.ease}</text>
              <text x={m.x+60} y="100" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{m.best}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BLOOD SUGAR BY AGE — SVGs
// ═══════════════════════════════════════════

export function BloodSugarRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Blood Sugar Ranges — Normal vs Prediabetes vs Diabetes</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,test:"Fasting Glucose",normal:"< 100",pre:"100-125",diab:"126+",unit:"mg/dL"},
            {y:40,test:"2hr Post-Meal",normal:"< 140",pre:"140-199",diab:"200+",unit:"mg/dL"},
            {y:75,test:"A1C",normal:"< 5.7%",pre:"5.7-6.4%",diab:"6.5%+",unit:""},
            {y:110,test:"Random Glucose",normal:"< 140",pre:"—",diab:"200+ (with symptoms)",unit:"mg/dL"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.test}</text>
              <rect x="170" y={r.y+2} width="120" height="22" rx="4" fill="#10B981" opacity="0.12" stroke="#10B981" strokeWidth="1"/>
              <text x="230" y={r.y+17} fontSize="10" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.normal}</text>
              <rect x="300" y={r.y+2} width="120" height="22" rx="4" fill="#F59E0B" opacity="0.12" stroke="#F59E0B" strokeWidth="1"/>
              <text x="360" y={r.y+17} fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.pre}</text>
              <rect x="430" y={r.y+2} width="140" height="22" rx="4" fill="#EF4444" opacity="0.12" stroke="#EF4444" strokeWidth="1"/>
              <text x="500" y={r.y+17} fontSize="10" fill="#DC2626" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.diab}</text>
            </g>
          ))}
          <text x="230" y="0" fontSize="9" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Normal</text>
          <text x="360" y="0" fontSize="9" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Prediabetes</text>
          <text x="500" y="0" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Diabetes</text>
        </svg>
      </div>
    </div>
  );
}

export function BloodSugarByAgeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Typical Fasting Glucose by Age Decade</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,age:"Children",range:"70-100 mg/dL",w:100,color:"#3B82F6",note:"Tighter control needed"},
            {y:30,age:"Adults 18-40",range:"70-100 mg/dL",w:100,color:"#10B981",note:"Baseline metabolic health"},
            {y:55,age:"Adults 40-60",range:"70-110 mg/dL",w:130,color:"#10B981",note:"Insulin resistance increases"},
            {y:80,age:"Adults 60+",range:"80-120 mg/dL",w:130,color:"#F59E0B",note:"Slightly relaxed targets OK"},
            {y:105,age:"Pregnancy",range:"< 95 fasting",w:95,color:"#EC4899",note:"Stricter GDM thresholds"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.age}</text>
              <rect x="140" y={r.y+2} width={r.w*2.5} height="22" rx="5" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1"/>
              <text x={145+r.w*2.5} y={r.y+17} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.range}</text>
              <text x="520" y={r.y+17} fontSize="8" fill="#94A3B8" fontFamily="system-ui">{r.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// A1C GUIDE — SVGs
// ═══════════════════════════════════════════

export function A1CRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">A1C Ranges — What Your Number Means</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="a1c-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#10B981"/><stop offset="45%" stopColor="#10B981"/><stop offset="55%" stopColor="#F59E0B"/><stop offset="75%" stopColor="#EF4444"/><stop offset="100%" stopColor="#991B1B"/></linearGradient></defs>
          <rect x="20" y="20" width="600" height="28" rx="14" fill="url(#a1c-g)" opacity="0.4"/>
          <text x="160" y="15" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Normal (under 5.7%)</text>
          <text x="390" y="15" fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Prediabetes (5.7-6.4%)</text>
          <text x="550" y="15" fontSize="10" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Diabetes (6.5%+)</text>
          {[{x:310,v:"5.7%"},{x:460,v:"6.5%"}].map((m,i)=>(
            <g key={i}><line x1={m.x} y1={48} x2={m.x} y2={62} stroke="#334155" strokeWidth="2"/><text x={m.x} y={76} fontSize="11" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.v}</text></g>
          ))}
          <text x="160" y="40" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">eAG: under 117</text>
          <text x="390" y="40" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">eAG: 117-137</text>
          <text x="550" y="40" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">eAG: 140+</text>
        </svg>
      </div>
    </div>
  );
}

export function DPPStudySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">DPP Study — Lifestyle vs Medication for Diabetes Prevention</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,label:"Lifestyle Changes",sub:"150 min/wk walking + 5-7% weight loss",result:"-58% risk",color:"#10B981",w:350},
            {x:10,label:"Metformin (drug)",sub:"850mg twice daily",result:"-31% risk",color:"#F59E0B",w:186},
            {x:10,label:"Placebo (control)",sub:"No intervention",result:"Baseline",color:"#94A3B8",w:60},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={i*35+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.label}</text>
              <rect x="170" y={i*35+2} width={r.w} height="22" rx="5" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1.5"/>
              <text x={175+r.w} y={i*35+17} fontSize="11" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.result}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HCG LEVELS — SVGs
// ═══════════════════════════════════════════

export function HCGByWeekSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">HCG Ranges by Week — Why the Variation Is Normal</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,wk:"Week 3",range:"5 – 50",w:5,color:"#A78BFA"},
            {y:25,wk:"Week 4",range:"5 – 426",w:42,color:"#8B5CF6"},
            {y:45,wk:"Week 5",range:"18 – 7,340",w:150,color:"#7C3AED"},
            {y:65,wk:"Week 6",range:"1,080 – 56,500",w:350,color:"#6D28D9"},
            {y:85,wk:"Week 7-8",range:"7,650 – 229,000",w:500,color:"#5B21B6"},
            {y:105,wk:"Week 9-12",range:"25,700 – 288,000",w:550,color:"#4C1D95"},
            {y:125,wk:"Week 13-16",range:"13,300 – 254,000",w:480,color:"#6D28D9"},
            {y:145,wk:"Week 17-40",range:"3,640 – 117,000",w:300,color:"#8B5CF6"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+15} fontSize="9" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.wk}</text>
              <rect x="90" y={r.y+2} width={r.w} height="16" rx="3" fill={r.color} opacity="0.25" stroke={r.color} strokeWidth="1"/>
              <text x={95+r.w} y={r.y+14} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.range} mIU/mL</text>
            </g>
          ))}
          <text x="320" y="175" fontSize="9" fill="#8B5CF6" fontWeight="600" fontFamily="system-ui">Range widens dramatically — both ends can be normal</text>
        </svg>
      </div>
    </div>
  );
}

export function HCGDoublingTimeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Normal HCG Doubling Times</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,level:"HCG under 1,200",doubling:"48-72 hours",note:"Rapid doubling phase",color:"#10B981"},
            {x:220,level:"HCG 1,200-6,000",doubling:"72-96 hours",note:"Slowing is normal",color:"#F59E0B"},
            {x:430,level:"HCG above 6,000",doubling:"96+ hours",note:"Near plateau — expected",color:"#3B82F6"},
          ].map((d,i)=>(
            <g key={i}>
              <rect x={d.x} y="5" width="195" height="80" rx="12" fill={d.color} opacity="0.06" stroke={d.color} strokeWidth="1.5"/>
              <text x={d.x+97} y="28" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{d.level}</text>
              <text x={d.x+97} y="50" fontSize="14" fill={d.color} textAnchor="middle" fontWeight="800" fontFamily="system-ui">{d.doubling}</text>
              <text x={d.x+97} y="70" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{d.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function HCGWarningSignsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">When HCG Patterns Need Medical Attention</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"📈",pattern:"Normal rise",desc:"Doubles every 48-72h in early pregnancy",action:"Continue monitoring",color:"#10B981"},
            {x:170,icon:"📉",pattern:"Slow rise",desc:"Less than 50% increase in 48h",action:"Repeat draw, may need ultrasound",color:"#F59E0B"},
            {x:330,icon:"➡️",pattern:"Plateau",desc:"HCG levels flat for 48-72h",action:"Ultrasound to check viability",color:"#F59E0B"},
            {x:490,icon:"⬇️",pattern:"Declining",desc:"HCG dropping between draws",action:"May indicate loss or ectopic",color:"#EF4444"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="150" height="80" rx="10" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+75} y="22" fontSize="14" textAnchor="middle">{s.icon}</text>
              <text x={s.x+75} y="40" fontSize="10" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.pattern}</text>
              <text x={s.x+10} y="56" fontSize="8" fill="#64748B" fontFamily="system-ui">{s.desc}</text>
              <text x={s.x+10} y="72" fontSize="8" fill="#334155" fontWeight="500" fontFamily="system-ui">{s.action}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HOT DOGS — SVGs
// ═══════════════════════════════════════════

export function HotDogTempSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Hot Dog Safety — Cold vs Heated</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="300" height="70" rx="12" fill="#EF4444" opacity="0.06" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="160" y="35" fontSize="14" textAnchor="middle">❌</text>
          <text x="160" y="52" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Cold from package</text>
          <text x="160" y="68" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Listeria can survive in pre-cooked refrigerated meats</text>
          <rect x="330" y="10" width="300" height="70" rx="12" fill="#10B981" opacity="0.06" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="35" fontSize="14" textAnchor="middle">✅</text>
          <text x="480" y="52" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Heated to 165°F / steaming</text>
          <text x="480" y="68" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Boil, grill, or microwave 75 sec until steaming hot</text>
        </svg>
      </div>
    </div>
  );
}

export function ProcessedMeatRisksSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Processed Meats — Pregnancy Concerns</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🦠",concern:"Listeria risk",detail:"Grows at fridge temps, 10x risk in pregnancy",color:"#EF4444"},
            {x:170,icon:"🧂",concern:"High sodium",detail:"500-600mg per serving, contributes to swelling",color:"#F59E0B"},
            {x:330,icon:"🧪",concern:"Nitrates/nitrites",detail:"Preservatives — limit exposure, not eliminate",color:"#F59E0B"},
            {x:490,icon:"✅",concern:"Solution",detail:"Heat to 165°F, eat occasionally, not daily",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="145" height="80" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+72} y="27" fontSize="16" textAnchor="middle">{p.icon}</text>
              <text x={p.x+72} y="47" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.concern}</text>
              <text x={p.x+10} y="63" fontSize="8" fill="#64748B" fontFamily="system-ui">{p.detail.substring(0,38)}</text>
              <text x={p.x+10} y="76" fontSize="8" fill="#64748B" fontFamily="system-ui">{p.detail.substring(38)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SHRIMP — SVGs
// ═══════════════════════════════════════════

export function ShrimpNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Shrimp Nutrients — Per 3oz Cooked Serving</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"💪",n:"Protein",v:"20g",pct:"36% DV",color:"#0F766E"},
            {x:140,icon:"🧪",n:"Iodine",v:"35μg",pct:"23% DV",color:"#8B5CF6"},
            {x:270,icon:"🛡️",n:"Selenium",v:"40μg",pct:"73% DV",color:"#3B82F6"},
            {x:400,icon:"🧠",n:"B12",v:"1.4μg",pct:"58% DV",color:"#EC4899"},
            {x:530,icon:"⚡",n:"Calories",v:"84",pct:"Very low",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="78" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="25" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="42" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="58" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="74" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ShrimpCookingSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Shrimp Preparation — Safe vs Unsafe</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,m:"Grilled",s:true},{x:120,m:"Sauteed",s:true},{x:230,m:"Boiled",s:true},
            {x:340,m:"Baked",s:true},{x:450,m:"Raw/ceviche",s:false},{x:550,m:"Sushi (raw)",s:false},
          ].map((e,i)=>(
            <g key={i}>
              <rect x={e.x} y="10" width="95" height="58" rx="10" fill={e.s?"#10B981":"#EF4444"} opacity="0.06" stroke={e.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={e.x+47} y="35" fontSize="14" textAnchor="middle">{e.s?"✅":"❌"}</text>
              <text x={e.x+47} y="52" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.m}</text>
              <text x={e.x+47} y="64" fontSize="7" fill={e.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.s?"SAFE":"AVOID"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HONEY — SVGs
// ═══════════════════════════════════════════

export function HoneyMythSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Honey + Botulism — Why the Baby Rule Does Not Apply to You</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="100" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="160" y="28" fontSize="14" textAnchor="middle">👶</text>
          <text x="160" y="46" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Infants under 12 months</text>
          <text x="160" y="62" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Immature gut flora cannot neutralize</text>
          <text x="160" y="76" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">C. botulinum spores → DANGEROUS</text>
          <text x="160" y="95" fontSize="10" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ NO HONEY</text>
          <rect x="330" y="5" width="300" height="100" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="28" fontSize="14" textAnchor="middle">🤰</text>
          <text x="480" y="46" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Pregnant women (adults)</text>
          <text x="480" y="62" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Mature digestive system easily</text>
          <text x="480" y="76" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">destroys botulism spores → SAFE</text>
          <text x="480" y="95" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ HONEY IS SAFE</text>
        </svg>
      </div>
    </div>
  );
}

export function HoneyVsSugarSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Honey vs Sugar — Nutritional Comparison (1 tbsp)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="100" rx="12" fill="#F59E0B" opacity="0.05" stroke="#FDE68A" strokeWidth="1.5"/>
          <text x="160" y="28" fontSize="14" textAnchor="middle">🍯</text>
          <text x="160" y="45" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Honey</text>
          {[{y:60,t:"Calories: 64"},{y:75,t:"GI: 58 (moderate)"},{y:90,t:"Contains: trace antioxidants, enzymes"}].map((r,i)=>(
            <text key={i} x="30" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="100" rx="12" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5"/>
          <text x="480" y="28" fontSize="14" textAnchor="middle">🍬</text>
          <text x="480" y="45" fontSize="11" fill="#64748B" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Table Sugar</text>
          {[{y:60,t:"Calories: 49"},{y:75,t:"GI: 65 (high)"},{y:90,t:"Contains: nothing — empty calories"}].map((r,i)=>(
            <text key={i} x="350" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PINEAPPLE — SVGs
// ═══════════════════════════════════════════

export function PineappleMythSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The Pineapple Miscarriage Myth — Debunked</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍍",title:"The Claim",desc:"Bromelain in pineapple causes contractions and miscarriage",color:"#EF4444"},
            {x:220,icon:"🔬",title:"The Science",desc:"Bromelain is in the CORE, not the flesh. Would need 7-10 whole pineapples",color:"#3B82F6"},
            {x:430,icon:"✅",title:"The Reality",desc:"Normal servings of pineapple are completely safe in all trimesters",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="195" height="90" rx="12" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+97} y="28" fontSize="18" textAnchor="middle">{p.icon}</text>
              <text x={p.x+97} y="48" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+15} y="65" fontSize="8" fill="#64748B" fontFamily="system-ui">{p.desc.substring(0,40)}</text>
              <text x={p.x+15} y="79" fontSize="8" fill="#64748B" fontFamily="system-ui">{p.desc.substring(40)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function PineappleNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Pineapple Nutrients — Per 1 Cup Chunks</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍊",n:"Vitamin C",v:"131%",sub:"DV",color:"#F59E0B"},
            {x:140,icon:"⚡",n:"Manganese",v:"76%",sub:"DV",color:"#8B5CF6"},
            {x:270,icon:"🧬",n:"B6",v:"9%",sub:"DV",color:"#3B82F6"},
            {x:400,icon:"🌿",n:"Fiber",v:"2.3g",sub:"per cup",color:"#10B981"},
            {x:530,icon:"🔥",n:"Calories",v:"82",sub:"per cup",color:"#EC4899"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="68" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="24" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="40" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="56" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="68" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.sub}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// DELI MEATS — SVGs
// ═══════════════════════════════════════════

export function DeliMeatSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Deli Meat Safety — 3 Ways to Make It Safe</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,step:"1",title:"Microwave 30-45 sec",desc:"Until steaming hot throughout",color:"#0F766E"},
            {x:220,step:"2",title:"Toast in oven/panini",desc:"Melt cheese + heat meat to 165°F",color:"#0F766E"},
            {x:430,step:"3",title:"Heat in skillet",desc:"Pan-fry slices until edges curl",color:"#0F766E"},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x+20} cy="25" r="16" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+20} y="30" fontSize="13" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.step}</text>
              <text x={p.x+50} y="22" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+50} y="40" fontSize="9" fill="#64748B" fontFamily="system-ui">{p.desc}</text>
              <text x={p.x+50} y="62" fontSize="9" fill="#059669" fontWeight="600" fontFamily="system-ui">→ Safe to eat</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function DeliMeatTypesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Common Deli Meats — All Require Heating</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,meat:"Turkey",risk:"Moderate",note:"Most common Listeria source"},{x:120,meat:"Ham",risk:"Moderate",note:"Heat before eating"},
            {x:230,meat:"Roast Beef",risk:"Moderate",note:"Heat before eating"},{x:340,meat:"Salami",risk:"Higher",note:"Cured but not cooked"},
            {x:450,meat:"Bologna",risk:"Moderate",note:"Pre-cooked, still heat"},{x:560,meat:"Pepperoni",risk:"Lower if on hot pizza",note:"OK if pizza is fresh/hot"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="100" height="68" rx="8" fill="#F59E0B" opacity="0.06" stroke="#FDE68A" strokeWidth="1"/>
              <text x={m.x+50} y="22" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.meat}</text>
              <text x={m.x+50} y="40" fontSize="8" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">⚠️ {m.risk}</text>
              <text x={m.x+8} y="56" fontSize="7" fill="#64748B" fontFamily="system-ui">{m.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
