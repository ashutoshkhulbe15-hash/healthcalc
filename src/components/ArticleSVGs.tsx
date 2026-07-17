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

// ═══════════════════════════════════════════
// BACON — SVGs
// ═══════════════════════════════════════════

export function BaconCookingSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Bacon Doneness — Safe vs Unsafe During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,level:"Raw",s:false,desc:"Parasites + bacteria"},{x:120,level:"Soft/chewy",s:false,desc:"May still harbor Listeria"},
            {x:240,level:"Limp with pink",s:false,desc:"Undercooked — avoid"},{x:370,level:"Firm, no pink",s:true,desc:"Minimum safe doneness"},
            {x:500,level:"Crispy",s:true,desc:"Safest — recommended"},
          ].map((b,i)=>(
            <g key={i}>
              <rect x={b.x} y="5" width="115" height="68" rx="10" fill={b.s?"#10B981":"#EF4444"} opacity="0.06" stroke={b.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={b.x+57} y="25" fontSize="14" textAnchor="middle">{b.s?"✅":"❌"}</text>
              <text x={b.x+57} y="42" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{b.level}</text>
              <text x={b.x+57} y="58" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{b.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BaconNutritionSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Bacon Nutrition — 2 Slices (Moderate Occasionally)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,n:"Calories",v:"86",color:"#64748B"},{x:120,n:"Protein",v:"6g",color:"#10B981"},
            {x:230,n:"Fat",v:"7g",color:"#F59E0B"},{x:340,n:"Sodium",v:"370mg",color:"#EF4444"},
            {x:460,n:"Nitrates",v:"Present",color:"#EF4444"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="100" height="65" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+50} y="28" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+50} y="50" fontSize="16" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CHOCOLATE — SVGs
// ═══════════════════════════════════════════

export function ChocolateCaffeineSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Caffeine in Chocolate — How It Adds Up</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="480" y1="5" x2="480" y2="105" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="485" y="15" fontSize="8" fill="#DC2626" fontWeight="700" fontFamily="system-ui">200mg LIMIT</text>
          {[
            {y:20,type:"White chocolate (1oz)",mg:0,color:"#10B981"},
            {y:42,type:"Milk chocolate (1oz)",mg:5,color:"#10B981"},
            {y:64,type:"Dark 70% (1oz)",mg:12,color:"#F59E0B"},
            {y:86,type:"Dark 85% (1oz)",mg:23,color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+12} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.type}</text>
              <rect x="220" y={r.y} width={Math.max(r.mg*2.3,4)} height="18" rx="4" fill={r.color} opacity="0.25" stroke={r.color} strokeWidth="1"/>
              <text x={225+Math.max(r.mg*2.3,4)} y={r.y+13} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.mg}mg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ChocolateTypesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Chocolate Types — Pregnancy Safety Ranking</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"White",caff:"0mg caffeine",verdict:"No caffeine concern",color:"#10B981"},
            {x:170,type:"Milk",caff:"5mg/oz",verdict:"Very low — eat freely",color:"#10B981"},
            {x:330,type:"Dark 70%",caff:"12mg/oz",verdict:"Moderate — track intake",color:"#F59E0B"},
            {x:490,type:"Dark 85%+",caff:"23mg/oz",verdict:"Higher — limit to 1-2oz",color:"#F59E0B"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x={t.x} y="5" width="145" height="68" rx="10" fill={t.color} opacity="0.06" stroke={t.color} strokeWidth="1"/>
              <text x={t.x+72} y="24" fontSize="12" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">🍫 {t.type}</text>
              <text x={t.x+72} y="42" fontSize="10" fill={t.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{t.caff}</text>
              <text x={t.x+72} y="58" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{t.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CREAM CHEESE — SVGs
// ═══════════════════════════════════════════

export function CreamCheeseVsSoftCheeseSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Cream Cheese vs Soft Cheese — Key Difference</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="90" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Cream Cheese</text>
          {[{y:42,t:"Always pasteurized in US"},{y:57,t:"Heat-treated during manufacturing"},{y:72,t:"Low Listeria risk"},{y:87,t:"Safe to eat cold, unheated"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="90" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="12" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">⚠️ Soft Cheese (brie, feta)</text>
          {[{y:42,t:"May be unpasteurized"},{y:57,t:"Higher moisture = Listeria risk"},{y:72,t:"Must check label for pasteurization"},{y:87,t:"Avoid if unsure of source"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// GREEN TEA — SVGs
// ═══════════════════════════════════════════

export function GreenTeaCaffeineSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Green Tea vs Other Caffeine Sources (per serving)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="420" y1="5" x2="420" y2="125" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="425" y="12" fontSize="8" fill="#DC2626" fontWeight="700" fontFamily="system-ui">200mg LIMIT</text>
          {[
            {y:18,drink:"Green tea (8oz)",mg:28,color:"#10B981"},
            {y:40,drink:"Matcha (2oz shot)",mg:70,color:"#F59E0B"},
            {y:62,drink:"Black tea (8oz)",mg:47,color:"#F59E0B"},
            {y:84,drink:"Coffee (8oz brewed)",mg:95,color:"#F59E0B"},
            {y:106,drink:"Starbucks Grande",mg:310,color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+12} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.drink}</text>
              <rect x="200" y={r.y} width={r.mg*0.65} height="18" rx="4" fill={r.color} opacity="0.25" stroke={r.color} strokeWidth="1"/>
              <text x={205+r.mg*0.65} y={r.y+13} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.mg}mg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function GreenTeaEGCGSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Green Tea EGCG Concern — Brewed vs Supplements</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Brewed Green Tea (1-2 cups)</text>
          <text x="160" y="42" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">EGCG: ~50-100mg per cup</text>
          <text x="160" y="58" fontSize="9" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Safe — minimal folate interaction</text>
          <text x="160" y="75" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Steep 1-2 min to reduce further</text>
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Green Tea Supplements</text>
          <text x="480" y="42" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">EGCG: 400-800mg per capsule</text>
          <text x="480" y="58" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="600" fontFamily="system-ui">May reduce folate absorption</text>
          <text x="480" y="75" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Avoid during pregnancy</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ICE CREAM — SVGs
// ═══════════════════════════════════════════

export function IceCreamSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Ice Cream Types — Safe vs Avoid During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Store-bought pints",s:true,reason:"Factory pasteurized"},{x:130,type:"Scoop shops",s:true,reason:"Pasteurized base"},
            {x:250,type:"Ice cream bars",s:true,reason:"Sealed, sterile"},
            {x:370,type:"Soft-serve machine",s:false,reason:"Listeria in nozzle"},{x:500,type:"Homemade (raw egg)",s:false,reason:"Salmonella risk"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x={t.x} y="5" width="115" height="78" rx="10" fill={t.s?"#10B981":"#EF4444"} opacity="0.06" stroke={t.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={t.x+57} y="25" fontSize="14" textAnchor="middle">{t.s?"✅":"❌"}</text>
              <text x={t.x+57} y="42" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{t.type}</text>
              <text x={t.x+57} y="58" fontSize="8" fill={t.s?"#059669":"#DC2626"} textAnchor="middle" fontFamily="system-ui">{t.reason}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SoftServeMachineSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Soft-Serve Machines Are a Listeria Risk</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,step:"1",title:"Pasteurized mix",desc:"Base is safe when it enters the machine",color:"#10B981"},
            {x:170,step:"2",title:"Dispensing tube",desc:"Warm, moist environment — ideal for bacteria",color:"#F59E0B"},
            {x:330,step:"3",title:"Nozzle buildup",desc:"Difficult to clean, rarely sanitized properly",color:"#EF4444"},
            {x:490,step:"4",title:"Your serving",desc:"May contain Listeria from the machine itself",color:"#EF4444"},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x+18} cy="20" r="14" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="1.5"/>
              <text x={p.x+18} y="25" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.step}</text>
              {i<3&&<line x1={p.x+36} y1="20" x2={p.x+158} y2="20" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4"/>}
              <text x={p.x+5} y="50" fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{p.title}</text>
              <text x={p.x+5} y="66" fontSize="8" fill="#64748B" fontFamily="system-ui">{p.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HAM — SVGs
// ═══════════════════════════════════════════

export function HamSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Ham During Pregnancy — Cold vs Heated</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,item:"Cold deli ham",s:false,why:"Listeria risk from slicing"},{x:130,item:"Cold leftover ham",s:false,why:"Bacteria grows during storage"},
            {x:260,item:"Hot ham sandwich",s:true,why:"Heated to 165°F"},{x:390,item:"Holiday ham (hot)",s:true,why:"Served steaming from oven"},
            {x:520,item:"Ham in cooked dish",s:true,why:"Fully heated through"},
          ].map((h,i)=>(
            <g key={i}>
              <rect x={h.x} y="5" width="115" height="68" rx="10" fill={h.s?"#10B981":"#EF4444"} opacity="0.06" stroke={h.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={h.x+57} y="24" fontSize="14" textAnchor="middle">{h.s?"✅":"❌"}</text>
              <text x={h.x+57} y="40" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{h.item}</text>
              <text x={h.x+57} y="56" fontSize="7" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{h.why}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HUMMUS — SVGs
// ═══════════════════════════════════════════

export function HummusSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Hummus Sources — Safe vs Risky</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,src:"Store-bought sealed",s:true,detail:"Pasteurized, acidified, sealed packaging",color:"#10B981"},
            {x:220,src:"Deli counter / buffet",s:false,detail:"Open container, multiple handlers, long sitting time",color:"#EF4444"},
            {x:430,src:"Homemade",s:"caution",detail:"Safe if eaten immediately. Do not store > 1 day",color:"#F59E0B"},
          ].map((h,i)=>(
            <g key={i}>
              <rect x={h.x} y="5" width="195" height="80" rx="12" fill={typeof h.s==="boolean"?(h.s?"#10B981":"#EF4444"):"#F59E0B"} opacity="0.05" stroke={typeof h.s==="boolean"?(h.s?"#10B981":"#EF4444"):"#F59E0B"} strokeWidth="1.5"/>
              <text x={h.x+97} y="25" fontSize="14" textAnchor="middle">{h.s===true?"✅":h.s===false?"❌":"⚠️"}</text>
              <text x={h.x+97} y="42" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{h.src}</text>
              <text x={h.x+15} y="60" fontSize="8" fill="#64748B" fontFamily="system-ui">{h.detail.substring(0,40)}</text>
              <text x={h.x+15} y="74" fontSize="8" fill="#64748B" fontFamily="system-ui">{h.detail.substring(40)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function HummusNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Hummus Nutrients — Per 1/3 Cup Serving</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,n:"Protein",v:"7g",color:"#0F766E"},{x:120,n:"Fiber",v:"6g",color:"#10B981"},
            {x:230,n:"Iron",v:"2mg",color:"#EF4444"},{x:340,n:"Folate",v:"60μg",color:"#8B5CF6"},
            {x:450,n:"Calories",v:"140",color:"#F59E0B"},{x:560,n:"Healthy fat",v:"7g",color:"#3B82F6"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="100" height="55" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+50} y="25" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+50} y="45" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// KOMBUCHA — SVGs
// ═══════════════════════════════════════════

export function KombuchaRisksSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">3 Reasons to Avoid Kombucha During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍺",risk:"Alcohol (0.5-3%)",detail:"Fermentation produces alcohol — amount varies and is unverifiable",color:"#EF4444"},
            {x:220,icon:"🦠",risk:"Unpasteurized",detail:"Contains live bacteria and yeast — not all strains are safe",color:"#EF4444"},
            {x:430,icon:"☕",risk:"Caffeine",detail:"Brewed from tea — adds 10-25mg caffeine per serving",color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x={r.x} y="5" width="195" height="80" rx="12" fill={r.color} opacity="0.05" stroke={r.color} strokeWidth="1"/>
              <text x={r.x+97} y="25" fontSize="18" textAnchor="middle">{r.icon}</text>
              <text x={r.x+97} y="45" fontSize="10" fill={r.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{r.risk}</text>
              <text x={r.x+15} y="62" fontSize="8" fill="#64748B" fontFamily="system-ui">{r.detail.substring(0,45)}</text>
              <text x={r.x+15} y="76" fontSize="8" fill="#64748B" fontFamily="system-ui">{r.detail.substring(45)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function KombuchaAlternativesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Alternatives to Kombucha</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🥛",alt:"Yogurt",why:"Safe probiotics, pasteurized",color:"#10B981"},
            {x:170,icon:"💊",alt:"Prenatal probiotic",why:"Specific safe strains, measured dose",color:"#10B981"},
            {x:330,icon:"🫧",alt:"Sparkling water + fruit",why:"Fizz craving, zero risk",color:"#10B981"},
            {x:490,icon:"🍵",alt:"Ginger tea",why:"Gut health, nausea relief",color:"#10B981"},
          ].map((a,i)=>(
            <g key={i}>
              <rect x={a.x} y="5" width="145" height="68" rx="10" fill={a.color} opacity="0.06" stroke={a.color} strokeWidth="1"/>
              <text x={a.x+72} y="25" fontSize="16" textAnchor="middle">{a.icon}</text>
              <text x={a.x+72} y="42" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{a.alt}</text>
              <text x={a.x+10} y="58" fontSize="8" fill="#64748B" fontFamily="system-ui">{a.why}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// LIVER — SVGs
// ═══════════════════════════════════════════

export function LiverVitaminASVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Vitamin A in Liver vs Safe Upper Limit</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="285" y1="5" x2="285" y2="105" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="290" y="12" fontSize="8" fill="#DC2626" fontWeight="700" fontFamily="system-ui">3,000μg SAFE LIMIT</text>
          {[
            {y:20,food:"Beef liver (3oz)",ug:6582,w:500,color:"#991B1B"},
            {y:45,food:"Chicken liver (3oz)",ug:3652,w:278,color:"#EF4444"},
            {y:70,food:"Liver pate (2 tbsp)",ug:2680,w:204,color:"#F59E0B"},
            {y:95,food:"Sweet potato (1 med)",ug:1096,w:83,color:"#10B981"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="9" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.food}</text>
              <rect x="155" y={r.y} width={Math.min(r.w,480)} height="20" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={160+Math.min(r.w,480)} y={r.y+14} fontSize="9" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.ug}μg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function LiverAlternativesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Iron + B12 Sources Instead of Liver</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,food:"Red meat (steak)",iron:"2.5mg",b12:"2.5μg",color:"#EF4444"},
            {x:140,food:"Spinach (1 cup)",iron:"6.4mg",b12:"—",color:"#10B981"},
            {x:270,food:"Lentils (1 cup)",iron:"6.6mg",b12:"—",color:"#F59E0B"},
            {x:400,food:"Eggs (2 large)",iron:"1.8mg",b12:"1.1μg",color:"#3B82F6"},
            {x:530,food:"Salmon (3oz)",iron:"0.3mg",b12:"2.4μg",color:"#EC4899"},
          ].map((f,i)=>(
            <g key={i}>
              <rect x={f.x} y="5" width="120" height="68" rx="8" fill={f.color} opacity="0.05" stroke={f.color} strokeWidth="1"/>
              <text x={f.x+60} y="22" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{f.food}</text>
              <text x={f.x+60} y="40" fontSize="9" fill={f.color} textAnchor="middle" fontFamily="system-ui">Iron: {f.iron}</text>
              <text x={f.x+60} y="56" fontSize="9" fill={f.color} textAnchor="middle" fontFamily="system-ui">B12: {f.b12}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MAYONNAISE — SVGs
// ═══════════════════════════════════════════

export function MayoSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Mayonnaise — Store-Bought vs Homemade</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Store-Bought Mayo</text>
          {[{y:40,t:"Pasteurized eggs — no Salmonella"},{y:55,t:"Acidified (pH 3.5-4.0) — hostile to bacteria"},{y:70,t:"Hellmann's, Duke's, all brands safe"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Homemade Mayo</text>
          {[{y:40,t:"Raw eggs — Salmonella risk"},{y:55,t:"No pasteurization step"},{y:70,t:"Also: homemade aioli, hollandaise, Caesar"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="9" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ARTIFICIAL SWEETENERS — SVGs
// ═══════════════════════════════════════════

export function SweetenerSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Artificial Sweeteners During Pregnancy — FDA Status</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,name:"Aspartame (Equal)",status:"FDA approved",verdict:"Generally considered acceptable in moderation",color:"#10B981"},
            {y:35,name:"Sucralose (Splenda)",status:"FDA approved",verdict:"Generally considered acceptable in moderation",color:"#10B981"},
            {y:65,name:"Stevia",status:"FDA GRAS",verdict:"Generally considered acceptable in moderation",color:"#10B981"},
            {y:95,name:"Saccharin (Sweet'N Low)",status:"FDA approved but...",verdict:"Most providers recommend avoiding — crosses placenta",color:"#EF4444"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x="10" y={s.y} width="620" height="26" rx="6" fill={s.color} opacity="0.06" stroke={s.color} strokeWidth="1"/>
              <text x="20" y={s.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{s.name}</text>
              <text x="230" y={s.y+17} fontSize="9" fill="#64748B" fontFamily="system-ui">{s.status}</text>
              <text x="370" y={s.y+17} fontSize="9" fill={s.color} fontWeight="600" fontFamily="system-ui">{s.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SweetenerDosesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">FDA Acceptable Daily Intake — How Much Is Too Much?</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,sweetener:"Aspartame",adi:"50mg/kg/day",equiv:"~18 diet sodas",color:"#10B981"},
            {x:170,sweetener:"Sucralose",adi:"5mg/kg/day",equiv:"~6 Splenda packets",color:"#10B981"},
            {x:330,sweetener:"Stevia",adi:"4mg/kg/day",equiv:"~9 stevia packets",color:"#10B981"},
            {x:490,sweetener:"Saccharin",adi:"15mg/kg/day",equiv:"Avoid per ACOG",color:"#EF4444"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="145" height="78" rx="10" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+72} y="25" fontSize="10" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.sweetener}</text>
              <text x={s.x+72} y="42" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{s.adi}</text>
              <text x={s.x+72} y="60" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{s.equiv}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CATFISH — SVGs
// ═══════════════════════════════════════════

export function CatfishMercurySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Catfish Mercury Level vs Other Fish — FDA Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,fish:"Catfish",ppm:"0.024",w:12,color:"#10B981"},
            {y:28,fish:"Salmon",ppm:"0.022",w:11,color:"#10B981"},
            {y:51,fish:"Shrimp",ppm:"0.009",w:5,color:"#10B981"},
            {y:74,fish:"Albacore tuna",ppm:"0.350",w:175,color:"#F59E0B"},
            {y:97,fish:"Swordfish",ppm:"0.995",w:498,color:"#EF4444"},
          ].map((f,i)=>(
            <g key={i}>
              <text x="10" y={f.y+15} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{f.fish}</text>
              <rect x="130" y={f.y+2} width={Math.max(f.w,6)} height="18" rx="4" fill={f.color} opacity="0.3" stroke={f.color} strokeWidth="1"/>
              <text x={140+Math.max(f.w,6)} y={f.y+15} fontSize="10" fill={f.color} fontWeight="700" fontFamily="system-ui">{f.ppm} ppm</text>
            </g>
          ))}
          <text x="130" y="125" fontSize="8" fill="#94A3B8" fontFamily="system-ui">Source: FDA Mercury in Commercial Fish (2022)</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// COD — SVGs
// ═══════════════════════════════════════════

export function CodNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Cod Nutrients — Per 3oz Cooked Serving</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"💪",n:"Protein",v:"19g",pct:"34% DV",color:"#0F766E"},
            {x:140,icon:"🧪",n:"Iodine",v:"99μg",pct:"66% DV",color:"#8B5CF6"},
            {x:270,icon:"🩸",n:"B12",v:"0.9μg",pct:"38% DV",color:"#EF4444"},
            {x:400,icon:"🛡️",n:"Selenium",v:"32μg",pct:"58% DV",color:"#3B82F6"},
            {x:530,icon:"⚡",n:"Calories",v:"89",pct:"Very low",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="68" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="24" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="40" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="55" fontSize="13" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="68" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CRAB — SVGs
// ═══════════════════════════════════════════

export function CrabSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Crab and Shellfish — Safe vs Unsafe Preparations</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,m:"Steamed crab",s:true},{x:120,m:"Crab cakes",s:true},{x:230,m:"Crab soup",s:true},
            {x:340,m:"Imitation crab",s:true},{x:460,m:"Raw crab sashimi",s:false},{x:560,m:"Cold crab dip",s:false},
          ].map((e,i)=>(
            <g key={i}>
              <rect x={e.x} y="5" width="95" height="65" rx="10" fill={e.s?"#10B981":"#EF4444"} opacity="0.06" stroke={e.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={e.x+47} y="28" fontSize="14" textAnchor="middle">{e.s?"✅":"❌"}</text>
              <text x={e.x+47} y="45" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.m}</text>
              <text x={e.x+47} y="60" fontSize="7" fill={e.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.s?"Generally safe":"Avoid per FDA"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ENERGY DRINKS — SVGs
// ═══════════════════════════════════════════

export function EnergyDrinkContentSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Caffeine in Energy Drinks vs Pregnancy Limit (200mg)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="350" y1="5" x2="350" y2="125" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="355" y="12" fontSize="8" fill="#DC2626" fontWeight="700" fontFamily="system-ui">200mg ACOG LIMIT</text>
          {[
            {y:20,drink:"Monster (16oz)",mg:160,color:"#F59E0B"},
            {y:42,drink:"Red Bull (12oz)",mg:111,color:"#F59E0B"},
            {y:64,drink:"Bang (16oz)",mg:300,color:"#EF4444"},
            {y:86,drink:"Celsius (12oz)",mg:200,color:"#EF4444"},
            {y:108,drink:"5-Hour Energy (2oz)",mg:200,color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.drink}</text>
              <rect x="175" y={r.y} width={r.mg*0.85} height="18" rx="4" fill={r.color} opacity="0.25" stroke={r.color} strokeWidth="1"/>
              <text x={180+r.mg*0.85} y={r.y+13} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.mg}mg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SafeEnergyAlternativesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Energy Alternatives During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"☕",alt:"Small coffee (8oz)",mg:"95mg caffeine",color:"#F59E0B"},
            {x:170,icon:"🍵",alt:"Green tea (8oz)",mg:"28mg caffeine",color:"#10B981"},
            {x:330,icon:"🚶",alt:"10-min brisk walk",mg:"No caffeine needed",color:"#10B981"},
            {x:490,icon:"💧",alt:"Water + fruit",mg:"Hydration = energy",color:"#3B82F6"},
          ].map((a,i)=>(
            <g key={i}>
              <rect x={a.x} y="5" width="145" height="68" rx="10" fill={a.color} opacity="0.06" stroke={a.color} strokeWidth="1"/>
              <text x={a.x+72} y="25" fontSize="16" textAnchor="middle">{a.icon}</text>
              <text x={a.x+72} y="42" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{a.alt}</text>
              <text x={a.x+72} y="58" fontSize="9" fill={a.color} textAnchor="middle" fontFamily="system-ui">{a.mg}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// GOAT CHEESE — SVGs
// ═══════════════════════════════════════════

export function GoatCheeseSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Goat Cheese — Source Safety (per FDA Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,src:"Store-bought (US)",detail:"Pasteurized by law. Montchevre, store brands",s:"safe",color:"#10B981"},
            {x:220,src:"Artisanal / farmstead",detail:"May be unpasteurized. Ask vendor directly",s:"caution",color:"#F59E0B"},
            {x:430,src:"Imported (unmarked)",detail:"Pasteurization uncertain. Check label carefully",s:"caution",color:"#F59E0B"},
          ].map((g,i)=>(
            <g key={i}>
              <rect x={g.x} y="5" width="195" height="80" rx="12" fill={g.color} opacity="0.05" stroke={g.color} strokeWidth="1.5"/>
              <text x={g.x+97} y="25" fontSize="14" textAnchor="middle">{g.s==="safe"?"✅":"⚠️"}</text>
              <text x={g.x+97} y="42" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{g.src}</text>
              <text x={g.x+15} y="60" fontSize="8" fill="#64748B" fontFamily="system-ui">{g.detail.substring(0,38)}</text>
              <text x={g.x+15} y="74" fontSize="8" fill="#64748B" fontFamily="system-ui">{g.detail.substring(38)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HERBAL TEA — SVGs
// ═══════════════════════════════════════════

export function HerbalTeaSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Herbal Teas During Pregnancy — Published Safety Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,tea:"Ginger tea",status:"Widely considered safe",evidence:"Clinical trials support use for nausea (up to 1g/day)",color:"#10B981"},
            {y:35,tea:"Peppermint tea",status:"Widely considered safe",evidence:"No adverse effects reported in published literature",color:"#10B981"},
            {y:65,tea:"Chamomile tea",status:"Limited data — use in moderation",evidence:"Some providers recommend caution due to limited pregnancy studies",color:"#F59E0B"},
            {y:95,tea:"Red raspberry leaf",status:"Insufficient evidence",evidence:"Sometimes used late pregnancy — discuss with provider first",color:"#F59E0B"},
            {y:125,tea:"Licorice root / dong quai",status:"Avoid per most authorities",evidence:"May affect hormones or stimulate contractions per published research",color:"#EF4444"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x="10" y={t.y} width="620" height="26" rx="6" fill={t.color} opacity="0.06" stroke={t.color} strokeWidth="1"/>
              <text x="20" y={t.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{t.tea}</text>
              <text x="180" y={t.y+17} fontSize="9" fill={t.color} fontWeight="600" fontFamily="system-ui">{t.status}</text>
              <text x="380" y={t.y+17} fontSize="8" fill="#64748B" fontFamily="system-ui">{t.evidence.substring(0,50)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MACKEREL — SVGs
// ═══════════════════════════════════════════

export function MackerelSpeciesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Mackerel Species — FDA Mercury Data and Pregnancy Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,species:"Atlantic mackerel",ppm:"0.05",fda:"Best choice",w:25,color:"#10B981"},
            {y:35,species:"Pacific chub mackerel",ppm:"0.09",fda:"Best choice",w:45,color:"#10B981"},
            {y:65,species:"Spanish mackerel",ppm:"0.45",fda:"Good choice (limit)",w:225,color:"#F59E0B"},
            {y:95,species:"King mackerel",ppm:"0.73",fda:"Avoid per FDA",w:365,color:"#EF4444"},
          ].map((m,i)=>(
            <g key={i}>
              <text x="10" y={m.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{m.species}</text>
              <rect x="190" y={m.y+2} width={Math.max(m.w,10)} height="20" rx="4" fill={m.color} opacity="0.25" stroke={m.color} strokeWidth="1"/>
              <text x={200+Math.max(m.w,10)} y={m.y+16} fontSize="10" fill={m.color} fontWeight="700" fontFamily="system-ui">{m.ppm} ppm — {m.fda}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MOZZARELLA — SVGs
// ═══════════════════════════════════════════

export function MozzarellaSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Mozzarella Types — Pregnancy Safety (per FDA Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Shredded / sliced",detail:"Always pasteurized in US",s:true},{x:130,type:"String cheese",detail:"Always pasteurized",s:true},
            {x:250,type:"Fresh balls (US)",detail:"US brands pasteurized",s:true},{x:370,type:"On pizza / baked",detail:"Cooking kills bacteria",s:true},
            {x:500,type:"Imported buffalo",detail:"May be unpasteurized",s:false},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="115" height="78" rx="10" fill={m.s?"#10B981":"#F59E0B"} opacity="0.06" stroke={m.s?"#10B981":"#F59E0B"} strokeWidth="1.5"/>
              <text x={m.x+57} y="25" fontSize="14" textAnchor="middle">{m.s?"✅":"⚠️"}</text>
              <text x={m.x+57} y="42" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{m.type}</text>
              <text x={m.x+57} y="58" fontSize="7" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{m.detail}</text>
              <text x={m.x+57} y="72" fontSize="7" fill={m.s?"#059669":"#B45309"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{m.s?"Generally safe":"Check label"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// OYSTERS — SVGs
// ═══════════════════════════════════════════

export function OystersSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Oysters — Safe vs Unsafe Preparations (per FDA Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,m:"Baked (Rockefeller)",s:true},{x:120,m:"Steamed",s:true},{x:230,m:"Fried",s:true},
            {x:340,m:"Oyster stew",s:true},{x:450,m:"Raw half shell",s:false},{x:550,m:"Raw bar",s:false},
          ].map((o,i)=>(
            <g key={i}>
              <rect x={o.x} y="5" width="100" height="65" rx="10" fill={o.s?"#10B981":"#EF4444"} opacity="0.06" stroke={o.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={o.x+50} y="28" fontSize="14" textAnchor="middle">{o.s?"✅":"❌"}</text>
              <text x={o.x+50} y="45" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{o.m}</text>
              <text x={o.x+50} y="60" fontSize="7" fill={o.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{o.s?"Generally safe":"Avoid per FDA"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function OysterNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Cooked Oysters — Nutrients Per 3oz Serving (USDA Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🛡️",n:"Zinc",v:"74mg",pct:"673% DV",color:"#8B5CF6"},
            {x:140,icon:"🩸",n:"Iron",v:"7.8mg",pct:"43% DV",color:"#EF4444"},
            {x:270,icon:"🧠",n:"B12",v:"24μg",pct:"1,000% DV",color:"#EC4899"},
            {x:400,icon:"🛡️",n:"Selenium",v:"63μg",pct:"115% DV",color:"#3B82F6"},
            {x:530,icon:"💪",n:"Protein",v:"7g",pct:"per 3oz",color:"#0F766E"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="68" rx="10" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="24" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="40" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="55" fontSize="13" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="68" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PAPAYA — SVGs
// ═══════════════════════════════════════════

export function PapayaRipeVsUnripeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Papaya During Pregnancy — Ripe vs Unripe (per Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="90" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Ripe Papaya (yellow-orange)</text>
          {[{y:40,t:"Generally considered safe per published research"},{y:55,t:"Rich in vitamin C (98% DV per cup) — USDA data"},{y:70,t:"Contains folate, potassium, digestive enzymes"},{y:85,t:"Papain levels are very low in ripe fruit"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="90" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Unripe/Green Papaya</text>
          {[{y:40,t:"Most authorities recommend avoiding"},{y:55,t:"Contains papain — latex-like enzyme"},{y:70,t:"Animal studies show effects on uterine muscle"},{y:85,t:"Used in green salads and some curries — skip these"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function PapayaNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Ripe Papaya Nutrients — Per 1 Cup (USDA Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🍊",n:"Vitamin C",v:"88mg",pct:"98% DV",color:"#F59E0B"},
            {x:140,icon:"🧬",n:"Folate",v:"53μg",pct:"13% DV",color:"#8B5CF6"},
            {x:270,icon:"🫀",n:"Potassium",v:"264mg",pct:"6% DV",color:"#EF4444"},
            {x:400,icon:"🌿",n:"Fiber",v:"2.5g",pct:"per cup",color:"#10B981"},
            {x:530,icon:"⚡",n:"Calories",v:"55",pct:"per cup",color:"#3B82F6"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="58" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="22" fontSize="12" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="38" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}: {p.v}</text>
              <text x={p.x+57} y="52" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PARMESAN — SVGs
// ═══════════════════════════════════════════

export function ParmesanScienceSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Parmesan Is Considered Safe Even Unpasteurized (Food Science)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,factor:"Aging: 12+ months",detail:"Extended aging eliminates pathogens",icon:"⏳",color:"#0F766E"},
            {x:170,factor:"Low moisture (aw < 0.92)",detail:"Too dry for Listeria to survive",icon:"💧",color:"#3B82F6"},
            {x:330,factor:"Low pH (< 5.4)",detail:"Acidic environment inhibits bacteria",icon:"🧪",color:"#8B5CF6"},
            {x:490,factor:"High salt content",detail:"Additional antimicrobial barrier",icon:"🧂",color:"#F59E0B"},
          ].map((f,i)=>(
            <g key={i}>
              <rect x={f.x} y="5" width="145" height="68" rx="10" fill={f.color} opacity="0.05" stroke={f.color} strokeWidth="1"/>
              <text x={f.x+72} y="24" fontSize="14" textAnchor="middle">{f.icon}</text>
              <text x={f.x+72} y="42" fontSize="9" fill={f.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{f.factor}</text>
              <text x={f.x+10} y="58" fontSize="7" fill="#64748B" fontFamily="system-ui">{f.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PEANUT BUTTER — SVGs
// ═══════════════════════════════════════════

export function PeanutAllergyMythSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Peanut Allergy and Pregnancy — What Research Shows</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"📅",label:"Old advice (pre-2015)",text:"AAP recommended avoiding peanuts during pregnancy to prevent allergies",color:"#EF4444"},
            {x:220,icon:"🔬",label:"LEAP study (NEJM 2015)",text:"Found early peanut introduction REDUCES allergy risk by 81%",color:"#3B82F6"},
            {x:430,icon:"✅",label:"Current guidance (AAP/ACOG)",text:"No reason to avoid peanuts during pregnancy — may be protective",color:"#10B981"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="195" height="90" rx="12" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+97} y="25" fontSize="14" textAnchor="middle">{s.icon}</text>
              <text x={s.x+97} y="42" fontSize="9" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.label}</text>
              <text x={s.x+12} y="60" fontSize="8" fill="#64748B" fontFamily="system-ui">{s.text.substring(0,45)}</text>
              <text x={s.x+12} y="74" fontSize="8" fill="#64748B" fontFamily="system-ui">{s.text.substring(45)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function PeanutButterNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Peanut Butter Nutrients — Per 2 Tbsp (USDA Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,n:"Protein",v:"7g",color:"#0F766E"},{x:120,n:"Healthy fat",v:"16g",color:"#F59E0B"},
            {x:230,n:"Folate",v:"24μg",color:"#8B5CF6"},{x:340,n:"Niacin",v:"1.8mg",color:"#3B82F6"},
            {x:450,n:"Iron",v:"0.6mg",color:"#EF4444"},{x:560,n:"Calories",v:"188",color:"#64748B"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="100" height="55" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+50} y="25" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+50} y="45" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PEPPERONI — SVGs
// ═══════════════════════════════════════════

export function PepperoniSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Pepperoni — When It Is Generally Considered Safe (per FDA)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,scenario:"On fresh hot pizza",s:true,why:"Oven reaches 400°F+"},{x:170,scenario:"Heated in microwave",s:true,why:"To steaming / 165°F"},
            {x:330,scenario:"In cooked pasta dish",s:true,why:"Fully heated through"},
            {x:490,scenario:"Cold from package",s:false,why:"Listeria risk per CDC data"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="145" height="68" rx="10" fill={p.s?"#10B981":"#EF4444"} opacity="0.06" stroke={p.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={p.x+72} y="25" fontSize="14" textAnchor="middle">{p.s?"✅":"❌"}</text>
              <text x={p.x+72} y="42" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.scenario}</text>
              <text x={p.x+72} y="58" fontSize="7" fill={p.s?"#059669":"#DC2626"} textAnchor="middle" fontFamily="system-ui">{p.why}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PRAWNS — SVGs (reuses shrimp SVGs where applicable)
// ═══════════════════════════════════════════

export function PrawnCookingSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Prawn Preparations — Generally Safe vs Avoid (per FDA)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,m:"Grilled prawns",s:true},{x:120,m:"Garlic prawns",s:true},{x:230,m:"Prawn curry",s:true},
            {x:340,m:"Prawn stir-fry",s:true},{x:450,m:"Raw prawn sashimi",s:false},{x:555,m:"Prawn ceviche",s:false},
          ].map((e,i)=>(
            <g key={i}>
              <rect x={e.x} y="5" width="100" height="65" rx="10" fill={e.s?"#10B981":"#EF4444"} opacity="0.06" stroke={e.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={e.x+50} y="28" fontSize="14" textAnchor="middle">{e.s?"✅":"❌"}</text>
              <text x={e.x+50} y="45" fontSize="8" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.m}</text>
              <text x={e.x+50} y="60" fontSize="7" fill={e.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{e.s?"Generally safe":"Avoid per FDA"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PROTEIN POWDER — SVGs
// ═══════════════════════════════════════════

export function ProteinPowderSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Protein Powder — What to Look For During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🛡️",item:"Third-party tested (NSF/USP)",verdict:"Choose these",color:"#10B981"},
            {x:170,icon:"📋",item:"Minimal ingredients",verdict:"Isolate + flavoring only",color:"#10B981"},
            {x:330,icon:"⚠️",item:"Proprietary blends",verdict:"Avoid — unknown amounts",color:"#F59E0B"},
            {x:490,icon:"❌",item:"Added herbs/stimulants",verdict:"Avoid — no pregnancy data",color:"#EF4444"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="145" height="68" rx="10" fill={p.color} opacity="0.06" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+72} y="24" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+72} y="42" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.item}</text>
              <text x={p.x+72} y="58" fontSize="8" fill={p.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function WholeVsPowderSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Meeting 71g Daily Protein — Food vs Powder (ACOG Target)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Whole Food (preferred per ACOG)</text>
          {[{y:35,t:"Chicken breast: 31g"},{y:48,t:"2 eggs: 12g"},{y:61,t:"Greek yogurt: 15g"},{y:74,t:"Glass of milk: 8g → Total: 66g"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">⚠️ Supplement (if needed)</text>
          {[{y:35,t:"1 scoop whey isolate: 25-30g"},{y:48,t:"Choose NSF/USP certified only"},{y:61,t:"Avoid herbs and proprietary blends"},{y:74,t:"Supplement, not replacement"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">{r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// RICOTTA — SVGs
// ═══════════════════════════════════════════

export function RicottaSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Ricotta Safety — By Source (per FDA Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,src:"US store-bought",detail:"Always pasteurized by FDA regulation",s:true},
            {x:170,src:"In cooked dishes",detail:"Cooking kills bacteria regardless",s:true},
            {x:330,src:"Restaurant (US)",detail:"Typically pasteurized — ask if unsure",s:true},
            {x:490,src:"Homemade from raw milk",detail:"Not pasteurized — avoid per FDA",s:false},
          ].map((r,i)=>(
            <g key={i}>
              <rect x={r.x} y="5" width="145" height="68" rx="10" fill={r.s?"#10B981":"#EF4444"} opacity="0.06" stroke={r.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={r.x+72} y="24" fontSize="14" textAnchor="middle">{r.s?"✅":"❌"}</text>
              <text x={r.x+72} y="40" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.src}</text>
              <text x={r.x+10} y="56" fontSize="7" fill="#64748B" fontFamily="system-ui">{r.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SARDINES — SVGs
// ═══════════════════════════════════════════

export function SardineNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Sardines — Pregnancy Nutrient Powerhouse (USDA Data, Per 3oz)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🧠",n:"Omega-3",v:"1.4g",pct:"DHA+EPA",color:"#8B5CF6"},
            {x:120,icon:"💪",n:"Protein",v:"23g",pct:"41% DV",color:"#0F766E"},
            {x:230,icon:"🦴",n:"Calcium",v:"325mg",pct:"25% DV",color:"#3B82F6"},
            {x:340,icon:"☀️",n:"Vitamin D",v:"4.8μg",pct:"24% DV",color:"#F59E0B"},
            {x:450,icon:"🩸",n:"B12",v:"8.9μg",pct:"371% DV",color:"#EC4899"},
            {x:560,icon:"🧪",n:"Mercury",v:"0.013",pct:"ppm (very low)",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="100" height="68" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+50} y="22" fontSize="12" textAnchor="middle">{p.icon}</text>
              <text x={p.x+50} y="38" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+50} y="52" fontSize="12" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+50} y="65" fontSize="7" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SMOKED SALMON — SVGs
// ═══════════════════════════════════════════

export function SmokedSalmonTypesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Smoked Salmon Types — Per FDA Food Safety Guidelines</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Cold-smoked (lox, nova)",temp:"Processed below 90°F",verdict:"Avoid — not cooked per FDA",s:false},
            {x:220,type:"Hot-smoked (kippered)",temp:"Processed at 145°F+",verdict:"Generally considered safe",s:true},
            {x:430,type:"Canned salmon",temp:"Sterilized during canning",verdict:"Generally considered safe",s:true},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="195" height="80" rx="12" fill={s.s?"#10B981":"#EF4444"} opacity="0.05" stroke={s.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={s.x+97} y="22" fontSize="14" textAnchor="middle">{s.s?"✅":"❌"}</text>
              <text x={s.x+97} y="40" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{s.type}</text>
              <text x={s.x+97} y="56" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{s.temp}</text>
              <text x={s.x+97} y="72" fontSize="8" fill={s.s?"#059669":"#DC2626"} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{s.verdict}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SODA — SVGs
// ═══════════════════════════════════════════

export function SodaSugarContentSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Sugar and Caffeine in Common Sodas (Per 12oz Can)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,drink:"Coca-Cola",sugar:"39g (10 tsp)",caff:"34mg",color:"#EF4444"},
            {y:30,drink:"Pepsi",sugar:"41g (10 tsp)",caff:"38mg",color:"#EF4444"},
            {y:55,drink:"Mountain Dew",sugar:"46g (12 tsp)",caff:"54mg",color:"#EF4444"},
            {y:80,drink:"Sprite / 7-Up",sugar:"38g (10 tsp)",caff:"0mg",color:"#F59E0B"},
            {y:105,drink:"Diet Coke",sugar:"0g",caff:"46mg",color:"#F59E0B"},
            {y:130,drink:"Sparkling water",sugar:"0g",caff:"0mg",color:"#10B981"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="10" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.drink}</text>
              <text x="180" y={r.y+14} fontSize="9" fill={r.color} fontWeight="600" fontFamily="system-ui">Sugar: {r.sugar}</text>
              <text x="400" y={r.y+14} fontSize="9" fill={r.color} fontWeight="600" fontFamily="system-ui">Caffeine: {r.caff}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SodaAlternativesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Healthier Fizzy Alternatives During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🫧",alt:"Sparkling water",detail:"Zero calories, zero sugar, zero caffeine",color:"#10B981"},
            {x:170,icon:"🍋",alt:"Sparkling + citrus",detail:"Squeeze lemon or lime for flavor",color:"#10B981"},
            {x:330,icon:"🍓",alt:"Sparkling + berries",detail:"Muddle berries for natural sweetness",color:"#10B981"},
            {x:490,icon:"🧊",alt:"Infused water",detail:"Cucumber, mint, or fruit slices",color:"#3B82F6"},
          ].map((a,i)=>(
            <g key={i}>
              <rect x={a.x} y="5" width="145" height="68" rx="10" fill={a.color} opacity="0.06" stroke={a.color} strokeWidth="1"/>
              <text x={a.x+72} y="24" fontSize="16" textAnchor="middle">{a.icon}</text>
              <text x={a.x+72} y="42" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{a.alt}</text>
              <text x={a.x+10} y="58" fontSize="7" fill="#64748B" fontFamily="system-ui">{a.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SPICY FOOD — SVGs
// ═══════════════════════════════════════════

export function SpicyFoodMythSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Spicy Food Pregnancy Myths vs Published Evidence</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,myth:"Causes miscarriage",truth:"No clinical evidence per ACOG. Capsaicin does not cross placenta significantly",color:"#10B981"},
            {x:220,myth:"Induces labor",truth:"Not supported by obstetric research. No documented mechanism",color:"#10B981"},
            {x:430,myth:"Harms the baby",truth:"No teratogenic effects documented. Only maternal digestive discomfort",color:"#10B981"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="200" height="90" rx="10" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1"/>
              <text x={m.x+100} y="22" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">MYTH: {m.myth}</text>
              <line x1={m.x+20} y1="30" x2={m.x+180} y2="30" stroke="#E2E8F0" strokeWidth="1"/>
              <text x={m.x+10} y="46" fontSize="8" fill="#059669" fontWeight="600" fontFamily="system-ui">EVIDENCE:</text>
              <text x={m.x+10} y="62" fontSize="7" fill="#64748B" fontFamily="system-ui">{m.truth.substring(0,48)}</text>
              <text x={m.x+10} y="76" fontSize="7" fill="#64748B" fontFamily="system-ui">{m.truth.substring(48)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function HeartburnTipsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Managing Heartburn from Spicy Food During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,tip:"Eat smaller portions",icon:"🍽️",color:"#0F766E"},
            {x:140,tip:"Pair with dairy (yogurt)",icon:"🥛",color:"#0F766E"},
            {x:280,tip:"Stay upright 30 min after",icon:"🧍",color:"#0F766E"},
            {x:420,tip:"Reduce spice level gradually",icon:"🌶️",color:"#F59E0B"},
            {x:550,tip:"Avoid before bedtime",icon:"🌙",color:"#F59E0B"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x={t.x} y="5" width="115" height="58" rx="8" fill={t.color} opacity="0.06" stroke={t.color} strokeWidth="1"/>
              <text x={t.x+57} y="24" fontSize="14" textAnchor="middle">{t.icon}</text>
              <text x={t.x+57} y="42" fontSize="8" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{t.tip}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SPROUTS — SVGs
// ═══════════════════════════════════════════

export function SproutsRiskSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Raw Sprouts Are Risky — FDA/CDC Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🌱",step:"Seeds may be contaminated",detail:"Bacteria can be inside the seed before sprouting",color:"#EF4444"},
            {x:170,icon:"🌡️",step:"Warm, humid growth",detail:"Sprouting conditions are ideal for bacterial multiplication",color:"#EF4444"},
            {x:330,icon:"🚿",step:"Washing is ineffective",detail:"Cannot remove bacteria already inside sprout tissue per FDA",color:"#EF4444"},
            {x:490,icon:"📊",step:"50+ outbreaks since 1996",detail:"Documented by CDC — Salmonella and E. coli",color:"#EF4444"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="145" height="80" rx="10" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+72} y="25" fontSize="16" textAnchor="middle">{s.icon}</text>
              <text x={s.x+72} y="42" fontSize="9" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.step}</text>
              <text x={s.x+10} y="58" fontSize="7" fill="#64748B" fontFamily="system-ui">{s.detail.substring(0,42)}</text>
              <text x={s.x+10} y="72" fontSize="7" fill="#64748B" fontFamily="system-ui">{s.detail.substring(42)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TILAPIA — SVGs (reuses fish mercury rank)
// ═══════════════════════════════════════════

export function TilapiaNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Tilapia Nutrients — Per 3oz Cooked Serving (USDA Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"💪",n:"Protein",v:"21g",color:"#0F766E"},{x:120,icon:"🛡️",n:"Selenium",v:"47μg (85% DV)",color:"#3B82F6"},
            {x:270,icon:"🧠",n:"B12",v:"1.6μg (67% DV)",color:"#8B5CF6"},{x:420,icon:"🫀",n:"Potassium",v:"380mg",color:"#EF4444"},
            {x:550,icon:"⚡",n:"Calories",v:"110",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="58" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="22" fontSize="12" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="38" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="52" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.v}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TOFU — SVGs
// ═══════════════════════════════════════════

export function TofuPhytoSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Soy Phytoestrogen Concern — What Research Shows</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="10" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">⚠️ The Concern (theoretical)</text>
          {[{y:36,t:"Soy contains isoflavones (plant estrogens)"},{y:50,t:"Animal studies used concentrated supplements"},{y:64,t:"Doses far exceeded normal dietary intake"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ The Evidence (human studies)</text>
          {[{y:36,t:"Journal of Nutrition: no estrogenic effects in humans"},{y:50,t:"1-2 servings/day not associated with adverse outcomes"},{y:64,t:"ACOG does not recommend avoiding soy in pregnancy"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function TofuNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Firm Tofu Nutrients — Per Half Block/7oz (USDA Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,n:"Protein",v:"21g",sub:"Complete",color:"#0F766E"},{x:130,n:"Calcium",v:"861mg",sub:"66% DV",color:"#8B5CF6"},
            {x:260,n:"Iron",v:"6.6mg",sub:"37% DV",color:"#EF4444"},{x:390,n:"Manganese",v:"1.5mg",sub:"65% DV",color:"#3B82F6"},
            {x:520,n:"Calories",v:"183",sub:"per 7oz",color:"#F59E0B"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="58" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="22" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="40" fontSize="14" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.v}</text>
              <text x={p.x+57} y="54" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.sub}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// UNPASTEURIZED JUICE — SVGs
// ═══════════════════════════════════════════

export function JuiceSafetySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Juice Safety During Pregnancy — per FDA Guidelines</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Pasteurized (shelf)",s:true,detail:"Heat-treated, sealed"},{x:130,type:"Fresh-squeezed (home)",s:true,detail:"From washed fruit, drink now"},
            {x:260,type:"Store cold-pressed",s:false,detail:"Often unpasteurized"},{x:390,type:"Juice bar / stand",s:false,detail:"Uncertain pasteurization"},
            {x:520,type:"Farmers market",s:false,detail:"Usually unpasteurized"},
          ].map((j,i)=>(
            <g key={i}>
              <rect x={j.x} y="5" width="115" height="68" rx="10" fill={j.s?"#10B981":"#EF4444"} opacity="0.06" stroke={j.s?"#10B981":"#EF4444"} strokeWidth="1.5"/>
              <text x={j.x+57} y="25" fontSize="14" textAnchor="middle">{j.s?"✅":"❌"}</text>
              <text x={j.x+57} y="42" fontSize="8" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{j.type}</text>
              <text x={j.x+57} y="58" fontSize="7" fill={j.s?"#059669":"#DC2626"} textAnchor="middle" fontFamily="system-ui">{j.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// YOGURT — SVGs
// ═══════════════════════════════════════════

export function YogurtTypesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Yogurt Types — Pregnancy Safety and Nutrition (per FDA/USDA)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,type:"Greek yogurt (plain)",protein:"20g",sugar:"6g",safety:"Generally safe — pasteurized",color:"#10B981"},
            {y:30,type:"Regular yogurt (plain)",protein:"10g",sugar:"12g",safety:"Generally safe — pasteurized",color:"#10B981"},
            {y:55,type:"Flavored yogurt",protein:"8g",sugar:"20-30g",safety:"Generally safe but high sugar",color:"#F59E0B"},
            {y:80,type:"Frozen yogurt (store)",protein:"4g",sugar:"18g",safety:"Generally safe — pasteurized",color:"#10B981"},
            {y:105,type:"Frozen yogurt (soft-serve)",protein:"4g",sugar:"18g",safety:"Caution — machine hygiene risk",color:"#F59E0B"},
          ].map((y,i)=>(
            <g key={i}>
              <text x="10" y={y.y+14} fontSize="9" fill="#334155" fontWeight="600" fontFamily="system-ui">{y.type}</text>
              <text x="230" y={y.y+14} fontSize="9" fill="#0F766E" fontFamily="system-ui">Protein: {y.protein}</text>
              <text x="330" y={y.y+14} fontSize="9" fill="#F59E0B" fontFamily="system-ui">Sugar: {y.sugar}</text>
              <rect x="430" y={y.y} width="200" height="18" rx="4" fill={y.color} opacity="0.1"/>
              <text x="440" y={y.y+13} fontSize="8" fill={y.color} fontWeight="600" fontFamily="system-ui">{y.safety}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// STRESS TEST (PSS-10) — SVGs
// ═══════════════════════════════════════════

export function StressScoresSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">PSS-10 Score Ranges — Published Interpretation (Cohen et al.)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="stress-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#10B981"/><stop offset="35%" stopColor="#10B981"/><stop offset="50%" stopColor="#F59E0B"/><stop offset="75%" stopColor="#EF4444"/><stop offset="100%" stopColor="#991B1B"/></linearGradient></defs>
          <rect x="20" y="15" width="600" height="26" rx="13" fill="url(#stress-g)" opacity="0.4"/>
          <text x="110" y="10" fontSize="9" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Low Stress (0-13)</text>
          <text x="320" y="10" fontSize="9" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Moderate (14-26)</text>
          <text x="530" y="10" fontSize="9" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">High (27-40)</text>
          {[{x:200,v:"13"},{x:420,v:"26"}].map((m,i)=>(
            <g key={i}><line x1={m.x} y1={41} x2={m.x} y2={55} stroke="#334155" strokeWidth="2"/><text x={m.x} y={68} fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.v}</text></g>
          ))}
          <text x="320" y="68" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Screening tool — does not diagnose any condition</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ANXIETY (GAD-7) — SVGs
// ═══════════════════════════════════════════

export function AnxietyScoresSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">GAD-7 Score Ranges — Published Criteria (Spitzer et al. 2006)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,range:"0-4",level:"Minimal anxiety",action:"No clinical action typically needed",color:"#10B981"},
            {y:30,range:"5-9",level:"Mild anxiety",action:"Monitor — may benefit from self-help strategies",color:"#3B82F6"},
            {y:55,range:"10-14",level:"Moderate anxiety",action:"Providers typically recommend professional evaluation",color:"#F59E0B"},
            {y:80,range:"15-21",level:"Severe anxiety",action:"Providers typically recommend professional evaluation and treatment discussion",color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x="10" y={r.y} width="620" height="22" rx="5" fill={r.color} opacity="0.08" stroke={r.color} strokeWidth="1"/>
              <text x="20" y={r.y+15} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.range}</text>
              <text x="80" y={r.y+15} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.level}</text>
              <text x="260" y={r.y+15} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.action}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BURNOUT — SVGs
// ═══════════════════════════════════════════

export function BurnoutDimensionsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">WHO ICD-11 Burnout — Three Dimensions (Maslach Framework)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,dim:"Emotional Exhaustion",desc:"Feeling drained, depleted of emotional resources",icon:"😩",color:"#EF4444"},
            {x:220,dim:"Depersonalization",desc:"Cynicism, detachment from work and colleagues",icon:"😐",color:"#F59E0B"},
            {x:430,dim:"Reduced Accomplishment",desc:"Feeling ineffective, doubting the value of your work",icon:"📉",color:"#8B5CF6"},
          ].map((d,i)=>(
            <g key={i}>
              <rect x={d.x} y="5" width="195" height="68" rx="12" fill={d.color} opacity="0.05" stroke={d.color} strokeWidth="1"/>
              <text x={d.x+97} y="25" fontSize="16" textAnchor="middle">{d.icon}</text>
              <text x={d.x+97} y="42" fontSize="10" fill={d.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{d.dim}</text>
              <text x={d.x+15} y="58" fontSize="7" fill="#64748B" fontFamily="system-ui">{d.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SLEEP QUALITY (PSQI) — SVGs
// ═══════════════════════════════════════════

export function SleepComponentsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">PSQI 7 Components — Published Assessment Framework (Buysse 1989)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,y:5,comp:"Sleep Quality",score:"0-3",color:"#3B82F6"},{x:170,y:5,comp:"Sleep Latency",score:"0-3",color:"#8B5CF6"},
            {x:330,y:5,comp:"Sleep Duration",score:"0-3",color:"#0F766E"},{x:490,y:5,comp:"Sleep Efficiency",score:"0-3",color:"#10B981"},
            {x:10,y:60,comp:"Disturbances",score:"0-3",color:"#F59E0B"},{x:170,y:60,comp:"Medication Use",score:"0-3",color:"#EF4444"},
            {x:330,y:60,comp:"Daytime Dysfunction",score:"0-3",color:"#EC4899"},
          ].map((c,i)=>(
            <g key={i}>
              <rect x={c.x} y={c.y} width="145" height="45" rx="8" fill={c.color} opacity="0.06" stroke={c.color} strokeWidth="1"/>
              <text x={c.x+72} y={c.y+20} fontSize="9" fill={c.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{c.comp}</text>
              <text x={c.x+72} y={c.y+36} fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Score: {c.score}</text>
            </g>
          ))}
          <rect x="490" y="60" width="145" height="45" rx="8" fill="#334155" opacity="0.06" stroke="#334155" strokeWidth="1.5"/>
          <text x="562" y="78" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Global: 0-21</text>
          <text x="562" y="94" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Above 5 = poor sleep</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ADHD (ASRS) — SVGs
// ═══════════════════════════════════════════

export function ADHDScreenVsDiagnosisSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">ASRS Screening vs Clinical Diagnosis — Key Differences</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="90" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">📋 This Screening Tool (ASRS)</text>
          {[{y:40,t:"Identifies possible ADHD symptoms"},{y:55,t:"Takes 5 minutes, self-report"},{y:70,t:"Cannot rule out other conditions"},{y:85,t:"First step — not final answer"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="90" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">🩺 Clinical Diagnosis</text>
          {[{y:40,t:"Comprehensive clinical interview"},{y:55,t:"Developmental history review"},{y:70,t:"Rules out anxiety, depression, sleep issues"},{y:85,t:"1-3 sessions with qualified professional"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ADHDMimicsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Conditions That Can Mimic ADHD Symptoms (per Published Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,cond:"Anxiety",symptom:"Difficulty concentrating, restlessness",color:"#F59E0B"},
            {x:135,cond:"Depression",symptom:"Poor focus, low motivation, fatigue",color:"#8B5CF6"},
            {x:270,cond:"Sleep deprivation",symptom:"Inattention, impulsivity, brain fog",color:"#3B82F6"},
            {x:405,cond:"Thyroid issues",symptom:"Difficulty concentrating, mood changes",color:"#EC4899"},
            {x:530,cond:"Normal stress",symptom:"Forgetfulness, disorganization",color:"#64748B"},
          ].map((c,i)=>(
            <g key={i}>
              <rect x={c.x} y="5" width="115" height="68" rx="8" fill={c.color} opacity="0.05" stroke={c.color} strokeWidth="1"/>
              <text x={c.x+57} y="22" fontSize="9" fill={c.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{c.cond}</text>
              <text x={c.x+8} y="40" fontSize="7" fill="#64748B" fontFamily="system-ui">{c.symptom.substring(0,28)}</text>
              <text x={c.x+8} y="53" fontSize="7" fill="#64748B" fontFamily="system-ui">{c.symptom.substring(28)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// SLEEP CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function SleepCyclesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Sleep Cycle Structure — Average 90 Minutes (Published Sleep Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,stage:"Light Sleep",sub:"Stage 1-2",dur:"~45 min",depth:25,color:"#3B82F6"},
            {x:170,stage:"Deep Sleep",sub:"Stage 3-4",dur:"~25 min",depth:70,color:"#1E40AF"},
            {x:330,stage:"REM Sleep",sub:"Dreams",dur:"~20 min",depth:35,color:"#8B5CF6"},
            {x:490,stage:"Best Wake Time",sub:"Between cycles",dur:"Light sleep",depth:10,color:"#10B981"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y={90-s.depth} width="145" height={s.depth} rx="8" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="1.5"/>
              <text x={s.x+72} y={85-s.depth+15} fontSize="10" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.stage}</text>
              <text x={s.x+72} y={85-s.depth+30} fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{s.sub} · {s.dur}</text>
              {i<3&&<text x={s.x+158} y="55" fontSize="14" fill="#CBD5E1">→</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function SleepRecommendationsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">National Sleep Foundation Recommendations by Age</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,age:"Teenagers (14-17)",hours:"8-10 hours",w:300,color:"#8B5CF6"},
            {y:30,age:"Young Adults (18-25)",hours:"7-9 hours",w:270,color:"#3B82F6"},
            {y:55,age:"Adults (26-64)",hours:"7-9 hours",w:270,color:"#10B981"},
            {y:80,age:"Older Adults (65+)",hours:"7-8 hours",w:240,color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.age}</text>
              <rect x="200" y={r.y+2} width={r.w} height="20" rx="4" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1"/>
              <text x={205+r.w} y={r.y+16} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.hours}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// POSTPARTUM DEPRESSION — SVGs
// ═══════════════════════════════════════════

export function EPDSScoresSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">EPDS Score Interpretation (Cox et al. 1987 Validation)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,range:"0-8",level:"Low likelihood of depression",action:"Routine follow-up per clinical practice",color:"#10B981"},
            {y:30,range:"9-12",level:"Possible depression",action:"Providers typically recommend further assessment",color:"#F59E0B"},
            {y:55,range:"13-18",level:"Probable depression",action:"Providers typically recommend clinical evaluation",color:"#EF4444"},
            {y:80,range:"19-30",level:"Severe range",action:"Providers typically recommend prompt professional evaluation",color:"#991B1B"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x="10" y={r.y} width="620" height="22" rx="4" fill={r.color} opacity="0.06" stroke={r.color} strokeWidth="1"/>
              <text x="20" y={r.y+15} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">Score {r.range}</text>
              <text x="120" y={r.y+15} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.level}</text>
              <text x="370" y={r.y+15} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.action}</text>
            </g>
          ))}
          <text x="10" y="108" fontSize="8" fill="#94A3B8" fontFamily="system-ui" fontStyle="italic">Scores reflect EPDS validation criteria. This is a screening tool, not a diagnostic instrument.</text>
        </svg>
      </div>
    </div>
  );
}

export function PPDStatsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Postpartum Depression — Key Facts (per ACOG/Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,stat:"1 in 7",label:"New mothers affected",src:"ACOG data",color:"#8B5CF6"},
            {x:170,stat:"Treatable",label:"Therapy + medication effective",src:"APA evidence",color:"#10B981"},
            {x:330,stat:"2-6 weeks",label:"Typical onset postpartum",src:"DSM-5 criteria",color:"#3B82F6"},
            {x:490,stat:"Screenable",label:"EPDS validated tool",src:"Cox et al. 1987",color:"#0F766E"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="145" height="68" rx="10" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+72} y="28" fontSize="16" fill={s.color} textAnchor="middle" fontWeight="800" fontFamily="system-ui">{s.stat}</text>
              <text x={s.x+72} y="45" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{s.label}</text>
              <text x={s.x+72} y="60" fontSize="7" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{s.src}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ANEMIA RISK CHECKER — SVGs
// ═══════════════════════════════════════════

export function AnemiaTypesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Types of Anemia — per WHO/Hematology Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Iron-deficiency",cause:"Low iron intake or absorption",prev:"Most common globally per WHO",color:"#EF4444"},
            {x:220,type:"B12/Folate deficiency",cause:"Dietary gaps or absorption issues",prev:"Common in vegetarians per research",color:"#F59E0B"},
            {x:430,type:"Chronic disease",cause:"Inflammation reduces iron availability",prev:"Associated with CKD, autoimmune",color:"#8B5CF6"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x={t.x} y="5" width="195" height="80" rx="12" fill={t.color} opacity="0.05" stroke={t.color} strokeWidth="1"/>
              <text x={t.x+97} y="25" fontSize="10" fill={t.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{t.type}</text>
              <text x={t.x+15} y="45" fontSize="8" fill="#64748B" fontFamily="system-ui">{t.cause}</text>
              <text x={t.x+15} y="65" fontSize="8" fill="#94A3B8" fontFamily="system-ui">{t.prev}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function IronAbsorptionSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Iron Absorption — Heme vs Non-Heme (Published Nutritional Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Heme Iron (15-35% absorption)</text>
          {[{y:40,t:"Red meat, poultry, fish"},{y:55,t:"Absorbed 2-3x better than plant iron"},{y:70,t:"Not affected by other food components"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Non-Heme Iron (2-20% absorption)</text>
          {[{y:40,t:"Spinach, lentils, beans, fortified cereals"},{y:55,t:"Vitamin C increases absorption up to 6x"},{y:70,t:"Tea/coffee/calcium can reduce absorption"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CHOLESTEROL RATIO — SVGs
// ═══════════════════════════════════════════

export function CholesterolRatioSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Total/HDL Cholesterol Ratio — AHA Risk Categories</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,ratio:"Below 3.5:1",risk:"Optimal",detail:"Below average cardiovascular risk per AHA",color:"#10B981"},
            {y:30,ratio:"3.5 - 5.0:1",risk:"Desirable",detail:"Average risk — considered acceptable per AHA",color:"#3B82F6"},
            {y:55,ratio:"5.0 - 6.0:1",risk:"Borderline",detail:"Above average risk — lifestyle changes typically recommended",color:"#F59E0B"},
            {y:80,ratio:"Above 6.0:1",risk:"High risk",detail:"Significantly elevated risk — providers typically recommend intervention",color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x="10" y={r.y} width="620" height="22" rx="4" fill={r.color} opacity="0.06" stroke={r.color} strokeWidth="1"/>
              <text x="20" y={r.y+15} fontSize="10" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.ratio}</text>
              <text x="150" y={r.y+15} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.risk}</text>
              <text x="280" y={r.y+15} fontSize="9" fill="#64748B" fontFamily="system-ui">{r.detail}</text>
            </g>
          ))}
          <text x="10" y="108" fontSize="8" fill="#94A3B8" fontFamily="system-ui" fontStyle="italic">Categories per AHA guidelines. Cholesterol ratio is one cardiovascular risk factor among many.</text>
        </svg>
      </div>
    </div>
  );
}

export function FraminghamExampleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Ratios Matter — Framingham Heart Study Example</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="10" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">❌ Higher Risk (per Framingham data)</text>
          <text x="160" y="40" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">Total: 200 · HDL: 25</text>
          <text x="160" y="56" fontSize="14" fill="#DC2626" textAnchor="middle" fontWeight="800" fontFamily="system-ui">Ratio: 8.0:1</text>
          <text x="160" y="72" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Low total cholesterol but very low HDL</text>
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">✅ Lower Risk (per Framingham data)</text>
          <text x="480" y="40" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">Total: 250 · HDL: 83</text>
          <text x="480" y="56" fontSize="14" fill="#059669" textAnchor="middle" fontWeight="800" fontFamily="system-ui">Ratio: 3.0:1</text>
          <text x="480" y="72" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Higher total but excellent HDL protection</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// GFR CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function GFRStagesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">CKD Stages by GFR — KDIGO Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,stage:"G1",gfr:"90+",desc:"Normal or high function",action:"Monitor if risk factors present",color:"#10B981",w:500},
            {y:33,stage:"G2",gfr:"60-89",desc:"Mildly decreased",action:"Monitor, manage risk factors",color:"#10B981",w:400},
            {y:61,stage:"G3a",gfr:"45-59",desc:"Mildly to moderately decreased",action:"Referral may be considered",color:"#F59E0B",w:300},
            {y:89,stage:"G3b",gfr:"30-44",desc:"Moderately to severely decreased",action:"Nephrology referral typical",color:"#F59E0B",w:220},
            {y:117,stage:"G4",gfr:"15-29",desc:"Severely decreased",action:"Specialist management",color:"#EF4444",w:140},
          ].map((s,i)=>(
            <g key={i}>
              <text x="10" y={s.y+17} fontSize="10" fill={s.color} fontWeight="700" fontFamily="system-ui">{s.stage}</text>
              <text x="40" y={s.y+17} fontSize="9" fill="#334155" fontWeight="500" fontFamily="system-ui">GFR {s.gfr}</text>
              <rect x="120" y={s.y+2} width={s.w*0.7} height="20" rx="4" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="1"/>
              <text x="130" y={s.y+16} fontSize="8" fill={s.color} fontWeight="600" fontFamily="system-ui">{s.desc}</text>
              <text x="490" y={s.y+16} fontSize="8" fill="#64748B" fontFamily="system-ui">{s.action}</text>
            </g>
          ))}
          <text x="10" y="148" fontSize="8" fill="#94A3B8" fontFamily="system-ui">Source: KDIGO 2012 Clinical Practice Guidelines. Staging requires confirmation over 3+ months.</text>
        </svg>
      </div>
    </div>
  );
}

export function GFRFactorsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Factors That Can Temporarily Affect GFR Readings</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"💧",factor:"Dehydration",effect:"May lower GFR temporarily",color:"#F59E0B"},
            {x:140,icon:"💊",factor:"Medications",effect:"NSAIDs, ACE inhibitors affect results",color:"#F59E0B"},
            {x:280,icon:"🥩",factor:"High-protein meal",effect:"Can raise creatinine, lower GFR",color:"#F59E0B"},
            {x:420,icon:"🏃",factor:"Intense exercise",effect:"Temporarily affects creatinine",color:"#F59E0B"},
            {x:550,icon:"🔄",factor:"Repeat testing",effect:"Required for diagnosis per KDIGO",color:"#10B981"},
          ].map((f,i)=>(
            <g key={i}>
              <rect x={f.x} y="5" width="118" height="68" rx="8" fill={f.color} opacity="0.05" stroke={f.color} strokeWidth="1"/>
              <text x={f.x+59} y="24" fontSize="14" textAnchor="middle">{f.icon}</text>
              <text x={f.x+59} y="40" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{f.factor}</text>
              <text x={f.x+8} y="56" fontSize="7" fill="#64748B" fontFamily="system-ui">{f.effect}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// THYROID — SVGs
// ═══════════════════════════════════════════

export function TSHRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">TSH Reference Ranges — per American Thyroid Association</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,label:"Hyperthyroid range",range:"< 0.4 mIU/L",desc:"TSH suppressed — thyroid may be overactive",color:"#EF4444"},
            {y:35,label:"Normal range",range:"0.4 – 4.0 mIU/L",desc:"Generally considered euthyroid (normal function)",color:"#10B981"},
            {y:65,label:"Subclinical hypothyroid",range:"4.0 – 10.0 mIU/L",desc:"Mildly elevated — monitoring or treatment depending on symptoms",color:"#F59E0B"},
            {y:95,label:"Hypothyroid range",range:"> 10.0 mIU/L",desc:"Clearly elevated — treatment typically recommended by providers",color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x="10" y={r.y} width="620" height="26" rx="6" fill={r.color} opacity="0.06" stroke={r.color} strokeWidth="1"/>
              <text x="20" y={r.y+17} fontSize="9" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.label}</text>
              <text x="200" y={r.y+17} fontSize="9" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.range}</text>
              <text x="360" y={r.y+17} fontSize="8" fill="#64748B" fontFamily="system-ui">{r.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// VITAMIN D — SVGs
// ═══════════════════════════════════════════

export function VitaminDRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Vitamin D Levels — Endocrine Society Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,level:"Deficient",range:"< 20 ng/mL",action:"Supplementation typically recommended by providers",color:"#EF4444"},
            {y:35,level:"Insufficient",range:"21 – 29 ng/mL",action:"Moderate supplementation often suggested",color:"#F59E0B"},
            {y:65,level:"Sufficient",range:"30 – 100 ng/mL",action:"Generally considered adequate per Endocrine Society",color:"#10B981"},
            {y:95,level:"Potentially toxic",range:"> 100 ng/mL",action:"May cause hypercalcemia — medical attention needed",color:"#991B1B"},
          ].map((r,i)=>(
            <g key={i}>
              <rect x="10" y={r.y} width="620" height="26" rx="6" fill={r.color} opacity="0.06" stroke={r.color} strokeWidth="1"/>
              <text x="20" y={r.y+17} fontSize="9" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.level}</text>
              <text x="150" y={r.y+17} fontSize="9" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.range}</text>
              <text x="300" y={r.y+17} fontSize="8" fill="#64748B" fontFamily="system-ui">{r.action}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BMR CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function BMRFormulasSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">BMR Formulas Compared — Published Accuracy Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,name:"Mifflin-St Jeor (1990)",acc:"Most accurate (~5% better)",rec:"Recommended by AND",color:"#10B981"},
            {x:220,name:"Harris-Benedict (1919)",acc:"Tends to overestimate",rec:"Widely used, less accurate",color:"#F59E0B"},
            {x:430,name:"Katch-McArdle",acc:"Requires body fat %",rec:"Best if you know BF%",color:"#3B82F6"},
          ].map((f,i)=>(
            <g key={i}>
              <rect x={f.x} y="5" width="195" height="80" rx="12" fill={f.color} opacity="0.05" stroke={f.color} strokeWidth="1.5"/>
              <text x={f.x+97} y="25" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{f.name}</text>
              <text x={f.x+97} y="45" fontSize="9" fill={f.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{f.acc}</text>
              <text x={f.x+97} y="65" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">{f.rec}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BMRvsTDEESVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">BMR vs TDEE — Where Your Calories Go</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="380" height="40" rx="8" fill="#0F766E" opacity="0.15" stroke="#0F766E" strokeWidth="1.5"/>
          <text x="200" y="45" fontSize="12" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">BMR: 60-70% of TDEE</text>
          <rect x="390" y="20" width="60" height="40" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" strokeWidth="1"/>
          <text x="420" y="45" fontSize="9" fill="#7C3AED" textAnchor="middle" fontWeight="600" fontFamily="system-ui">TEF 10%</text>
          <rect x="450" y="20" width="100" height="40" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="1"/>
          <text x="500" y="45" fontSize="9" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">NEAT+EAT</text>
          <rect x="550" y="20" width="80" height="40" rx="8" fill="#EC4899" opacity="0.15" stroke="#EC4899" strokeWidth="1"/>
          <text x="590" y="45" fontSize="9" fill="#BE185D" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Exercise</text>
          <text x="320" y="75" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Never eat below BMR — cut from TDEE only</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BODY FRAME SIZE — SVGs
// ═══════════════════════════════════════════

export function FrameSizeChartSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Body Frame Size Classification — NIH Wrist Measurement Method</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="200" y="12" fontSize="10" fill="#3B82F6" fontWeight="700" fontFamily="system-ui">WOMEN</text>
          <text x="460" y="12" fontSize="10" fill="#0F766E" fontWeight="700" fontFamily="system-ui">MEN</text>
          {[
            {y:20,frame:"Small",wF:"< 5.5 in",wM:"< 6.5 in",color:"#3B82F6"},
            {y:50,frame:"Medium",wF:"5.5–5.75 in",wM:"6.5–7.5 in",color:"#10B981"},
            {y:80,frame:"Large",wF:"> 5.75 in",wM:"> 7.5 in",color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+17} fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.frame} Frame</text>
              <rect x="140" y={r.y+2} width="150" height="22" rx="4" fill={r.color} opacity="0.1" stroke={r.color} strokeWidth="1"/>
              <text x="215" y={r.y+17} fontSize="10" fill={r.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">Wrist: {r.wF}</text>
              <rect x="390" y={r.y+2} width="150" height="22" rx="4" fill={r.color} opacity="0.1" stroke={r.color} strokeWidth="1"/>
              <text x="465" y={r.y+17} fontSize="10" fill={r.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">Wrist: {r.wM}</text>
            </g>
          ))}
          <text x="320" y="108" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Source: National Institutes of Health anthropometric standards</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CALORIE WOMEN 50+ — SVGs
// ═══════════════════════════════════════════

export function MetabolismAgingSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Metabolism and Aging — What Pontzer et al. (Science 2021) Found</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,age:"Ages 20-60",finding:"Metabolic rate relatively stable",detail:"No significant decline when adjusted for body composition",color:"#10B981"},
            {x:220,age:"After 60",finding:"~0.7% decline per year",detail:"Gradual, not the dramatic cliff that was assumed",color:"#F59E0B"},
            {x:430,age:"The real culprit",finding:"Reduced muscle + activity",detail:"Muscle loss and less movement explain most calorie need changes",color:"#3B82F6"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="195" height="88" rx="12" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+97} y="25" fontSize="11" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.age}</text>
              <text x={s.x+97} y="45" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{s.finding}</text>
              <text x={s.x+12} y="65" fontSize="8" fill="#64748B" fontFamily="system-ui">{s.detail.substring(0,45)}</text>
              <text x={s.x+12} y="79" fontSize="8" fill="#64748B" fontFamily="system-ui">{s.detail.substring(45)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function NutrientNeeds50SVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Key Nutrient Changes After 50 (per NIH/ESPEN Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,n:"Protein",change:"↑ 1.0-1.2g/kg",reason:"Anabolic resistance",color:"#EF4444"},
            {x:140,n:"Calcium",change:"↑ 1,200mg/day",reason:"Bone density decline",color:"#8B5CF6"},
            {x:280,n:"Vitamin D",change:"↑ 600-800 IU",reason:"Reduced skin synthesis",color:"#F59E0B"},
            {x:420,n:"B12",change:"↑ Monitor levels",reason:"Reduced absorption",color:"#3B82F6"},
            {x:550,n:"Fiber",change:"= 25g/day",reason:"Digestive health",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="58" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="22" fontSize="10" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.n}</text>
              <text x={p.x+57} y="38" fontSize="10" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.change}</text>
              <text x={p.x+57} y="52" fontSize="7" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{p.reason}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// IDEAL WEIGHT — SVGs
// ═══════════════════════════════════════════

export function IdealWeightFormulasSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Four Ideal Weight Formulas Compared — For a 5ft 8in Person</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,formula:"Devine (1974)",male:"154 lbs",female:"126 lbs",origin:"Originally for drug dosing",color:"#3B82F6"},
            {y:30,formula:"Robinson (1983)",male:"154 lbs",female:"135 lbs",origin:"Broader population data",color:"#10B981"},
            {y:55,formula:"Miller (1983)",male:"151 lbs",female:"135 lbs",origin:"Alternative validation",color:"#8B5CF6"},
            {y:80,formula:"Hamwi (1964)",male:"154 lbs",female:"140 lbs",origin:"Earliest published formula",color:"#F59E0B"},
          ].map((f,i)=>(
            <g key={i}>
              <text x="10" y={f.y+17} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{f.formula}</text>
              <rect x="160" y={f.y+2} width="80" height="20" rx="4" fill={f.color} opacity="0.1" stroke={f.color} strokeWidth="1"/>
              <text x="200" y={f.y+16} fontSize="10" fill={f.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{f.male}</text>
              <rect x="260" y={f.y+2} width="80" height="20" rx="4" fill={f.color} opacity="0.1" stroke={f.color} strokeWidth="1"/>
              <text x="300" y={f.y+16} fontSize="10" fill={f.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{f.female}</text>
              <text x="360" y={f.y+16} fontSize="8" fill="#94A3B8" fontFamily="system-ui">{f.origin}</text>
            </g>
          ))}
          <text x="200" y="108" fontSize="9" fill="#3B82F6" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Male</text>
          <text x="300" y="108" fontSize="9" fill="#EC4899" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Female</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PROTEIN SENIORS — SVGs
// ═══════════════════════════════════════════

export function SeniorProteinSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Protein Needs — Seniors vs General Adults (per ESPEN Guidelines)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#64748B" opacity="0.05" stroke="#CBD5E1" strokeWidth="1.5"/>
          <text x="160" y="25" fontSize="11" fill="#64748B" textAnchor="middle" fontWeight="700" fontFamily="system-ui">General Adult (RDA)</text>
          <text x="160" y="50" fontSize="20" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">0.8 g/kg/day</text>
          <text x="160" y="70" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Minimum to avoid deficiency</text>
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="25" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Seniors 65+ (ESPEN)</text>
          <text x="480" y="50" fontSize="20" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">1.0–1.2 g/kg/day</text>
          <text x="480" y="70" fontSize="9" fill="#059669" textAnchor="middle" fontFamily="system-ui">Combat anabolic resistance + sarcopenia</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TDEE TEENS — SVGs
// ═══════════════════════════════════════════

export function TeenCalorieRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Estimated Daily Calorie Needs for Teens — USDA Dietary Guidelines</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="12" fontSize="9" fill="#3B82F6" fontWeight="700" fontFamily="system-ui">BOYS</text>
          <text x="500" y="12" fontSize="9" fill="#EC4899" fontWeight="700" fontFamily="system-ui">GIRLS</text>
          {[
            {y:20,age:"Age 13 Sedentary",m:"2,000",f:"1,800",mw:200,fw:180},
            {y:45,age:"Age 13 Active",m:"2,600",f:"2,200",mw:260,fw:220},
            {y:70,age:"Age 17 Sedentary",m:"2,400",f:"1,800",mw:240,fw:180},
            {y:95,age:"Age 17 Active",m:"3,200",f:"2,400",mw:320,fw:240},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="9" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.age}</text>
              <rect x="180" y={r.y} width={r.mw*0.75} height="18" rx="4" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" strokeWidth="1"/>
              <text x={185+r.mw*0.75} y={r.y+13} fontSize="9" fill="#3B82F6" fontWeight="700" fontFamily="system-ui">{r.m} cal</text>
              <rect x="400" y={r.y} width={r.fw*0.75} height="18" rx="4" fill="#EC4899" opacity="0.15" stroke="#EC4899" strokeWidth="1"/>
              <text x={405+r.fw*0.75} y={r.y+13} fontSize="9" fill="#EC4899" fontWeight="700" fontFamily="system-ui">{r.f} cal</text>
            </g>
          ))}
          <text x="320" y="125" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Source: USDA Dietary Guidelines for Americans 2020-2025</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// WAIST-TO-HIP RATIO — SVGs
// ═══════════════════════════════════════════

export function WHRClassificationSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">WHO Waist-to-Hip Ratio Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="250" y="12" fontSize="10" fill="#3B82F6" fontWeight="700" fontFamily="system-ui">MEN</text>
          <text x="470" y="12" fontSize="10" fill="#EC4899" fontWeight="700" fontFamily="system-ui">WOMEN</text>
          {[
            {y:20,risk:"Low risk",m:"< 0.90",f:"< 0.80",color:"#10B981"},
            {y:50,risk:"Moderate risk",m:"0.90–0.99",f:"0.80–0.84",color:"#F59E0B"},
            {y:80,risk:"High risk",m:"≥ 1.00",f:"≥ 0.85",color:"#EF4444"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.risk}</text>
              <rect x="180" y={r.y} width="150" height="22" rx="4" fill={r.color} opacity="0.1" stroke={r.color} strokeWidth="1"/>
              <text x="255" y={r.y+15} fontSize="11" fill={r.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.m}</text>
              <rect x="400" y={r.y} width="150" height="22" rx="4" fill={r.color} opacity="0.1" stroke={r.color} strokeWidth="1"/>
              <text x="475" y={r.y+15} fontSize="11" fill={r.color} textAnchor="middle" fontWeight="600" fontFamily="system-ui">{r.f}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// LEAN BODY MASS — SVGs
// ═══════════════════════════════════════════

export function LBMComponentsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">What Makes Up Lean Body Mass</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"💪",comp:"Skeletal Muscle",pct:"~40%",color:"#EF4444"},
            {x:140,icon:"🦴",comp:"Bone",pct:"~15%",color:"#F59E0B"},
            {x:270,icon:"🫀",comp:"Organs",pct:"~10%",color:"#8B5CF6"},
            {x:400,icon:"💧",comp:"Water",pct:"~30%",color:"#3B82F6"},
            {x:530,icon:"🔬",comp:"Other tissue",pct:"~5%",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="115" height="58" rx="8" fill={p.color} opacity="0.05" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+57} y="22" fontSize="14" textAnchor="middle">{p.icon}</text>
              <text x={p.x+57} y="38" fontSize="9" fill={p.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{p.comp}</text>
              <text x={p.x+57} y="52" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.pct}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PCOS MACROS — SVGs
// ═══════════════════════════════════════════

export function PCOSMacroSplitsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">PCOS Macro Splits by Type (per Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,type:"Insulin-resistant PCOS",p:"30%",c:"30%",f:"40%",pw:180,cw:180,fw:240,color:"#8B5CF6"},
            {y:40,type:"Inflammatory PCOS",p:"25%",c:"35%",f:"40%",pw:150,cw:210,fw:240,color:"#EF4444"},
            {y:75,type:"Moderate / general PCOS",p:"30%",c:"35%",f:"35%",pw:180,cw:210,fw:210,color:"#10B981"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+20} fontSize="9" fill="#334155" fontWeight="600" fontFamily="system-ui">{r.type}</text>
              <rect x="195" y={r.y+5} width={r.pw*0.6} height="22" rx="4" fill="#EF4444" opacity="0.15"/>
              <text x={195+r.pw*0.3} y={r.y+20} fontSize="8" fill="#DC2626" textAnchor="middle" fontWeight="600" fontFamily="system-ui">P {r.p}</text>
              <rect x={195+r.pw*0.6} y={r.y+5} width={r.cw*0.6} height="22" fill="#3B82F6" opacity="0.15"/>
              <text x={195+r.pw*0.6+r.cw*0.3} y={r.y+20} fontSize="8" fill="#2563EB" textAnchor="middle" fontWeight="600" fontFamily="system-ui">C {r.c}</text>
              <rect x={195+r.pw*0.6+r.cw*0.6} y={r.y+5} width={r.fw*0.6} height="22" rx="4" fill="#F59E0B" opacity="0.15"/>
              <text x={195+r.pw*0.6+r.cw*0.6+r.fw*0.3} y={r.y+20} fontSize="8" fill="#B45309" textAnchor="middle" fontWeight="600" fontFamily="system-ui">F {r.f}</text>
            </g>
          ))}
          <text x="320" y="108" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Based on meta-analysis in Nutrition and Metabolism + J. Clin. Endocrinology</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ONE REP MAX — SVGs
// ═══════════════════════════════════════════

export function TrainingPercentagesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Training Zones by % of 1RM — NSCA Guidelines</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,zone:"Endurance",pct:"50-65%",reps:"15-20 reps",w:130,color:"#3B82F6"},
            {y:30,zone:"Hypertrophy",pct:"65-75%",reps:"8-12 reps",w:200,color:"#10B981"},
            {y:55,zone:"Strength",pct:"80-85%",reps:"4-6 reps",w:300,color:"#F59E0B"},
            {y:80,zone:"Power",pct:"85-95%",reps:"1-3 reps",w:400,color:"#EF4444"},
            {y:105,zone:"Max (peaking)",pct:"95-100%",reps:"1 rep",w:480,color:"#991B1B"},
          ].map((z,i)=>(
            <g key={i}>
              <text x="10" y={z.y+15} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{z.zone}</text>
              <rect x="120" y={z.y+2} width={z.w} height="18" rx="4" fill={z.color} opacity="0.15" stroke={z.color} strokeWidth="1"/>
              <text x={125+z.w} y={z.y+15} fontSize="9" fill={z.color} fontWeight="700" fontFamily="system-ui">{z.pct} ({z.reps})</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// DUE DATE — SVGs
// ═══════════════════════════════════════════

export function TrimesterTimelineSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Pregnancy Trimesters — ACOG Timeline</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,w:180,label:"1st Trimester",sub:"Weeks 1–12",detail:"Organ formation, highest sensitivity",color:"#A78BFA"},
            {x:200,w:220,label:"2nd Trimester",sub:"Weeks 13–27",detail:"Rapid growth, anatomy scan",color:"#8B5CF6"},
            {x:430,w:200,label:"3rd Trimester",sub:"Weeks 28–40",detail:"Weight gain, lung maturation",color:"#7C3AED"},
          ].map((t,i)=>(
            <g key={i}>
              <rect x={t.x} y="10" width={t.w} height="60" rx="10" fill={t.color} opacity="0.1" stroke={t.color} strokeWidth="1.5"/>
              <text x={t.x+t.w/2} y="30" fontSize="11" fill={t.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{t.label}</text>
              <text x={t.x+t.w/2} y="46" fontSize="10" fill="#334155" textAnchor="middle" fontFamily="system-ui">{t.sub}</text>
              <text x={t.x+t.w/2} y="62" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{t.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function DueDateAccuracySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Due Date Accuracy — Why Only 5% of Babies Arrive on Time</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,method:"LMP calculation",acc:"±14 days",note:"Assumes 28-day cycle + ovulation day 14",color:"#F59E0B"},
            {x:220,method:"1st trimester ultrasound",acc:"±5-7 days",note:"Crown-rump length — most accurate per ACOG",color:"#10B981"},
            {x:430,method:"2nd trimester ultrasound",acc:"±10-14 days",note:"Less accurate — fetal size variation increases",color:"#F59E0B"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="195" height="68" rx="10" fill={m.color} opacity="0.05" stroke={m.color} strokeWidth="1"/>
              <text x={m.x+97} y="22" fontSize="10" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.method}</text>
              <text x={m.x+97} y="40" fontSize="13" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">{m.acc}</text>
              <text x={m.x+10} y="58" fontSize="7" fill="#64748B" fontFamily="system-ui">{m.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BABY GROWTH PERCENTILE — SVGs
// ═══════════════════════════════════════════

export function GrowthPercentileSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">What Growth Percentiles Mean — per WHO/AAP Standards</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,pct:"3rd–10th",label:"May need monitoring",note:"Below average — discuss with pediatrician",color:"#F59E0B"},
            {x:170,pct:"10th–25th",label:"Lower range of normal",note:"Healthy if following consistent curve",color:"#10B981"},
            {x:330,pct:"25th–75th",label:"Average range",note:"Where most babies fall",color:"#10B981"},
            {x:490,pct:"75th–97th",label:"Above average",note:"Healthy if following consistent curve",color:"#10B981"},
          ].map((p,i)=>(
            <g key={i}>
              <rect x={p.x} y="5" width="145" height="78" rx="10" fill={p.color} opacity="0.06" stroke={p.color} strokeWidth="1"/>
              <text x={p.x+72} y="24" fontSize="12" fill={p.color} textAnchor="middle" fontWeight="800" fontFamily="system-ui">{p.pct}</text>
              <text x={p.x+72} y="42" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{p.label}</text>
              <text x={p.x+10} y="62" fontSize="7" fill="#64748B" fontFamily="system-ui">{p.note}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// CONTRACTION TIMER — SVGs
// ═══════════════════════════════════════════

export function ContractionRuleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The 5-1-1 Rule — When to Go to the Hospital (ACOG)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:30,num:"5",unit:"minutes apart",detail:"Consistent frequency between contractions",color:"#0F766E"},
            {x:230,num:"1",unit:"minute long",detail:"Each contraction lasts at least 60 seconds",color:"#0F766E"},
            {x:430,num:"1",unit:"hour sustained",detail:"Pattern maintains for at least one full hour",color:"#0F766E"},
          ].map((r,i)=>(
            <g key={i}>
              <circle cx={r.x+60} cy="28" r="22" fill={r.color} opacity="0.1" stroke={r.color} strokeWidth="2"/>
              <text x={r.x+60} y="34" fontSize="18" fill={r.color} textAnchor="middle" fontWeight="800" fontFamily="system-ui">{r.num}</text>
              <text x={r.x+60} y="60" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="700" fontFamily="system-ui">{r.unit}</text>
              <text x={r.x+60} y="75" fontSize="8" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{r.detail}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BraxtonVsRealSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Braxton Hicks vs Real Contractions (per Published Obstetric Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="100" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Braxton Hicks (Practice)</text>
          {[{y:36,t:"Irregular timing — no pattern"},{y:50,t:"Do not increase in intensity"},{y:64,t:"Stop with movement or hydration"},{y:78,t:"Usually felt in front only"},{y:92,t:"Not painful — just tight/uncomfortable"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="100" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Real Labor Contractions</text>
          {[{y:36,t:"Regular, predictable intervals"},{y:50,t:"Progressively stronger over time"},{y:64,t:"Do NOT stop with rest or water"},{y:78,t:"Radiate from back to front"},{y:92,t:"Increasingly painful"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// FETAL WEIGHT PERCENTILE — SVGs
// ═══════════════════════════════════════════

export function FetalWeightCategoriesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Fetal Weight Categories — ACOG Classification</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,cat:"SGA",full:"Small for Gestational Age",pct:"Below 10th percentile",action:"Additional monitoring recommended",color:"#F59E0B"},
            {x:220,cat:"AGA",full:"Appropriate for Gestational Age",pct:"10th–90th percentile",action:"Normal growth range",color:"#10B981"},
            {x:430,cat:"LGA",full:"Large for Gestational Age",pct:"Above 90th percentile",action:"Monitor for GDM, birth planning",color:"#F59E0B"},
          ].map((c,i)=>(
            <g key={i}>
              <rect x={c.x} y="5" width="195" height="80" rx="12" fill={c.color} opacity="0.05" stroke={c.color} strokeWidth="1.5"/>
              <text x={c.x+97} y="24" fontSize="14" fill={c.color} textAnchor="middle" fontWeight="800" fontFamily="system-ui">{c.cat}</text>
              <text x={c.x+97} y="40" fontSize="9" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{c.full}</text>
              <text x={c.x+97} y="56" fontSize="9" fill={c.color} textAnchor="middle" fontFamily="system-ui">{c.pct}</text>
              <text x={c.x+97} y="72" fontSize="7" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">{c.action}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// IVF DUE DATE — SVGs
// ═══════════════════════════════════════════

export function IVFDatingMethodsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">IVF Due Date Calculation — By Transfer Type</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,type:"Day 3 Embryo Transfer",formula:"Transfer date + 263 days",accuracy:"±3-5 days",color:"#8B5CF6"},
            {x:220,type:"Day 5 Embryo Transfer",formula:"Transfer date + 261 days",accuracy:"±3-5 days",color:"#8B5CF6"},
            {x:430,type:"Natural Conception (LMP)",formula:"LMP + 280 days",accuracy:"±14 days",color:"#F59E0B"},
          ].map((m,i)=>(
            <g key={i}>
              <rect x={m.x} y="5" width="195" height="78" rx="12" fill={m.color} opacity="0.05" stroke={m.color} strokeWidth="1.5"/>
              <text x={m.x+97} y="24" fontSize="10" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{m.type}</text>
              <text x={m.x+97} y="44" fontSize="11" fill="#334155" textAnchor="middle" fontWeight="600" fontFamily="system-ui">{m.formula}</text>
              <text x={m.x+97} y="62" fontSize="10" fill={m.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">Accuracy: {m.accuracy}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// OVULATION CALCULATOR — SVGs
// ═══════════════════════════════════════════

export function FertileWindowSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The Fertile Window — Per Published Reproductive Research</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="620" height="24" rx="12" fill="#F1F5F9"/>
          <rect x="280" y="20" width="150" height="24" fill="#EC4899" opacity="0.2"/>
          <rect x="400" y="20" width="30" height="24" fill="#EF4444" opacity="0.3"/>
          <text x="355" y="12" fontSize="9" fill="#EC4899" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Fertile window (~6 days)</text>
          <text x="415" y="12" fontSize="9" fill="#EF4444" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Ovulation</text>
          <text x="320" y="60" fontSize="8" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Day 9</text>
          <text x="415" y="60" fontSize="8" fill="#EF4444" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Day 14</text>
          <text x="10" y="60" fontSize="8" fill="#94A3B8" fontFamily="system-ui">Day 1 (period)</text>
          <text x="570" y="60" fontSize="8" fill="#94A3B8" fontFamily="system-ui">Day 28</text>
          <text x="320" y="75" fontSize="7" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Example: 28-day cycle. Adjusts for your actual cycle length.</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// ANXIETY VS STRESS — SVGs
// ═══════════════════════════════════════════

export function StressVsAnxietySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Stress vs Anxiety — Key Differences (per APA Definitions)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="100" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="12" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Stress (APA)</text>
          {[{y:36,t:"Has a clear external cause"},{y:50,t:"Resolves when trigger is removed"},{y:64,t:"Present-focused (\"this is hard\")"},{y:78,t:"Can be positive (eustress)"},{y:92,t:"Normal response — not a disorder"}].map((r,i)=>(
            <text key={i} x="25" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="100" rx="12" fill="#8B5CF6" opacity="0.05" stroke="#8B5CF6" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="12" fill="#7C3AED" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Anxiety (APA)</text>
          {[{y:36,t:"May have no clear cause"},{y:50,t:"Persists even without threat"},{y:64,t:"Future-focused (\"what if...\")"},{y:78,t:"Rarely productive"},{y:92,t:"Can become clinical disorder (DSM-5)"}].map((r,i)=>(
            <text key={i} x="345" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BMR VS TDEE — SVGs (reuses TDEEComponentsSVG)
// ═══════════════════════════════════════════

export function BMRvsTDEEVisualSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">BMR vs TDEE — What Each Number Means for Diet Planning</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="11" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">BMR — Never Eat Below This</text>
          <text x="160" y="42" fontSize="16" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">~1,600 cal</text>
          <text x="160" y="58" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Minimum for organ function</text>
          <text x="160" y="72" fontSize="8" fill="#DC2626" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Floor — not a diet target</text>
          <rect x="330" y="5" width="300" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">TDEE — Plan Your Diet From This</text>
          <text x="480" y="42" fontSize="16" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">~2,400 cal</text>
          <text x="480" y="58" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Total daily burn including activity</text>
          <text x="480" y="72" fontSize="8" fill="#059669" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Subtract 300-500 for fat loss</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// RESTING HEART RATE — SVGs
// ═══════════════════════════════════════════

export function HeartRateByAgeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Normal Resting Heart Rate by Age — AHA Guidelines</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 130" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {y:5,age:"Newborns (0-1 mo)",range:"100-160 bpm",w:320,color:"#EC4899"},
            {y:28,age:"Infants (1-12 mo)",range:"80-140 bpm",w:280,color:"#EC4899"},
            {y:51,age:"Children (1-10 yr)",range:"70-120 bpm",w:250,color:"#8B5CF6"},
            {y:74,age:"Teens (11-17 yr)",range:"60-100 bpm",w:200,color:"#3B82F6"},
            {y:97,age:"Adults (18+)",range:"60-100 bpm",w:200,color:"#10B981"},
            {y:120,age:"Athletes",range:"40-60 bpm",w:100,color:"#0F766E"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+14} fontSize="9" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.age}</text>
              <rect x="170" y={r.y} width={r.w*0.85} height="18" rx="4" fill={r.color} opacity="0.15" stroke={r.color} strokeWidth="1"/>
              <text x={175+r.w*0.85} y={r.y+13} fontSize="9" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.range}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// GFR BY AGE — SVGs
// ═══════════════════════════════════════════

export function GFRByAgeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Average GFR by Age Decade — Published Nephrology Data</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="218" y1="5" x2="218" y2="125" stroke="#EF4444" strokeWidth="2" strokeDasharray="6"/>
          <text x="223" y="12" fontSize="8" fill="#DC2626" fontWeight="700" fontFamily="system-ui">60 mL/min (CKD threshold per KDIGO)</text>
          {[
            {y:18,age:"Age 20-29",gfr:116,w:380,color:"#10B981"},
            {y:40,age:"Age 30-39",gfr:107,w:350,color:"#10B981"},
            {y:62,age:"Age 40-49",gfr:99,w:323,color:"#10B981"},
            {y:84,age:"Age 50-59",gfr:93,w:303,color:"#10B981"},
            {y:106,age:"Age 60-69",gfr:85,w:277,color:"#F59E0B"},
            {y:128,age:"Age 70+",gfr:75,w:245,color:"#F59E0B"},
          ].map((r,i)=>(
            <g key={i}>
              <text x="10" y={r.y+12} fontSize="9" fill="#334155" fontWeight="500" fontFamily="system-ui">{r.age}</text>
              <rect x="90" y={r.y} width={r.w*0.8} height="16" rx="4" fill={r.color} opacity="0.2" stroke={r.color} strokeWidth="1"/>
              <text x={95+r.w*0.8} y={r.y+12} fontSize="9" fill={r.color} fontWeight="700" fontFamily="system-ui">{r.gfr} mL/min avg</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// KETO MACROS — SVGs
// ═══════════════════════════════════════════

export function KetoMacroSplitSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Standard Keto Macro Ratios (per Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 70" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="420" height="44" rx="8" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="220" y="36" fontSize="13" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Fat: 70% (~155g on 2,000 cal)</text>
          <rect x="430" y="10" width="150" height="44" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="505" y="36" fontSize="12" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Protein: 25%</text>
          <rect x="580" y="10" width="50" height="44" rx="8" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
          <text x="605" y="36" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">5%</text>
          <text x="605" y="60" fontSize="8" fill="#059669" textAnchor="middle" fontFamily="system-ui">Carbs</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BMI VS BODY FAT — SVGs
// ═══════════════════════════════════════════

export function BMIvsBodyFatSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">BMI vs Body Fat — Side-by-Side Comparison (Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="300" height="110" rx="12" fill="#F59E0B" opacity="0.05" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="160" y="22" fontSize="12" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">BMI</text>
          {[{y:36,t:"Uses: height + weight only"},{y:50,t:"Misses: muscle vs fat distinction"},{y:64,t:"Accuracy: misclassifies ~54M Americans (JAMA)"},{y:78,t:"Cost: free, instant"},{y:92,t:"Best for: population screening"},{y:106,t:"Same categories for all ages/sexes"}].map((r,i)=>(
            <text key={i} x="20" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
          <rect x="330" y="5" width="300" height="110" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="480" y="22" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Body Fat %</text>
          {[{y:36,t:"Uses: measurements or scans"},{y:50,t:"Directly measures fat vs lean tissue"},{y:64,t:"Accuracy: ±1-4% depending on method"},{y:78,t:"Cost: free (tape) to $150 (DEXA)"},{y:92,t:"Best for: individual health assessment"},{y:106,t:"Separate ranges by age + sex (ACE)"}].map((r,i)=>(
            <text key={i} x="340" y={r.y} fontSize="8" fill="#64748B" fontFamily="system-ui">• {r.t}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// HOW STRESS AFFECTS BODY — SVGs
// ═══════════════════════════════════════════

export function StressBodyEffectsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How Chronic Stress Affects the Body — Published Research</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🧠",system:"Brain",effect:"Anxiety, depression, impaired memory",color:"#8B5CF6"},
            {x:140,icon:"🫀",system:"Heart",effect:"Elevated BP, inflammation, increased CVD risk",color:"#EF4444"},
            {x:280,icon:"🛡️",system:"Immune",effect:"Suppressed function, slower healing",color:"#F59E0B"},
            {x:420,icon:"🫃",system:"Digestive",effect:"IBS symptoms, acid reflux, appetite changes",color:"#10B981"},
            {x:550,icon:"😴",system:"Sleep",effect:"Insomnia, disrupted circadian rhythm",color:"#3B82F6"},
          ].map((s,i)=>(
            <g key={i}>
              <rect x={s.x} y="5" width="115" height="88" rx="10" fill={s.color} opacity="0.05" stroke={s.color} strokeWidth="1"/>
              <text x={s.x+57} y="26" fontSize="18" textAnchor="middle">{s.icon}</text>
              <text x={s.x+57} y="44" fontSize="10" fill={s.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{s.system}</text>
              <text x={s.x+8} y="60" fontSize="7" fill="#64748B" fontFamily="system-ui">{s.effect.substring(0,25)}</text>
              <text x={s.x+8} y="74" fontSize="7" fill="#64748B" fontFamily="system-ui">{s.effect.substring(25)}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PREGNANCY NUTRITION — SVGs
// ═══════════════════════════════════════════

export function PregnancyNutrientsSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">4 Most Commonly Deficient Pregnancy Nutrients (Published Research)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {x:10,icon:"🩸",nutrient:"Iron",need:"27mg/day",why:"50% blood volume increase",source:"Red meat, spinach, lentils",color:"#EF4444"},
            {x:170,icon:"🧠",nutrient:"DHA Omega-3",need:"200-300mg/day",why:"Fetal brain + eye development",source:"Salmon, sardines, algae oil",color:"#3B82F6"},
            {x:330,icon:"🧬",nutrient:"Choline",need:"450mg/day",why:"Neural tube + brain development",source:"Eggs (147mg each), liver alt.",color:"#8B5CF6"},
            {x:490,icon:"☀️",nutrient:"Vitamin D",need:"600 IU/day",why:"Bone + immune development",source:"Salmon, fortified milk, sun",color:"#F59E0B"},
          ].map((n,i)=>(
            <g key={i}>
              <rect x={n.x} y="5" width="145" height="80" rx="10" fill={n.color} opacity="0.05" stroke={n.color} strokeWidth="1"/>
              <text x={n.x+72} y="22" fontSize="14" textAnchor="middle">{n.icon}</text>
              <text x={n.x+72} y="38" fontSize="10" fill={n.color} textAnchor="middle" fontWeight="700" fontFamily="system-ui">{n.nutrient}: {n.need}</text>
              <text x={n.x+10} y="55" fontSize="7" fill="#64748B" fontFamily="system-ui">{n.why}</text>
              <text x={n.x+10} y="70" fontSize="7" fill="#334155" fontWeight="500" fontFamily="system-ui">{n.source}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PROTEIN GUIDE — SVGs
// ═══════════════════════════════════════════

export function ProteinRDAvsOptimalSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">RDA vs Optimal Protein — What Published Research Shows</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="200" height="80" rx="12" fill="#EF4444" opacity="0.05" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="110" y="22" fontSize="10" fill="#DC2626" textAnchor="middle" fontWeight="700" fontFamily="system-ui">RDA (Government minimum)</text>
          <text x="110" y="45" fontSize="18" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">0.8 g/kg</text>
          <text x="110" y="62" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">~56g for 154 lb person</text>
          <text x="110" y="76" fontSize="8" fill="#DC2626" textAnchor="middle" fontFamily="system-ui">Prevents deficiency only</text>
          <text x="310" y="45" fontSize="20" fill="#CBD5E1" textAnchor="middle">→</text>
          <rect x="370" y="5" width="260" height="80" rx="12" fill="#10B981" opacity="0.05" stroke="#10B981" strokeWidth="1.5"/>
          <text x="500" y="22" fontSize="10" fill="#059669" textAnchor="middle" fontWeight="700" fontFamily="system-ui">Optimal (Published research)</text>
          <text x="500" y="45" fontSize="18" fill="#334155" textAnchor="middle" fontWeight="800" fontFamily="system-ui">1.2–2.0 g/kg</text>
          <text x="500" y="62" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">~84-140g for 154 lb person</text>
          <text x="500" y="76" fontSize="8" fill="#059669" textAnchor="middle" fontFamily="system-ui">Muscle, satiety, body composition</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// TDEE COMPLETE GUIDE — SVGs
// ═══════════════════════════════════════════

export function NEATvExerciseSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">NEAT vs Exercise — Where Your Calories Actually Go (Published Data)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="5" width="380" height="35" rx="8" fill="#0F766E" opacity="0.12" stroke="#0F766E" strokeWidth="1"/>
          <text x="200" y="27" fontSize="11" fill="#0F766E" textAnchor="middle" fontWeight="700" fontFamily="system-ui">BMR: 60-70% of daily burn (breathing, organs, brain)</text>
          <rect x="10" y="45" width="240" height="35" rx="8" fill="#F59E0B" opacity="0.12" stroke="#F59E0B" strokeWidth="1"/>
          <text x="130" y="67" fontSize="11" fill="#B45309" textAnchor="middle" fontWeight="700" fontFamily="system-ui">NEAT: 15-20% (walking, fidgeting, standing)</text>
          <rect x="260" y="45" width="70" height="35" rx="8" fill="#8B5CF6" opacity="0.12" stroke="#8B5CF6" strokeWidth="1"/>
          <text x="295" y="67" fontSize="9" fill="#7C3AED" textAnchor="middle" fontWeight="600" fontFamily="system-ui">TEF 10%</text>
          <rect x="340" y="45" width="50" height="35" rx="8" fill="#EC4899" opacity="0.12" stroke="#EC4899" strokeWidth="1"/>
          <text x="365" y="67" fontSize="9" fill="#BE185D" textAnchor="middle" fontWeight="600" fontFamily="system-ui">Gym</text>
          <text x="500" y="30" fontSize="9" fill="#64748B" fontFamily="system-ui">← NEAT often burns more than</text>
          <text x="500" y="67" fontSize="9" fill="#64748B" fontFamily="system-ui">your gym session (Pontzer 2021)</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 3 — BMI TEENS additional SVGs
// ═══════════════════════════════════════════

export function CDCPercentileTableSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">CDC Healthy BMI Ranges by Age — What Normal Actually Looks Like</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 660 260" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="10" y="10" width="640" height="30" rx="6" fill="#F0FDFA"/>
          <text x="90" y="30" fontSize="11" fill="#0F766E" fontWeight="700" fontFamily="system-ui">Age</text>
          <text x="210" y="30" fontSize="11" fill="#0F766E" fontWeight="700" fontFamily="system-ui">Girls — Healthy BMI Range</text>
          <text x="430" y="30" fontSize="11" fill="#0F766E" fontWeight="700" fontFamily="system-ui">Boys — Healthy BMI Range</text>

          {/* Data rows */}
          {[
            { age: "12 years", g: "14.5 – 22.6", b: "14.9 – 23.0", y: 60 },
            { age: "13 years", g: "15.0 – 23.5", b: "15.5 – 24.0", y: 90 },
            { age: "14 years", g: "15.5 – 24.5", b: "16.1 – 24.7", y: 120 },
            { age: "15 years", g: "16.1 – 25.2", b: "16.6 – 25.2", y: 150 },
            { age: "16 years", g: "16.7 – 26.0", b: "17.1 – 25.8", y: 180 },
            { age: "17 years", g: "17.1 – 27.1", b: "17.3 – 26.5", y: 210 },
          ].map((row, i) => (
            <g key={i}>
              <rect x="10" y={row.y - 18} width="640" height="28" rx="4" fill={i % 2 === 0 ? "#F8FAFC" : "#FFFFFF"} stroke="#E2E8F0" strokeWidth="0.5"/>
              <text x="90" y={row.y} fontSize="11" fill="#334155" fontFamily="system-ui" fontWeight="600">{row.age}</text>
              <rect x="200" y={row.y - 12} width="200" height="18" rx="9" fill="#D1FAE5"/>
              <text x="300" y={row.y} fontSize="11" fill="#065F46" fontFamily="system-ui" textAnchor="middle" fontWeight="600">{row.g}</text>
              <rect x="420" y={row.y - 12} width="200" height="18" rx="9" fill="#DBEAFE"/>
              <text x="520" y={row.y} fontSize="11" fill="#1E40AF" fontFamily="system-ui" textAnchor="middle" fontWeight="600">{row.b}</text>
            </g>
          ))}
          <text x="330" y="250" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Source: CDC BMI-for-age growth charts, 2000. Ranges represent 5th–85th percentile (healthy weight).</text>
        </svg>
      </div>
    </div>
  );
}

export function BMIShiftWithAgeSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why the Same BMI Means Different Things at Different Ages</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="320" y="22" fontSize="12" fill="#334155" fontWeight="700" fontFamily="system-ui" textAnchor="middle">BMI 22 — Three Different Girls, Three Different Interpretations</text>

          {[
            { age: "Age 12", pct: "89th percentile", cat: "Overweight", color: "#F59E0B", bg: "#FEF3C7", x: 30 },
            { age: "Age 15", pct: "58th percentile", cat: "Healthy Weight", color: "#10B981", bg: "#D1FAE5", x: 240 },
            { age: "Age 18", pct: "41st percentile", cat: "Healthy Weight", color: "#10B981", bg: "#D1FAE5", x: 450 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="38" width="160" height="140" rx="12" fill={item.bg} stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 80} y="62" fontSize="13" fill={item.color} fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.age}</text>
              <text x={item.x + 80} y="88" fontSize="22" fill="#1E293B" fontWeight="900" fontFamily="system-ui" textAnchor="middle">BMI 22</text>
              <rect x={item.x + 20} y="100" width="120" height="22" rx="11" fill={item.color} opacity="0.2"/>
              <text x={item.x + 80} y="115" fontSize="10" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.pct}</text>
              <rect x={item.x + 15} y="130" width="130" height="26" rx="13" fill={item.color}/>
              <text x={item.x + 80} y="147" fontSize="11" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.cat}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 3 — STEAK additional SVGs
// ═══════════════════════════════════════════

export function SteakDonenessGuardSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Steak Internal Temperature: Safe vs. Unsafe During Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Rare", temp: "120–130°F", safe: false, x: 20, color: "#EF4444" },
            { label: "Medium-Rare", temp: "130–140°F", safe: false, x: 148, color: "#F97316" },
            { label: "Medium", temp: "140–150°F", safe: false, x: 276, color: "#EAB308" },
            { label: "Med-Well", temp: "150–160°F", safe: false, x: 404, color: "#F59E0B" },
            { label: "Well-Done ✓", temp: "160°F+", safe: true, x: 490, color: "#10B981", wide: true },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="20" width={item.wide ? 130 : 118} height="140" rx="10"
                fill={item.safe ? "#D1FAE5" : "#FEF2F2"}
                stroke={item.color} strokeWidth={item.safe ? "2.5" : "1.5"}/>
              <text x={item.x + (item.wide ? 65 : 59)} y="46" fontSize="10" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + (item.wide ? 65 : 59)} y="70" fontSize="12" fill="#1E293B" fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.temp}</text>
              <rect x={item.x + 15} y="82" width={item.wide ? 100 : 88} height="24" rx="12" fill={item.color}/>
              <text x={item.x + (item.wide ? 65 : 59)} y="98" fontSize="11" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.safe ? "✅ SAFE" : "❌ AVOID"}</text>
              {item.safe && <text x={item.x + 65} y="140" fontSize="9" fill="#065F46" fontFamily="system-ui" textAnchor="middle">Use meat thermometer</text>}
              {!item.safe && <text x={item.x + 59} y="140" fontSize="9" fill="#DC2626" fontFamily="system-ui" textAnchor="middle">Toxoplasma risk</text>}
            </g>
          ))}
          <text x="320" y="178" fontSize="9" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Source: FDA, USDA minimum internal cooking temperatures for beef during pregnancy</text>
        </svg>
      </div>
    </div>
  );
}

export function SteakNutrientsPregnancySVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Well-Done Steak Is Worth It: Key Nutrients Per 3oz Serving</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Protein", value: "27g", pct: 90, desc: "Complete amino acids for fetal tissue", color: "#0F766E" },
            { label: "Heme Iron", value: "3mg", pct: 60, desc: "Most bioavailable iron form (15–35% absorbed)", color: "#7C3AED" },
            { label: "Vitamin B12", value: "1mcg", pct: 50, desc: "Fetal nervous system development", color: "#2563EB" },
            { label: "Zinc", value: "6mg", pct: 75, desc: "Immune function + fetal growth", color: "#D97706" },
            { label: "Choline", value: "80mg", pct: 40, desc: "Fetal brain development + memory", color: "#DC2626" },
          ].map((item, i) => (
            <g key={i}>
              <text x="10" y={30 + i * 38} fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{item.label}</text>
              <text x="100" y={30 + i * 38} fontSize="12" fill={item.color} fontWeight="800" fontFamily="system-ui">{item.value}</text>
              <rect x="155" y={15 + i * 38} width="300" height="16" rx="8" fill="#F1F5F9"/>
              <rect x="155" y={15 + i * 38} width={item.pct * 3} height="16" rx="8" fill={item.color} opacity="0.8"/>
              <text x="465" y={29 + i * 38} fontSize="9" fill="#64748B" fontFamily="system-ui">{item.desc}</text>
            </g>
          ))}
          <text x="320" y="210" fontSize="9" fill="#94A3B8" textAnchor="middle" fontFamily="system-ui">Values per 3oz (85g) cooked beef. Sources: NIH, USDA FoodData Central</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 3 — PRE-MADE SALADS additional SVGs
// ═══════════════════════════════════════════

export function ListeriaGrowthChartSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Cold Storage Does Not Protect You: Listeria vs. Other Bacteria</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 210" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="320" y="22" fontSize="11" fill="#334155" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Bacterial Growth Rate by Temperature</text>

          {[
            { label: "Listeria", fridge: "GROWS SLOWLY", room: "GROWS FAST", freeze: "Dormant", fridgeColor: "#EF4444", roomColor: "#EF4444" },
            { label: "Salmonella", fridge: "Mostly Stopped", room: "GROWS FAST", freeze: "Dormant", fridgeColor: "#10B981", roomColor: "#EF4444" },
            { label: "E. coli", fridge: "Mostly Stopped", room: "GROWS FAST", freeze: "Dormant", fridgeColor: "#10B981", roomColor: "#EF4444" },
          ].map((item, i) => (
            <g key={i}>
              <text x="10" y={60 + i * 50} fontSize="12" fill="#334155" fontWeight="700" fontFamily="system-ui">{item.label}</text>
              <rect x="120" y={44 + i * 50} width="150" height="26" rx="13" fill={item.fridgeColor === "#EF4444" ? "#FEE2E2" : "#D1FAE5"}/>
              <text x="195" y={62 + i * 50} fontSize="10" fill={item.fridgeColor} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.fridge}</text>
              <rect x="290" y={44 + i * 50} width="150" height="26" rx="13" fill="#FEE2E2"/>
              <text x="365" y={62 + i * 50} fontSize="10" fill="#EF4444" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.room}</text>
              <rect x="460" y={44 + i * 50} width="150" height="26" rx="13" fill="#F1F5F9"/>
              <text x="535" y={62 + i * 50} fontSize="10" fill="#64748B" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.freeze}</text>
            </g>
          ))}

          <text x="195" y="175" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">35–40°F (Fridge)</text>
          <text x="365" y="175" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">68–77°F (Room)</text>
          <text x="535" y="175" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">Below 32°F (Freezer)</text>

          <rect x="10" y="185" width="620" height="20" rx="6" fill="#FEF2F2"/>
          <text x="320" y="199" fontSize="10" fill="#DC2626" fontWeight="700" textAnchor="middle" fontFamily="system-ui">⚠ Listeria is the only common foodborne pathogen that multiplies in your refrigerator</text>
        </svg>
      </div>
    </div>
  );
}

export function SafeSaladBuildSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe Salad Building During Pregnancy: Green Light vs. Red Light Ingredients</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Safe column */}
          <rect x="10" y="10" width="295" height="200" rx="12" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="1.5"/>
          <text x="158" y="34" fontSize="12" fill="#0F766E" fontWeight="800" fontFamily="system-ui" textAnchor="middle">✅ Safe Ingredients</text>
          {["Whole head lettuce (washed yourself)", "Romaine, spinach, arugula", "Bell peppers, cucumbers, tomatoes", "Hard-boiled eggs (made at home)", "Grilled chicken (cooked to 165°F)", "Rinsed canned beans", "Pasteurized cheese"].map((item, i) => (
            <text key={i} x="22" y={52 + i * 22} fontSize="10" fill="#064E3B" fontFamily="system-ui">• {item}</text>
          ))}

          {/* Avoid column */}
          <rect x="335" y="10" width="295" height="200" rx="12" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.5"/>
          <text x="483" y="34" fontSize="12" fill="#BE123C" fontWeight="800" fontFamily="system-ui" textAnchor="middle">❌ Avoid During Pregnancy</text>
          {["Pre-made deli salads (all types)", "Salad bar items", "Pre-packaged salad kits", "Bagged spring mix / Caesar kits", "Any pre-cut vegetables", "Deli meats (ham, turkey, salami)", "Soft cheeses (brie, feta, camembert)"].map((item, i) => (
            <text key={i} x="347" y={52 + i * 22} fontSize="10" fill="#9F1239" fontFamily="system-ui">• {item}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 3 — BURNOUT QUIZ additional SVGs
// ═══════════════════════════════════════════

export function BurnoutVsStressVsDepressionSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Burnout vs. Stress vs. Depression: Key Differences</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 660 230" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            {
              label: "Stress", color: "#F59E0B", bg: "#FFFBEB",
              traits: ["Acute, time-limited", "Caused by too much", "Resolves when stressor gone", "Energy: overloaded but intact"],
              x: 10
            },
            {
              label: "Burnout", color: "#EF4444", bg: "#FFF1F2",
              traits: ["Chronic, building over months", "Caused by too little return", "Tied to work context", "Energy: depleted, empty"],
              x: 230
            },
            {
              label: "Depression", color: "#7C3AED", bg: "#F5F3FF",
              traits: ["Pervasive, context-free", "Affects all life areas", "Persists on vacation too", "Energy: globally suppressed"],
              x: 450
            }
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="200" height="210" rx="12" fill={item.bg} stroke={item.color} strokeWidth="1.5"/>
              <rect x={item.x} y="10" width="200" height="36" rx="12" fill={item.color}/>
              <rect x={item.x} y="34" width="200" height="12" fill={item.color}/>
              <text x={item.x + 100} y="34" fontSize="13" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              {item.traits.map((t, j) => (
                <text key={j} x={item.x + 14} y={68 + j * 36} fontSize="10" fill="#334155" fontFamily="system-ui">• {t}</text>
              ))}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function BurnoutSixDriversSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The Six Organizational Drivers of Burnout (Leiter & Maslach, 1999)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Workload", desc: "Chronic overload, unrealistic pace", color: "#EF4444", x: 10, y: 10 },
            { label: "Control", desc: "Micromanagement, no autonomy", color: "#F97316", x: 220, y: 10 },
            { label: "Reward", desc: "Insufficient pay or recognition", color: "#EAB308", x: 430, y: 10 },
            { label: "Community", desc: "Isolation, conflict, no support", color: "#10B981", x: 10, y: 110 },
            { label: "Fairness", desc: "Inequity in treatment or opportunity", color: "#3B82F6", x: 220, y: 110 },
            { label: "Values", desc: "Ethics vs. what org actually does", color: "#8B5CF6", x: 430, y: 110 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y={item.y} width="195" height="80" rx="10" fill="white" stroke={item.color} strokeWidth="2"/>
              <rect x={item.x} y={item.y} width="195" height="28" rx="10" fill={item.color}/>
              <rect x={item.x} y={item.y + 16} width="195" height="12" fill={item.color}/>
              <text x={item.x + 98} y={item.y + 19} fontSize="11" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 10} y={item.y + 52} fontSize="10" fill="#334155" fontFamily="system-ui">{item.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 3 — TDEE additional SVGs
// ═══════════════════════════════════════════

export function TDEEComponentsBreakdownSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">What Makes Up Your TDEE: The Four Components</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* TDEE bar */}
          <text x="320" y="20" fontSize="12" fill="#334155" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Your TDEE = Sum of Four Components</text>

          {[
            { label: "BMR", pct: "60–70%", desc: "Breathing, circulation, staying alive", color: "#0F766E", width: 258 },
            { label: "NEAT", pct: "15–30%", desc: "All movement that isn't exercise", color: "#7C3AED", width: 128 },
            { label: "EAT", pct: "5–15%", desc: "Intentional workouts", color: "#2563EB", width: 64 },
            { label: "TEF", pct: "~10%", desc: "Digesting food", color: "#D97706", width: 44 },
          ].reduce((acc, item) => {
            const x = acc.x;
            acc.items.push({ ...item, x });
            acc.x += item.width + 6;
            return acc;
          }, { x: 20, items: [] as {label:string;pct:string;desc:string;color:string;width:number;x:number}[] }).items.map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="38" width={item.width} height="50" rx="6" fill={item.color}/>
              <text x={item.x + item.width / 2} y="60" fontSize={item.width > 60 ? "12" : "9"} fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + item.width / 2} y="78" fontSize={item.width > 60 ? "11" : "8"} fill="white" fontFamily="system-ui" textAnchor="middle">{item.pct}</text>
              <text x={item.x + item.width / 2} y="110" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.desc}</text>
            </g>
          ))}

          <text x="320" y="165" fontSize="10" fill="#64748B" textAnchor="middle" fontFamily="system-ui">NEAT varies most between individuals — a nurse vs. desk worker can differ by 500+ cal/day on identical exercise routines</text>
        </svg>
      </div>
    </div>
  );
}

export function CalibrationMethodSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The 2-Week Calibration Method: More Accurate Than Any Formula</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 185" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { step: "1", label: "Get calculator estimate", desc: "Use Mifflin-St Jeor TDEE as starting point", color: "#0F766E", x: 10 },
            { step: "2", label: "Eat at that target 2 weeks", desc: "Track intake, weigh daily (same conditions)", color: "#7C3AED", x: 170 },
            { step: "3", label: "Compare week 1 vs week 2", desc: "Average weight, not daily readings", color: "#2563EB", x: 330 },
            { step: "4", label: "Adjust by 100–200 cal", desc: "Based on whether weight moved", color: "#D97706", x: 490 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="20" width="140" height="145" rx="12" fill="white" stroke={item.color} strokeWidth="1.5"/>
              <circle cx={item.x + 70} cy="52" r="22" fill={item.color}/>
              <text x={item.x + 70} y="58" fontSize="18" fill="white" fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.step}</text>
              <text x={item.x + 70} y="90" fontSize="10" fill="#1E293B" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label.split(' ').slice(0, 2).join(' ')}</text>
              <text x={item.x + 70} y="105" fontSize="10" fill="#1E293B" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label.split(' ').slice(2).join(' ')}</text>
              <text x={item.x + 70} y="128" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.desc.split(' ').slice(0, 3).join(' ')}</text>
              <text x={item.x + 70} y="143" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.desc.split(' ').slice(3).join(' ')}</text>
              {i < 3 && <text x={item.x + 148} y="100" fontSize="18" fill="#94A3B8" fontFamily="system-ui">→</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function DeficitSurplusRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How to Set Calorie Targets From Your TDEE</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Aggressive Cut", range: "−750+ cal", result: "Muscle loss risk, unsustainable", color: "#EF4444", bg: "#FEF2F2", x: 10 },
            { label: "Fat Loss", range: "−300 to −500 cal", result: "~0.5–1 lb/week, sustainable", color: "#10B981", bg: "#ECFDF5", x: 170 },
            { label: "Maintenance", range: "At TDEE ±100", result: "Weight stable over time", color: "#3B82F6", bg: "#EFF6FF", x: 330 },
            { label: "Lean Bulk", range: "+250 to +500 cal", result: "Muscle gain, minimal fat", color: "#8B5CF6", bg: "#F5F3FF", x: 490 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="145" height="135" rx="10" fill={item.bg} stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 73} y="36" fontSize="11" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 73} y="58" fontSize="13" fill="#1E293B" fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.range.split(' ')[0]}</text>
              <text x={item.x + 73} y="74" fontSize="13" fill="#1E293B" fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.range.split(' ').slice(1).join(' ')}</text>
              <rect x={item.x + 10} y="84" width="125" height="1" fill={item.color} opacity="0.3"/>
              <text x={item.x + 73} y="105" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.result.split(',')[0]}</text>
              <text x={item.x + 73} y="120" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.result.split(',').slice(1).join(',')}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 4 — COFFEE additional SVGs
// ═══════════════════════════════════════════

export function CaffeineBudgetExamplesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Daily Caffeine Budget: 200mg Limit in Practice</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Under budget", items: "Home coffee (130) + green tea (30) + dark choc (15)", total: "175mg", color: "#10B981", bg: "#ECFDF5", x: 10 },
            { label: "Under budget", items: "2 black teas (80) + 1 latte (63)", total: "143mg", color: "#10B981", bg: "#ECFDF5", x: 220 },
            { label: "OVER budget", items: "Starbucks tall drip (235) + nothing else", total: "235mg", color: "#EF4444", bg: "#FEF2F2", x: 430 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="195" height="150" rx="12" fill={item.bg} stroke={item.color} strokeWidth="1.5"/>
              <rect x={item.x} y="10" width="195" height="30" rx="12" fill={item.color}/>
              <rect x={item.x} y="28" width="195" height="12" fill={item.color}/>
              <text x={item.x + 98} y="30" fontSize="10" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 98} y="62" fontSize="18" fill={item.color} fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.total}</text>
              <text x={item.x + 10} y="85" fontSize="9" fill="#475569" fontFamily="system-ui">{item.items.split(' + ')[0]}</text>
              <text x={item.x + 10} y="100" fontSize="9" fill="#475569" fontFamily="system-ui">{item.items.split(' + ')[1] ? '+ ' + item.items.split(' + ')[1] : ''}</text>
              <text x={item.x + 10} y="115" fontSize="9" fill="#475569" fontFamily="system-ui">{item.items.split(' + ')[2] ? '+ ' + item.items.split(' + ')[2] : ''}</text>
              <rect x={item.x + 20} y="125" width="155" height="1" fill={item.color} opacity="0.3"/>
              <text x={item.x + 98} y="145" fontSize="9" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.total === "235mg" ? "Already over before anything else" : "Room for small extras"}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 4 — SUSHI additional SVG
// ═══════════════════════════════════════════

export function CookedVsRawSushiSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Safe vs. Unsafe Sushi During Pregnancy at a Glance</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="295" height="200" rx="12" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.5"/>
          <text x="158" y="34" fontSize="12" fill="#065F46" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Cooked = Considered Safe</text>
          {["Shrimp tempura roll", "California roll (imitation crab)", "Eel (unagi) roll — always grilled", "Vegetable roll (cucumber, avocado)", "Cooked salmon roll", "Egg (tamago) roll"].map((item, i) => (
            <text key={i} x="24" y={56 + i * 24} fontSize="10" fill="#064E3B" fontFamily="system-ui">✅ {item}</text>
          ))}

          <rect x="335" y="10" width="295" height="200" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
          <text x="483" y="34" fontSize="12" fill="#991B1B" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Raw = Avoid</text>
          {["Raw tuna roll", "Sashimi (any fish)", "Poke bowl (raw fish)", "Rainbow roll (raw fish on top)", "Spicy tuna roll (raw tuna)", "Any nigiri with raw fish"].map((item, i) => (
            <text key={i} x="349" y={56 + i * 24} fontSize="10" fill="#7F1D1D" fontFamily="system-ui">❌ {item}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 4 — SALMON additional SVG
// ═══════════════════════════════════════════

export function SalmonDHAComparisonSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">DHA Content: Salmon vs. Other Sources</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="320" y="20" fontSize="10" fill="#64748B" fontFamily="system-ui" textAnchor="middle">mg DHA per serving (pregnancy minimum: 200-300mg/day)</text>
          {[
            { label: "Salmon (3 oz)", value: 1240, color: "#0F766E", y: 38 },
            { label: "Sardines (3 oz)", value: 740, color: "#2563EB", y: 72 },
            { label: "DHA supplement", value: 250, color: "#7C3AED", y: 106 },
            { label: "Shrimp (3 oz)", value: 120, color: "#D97706", y: 140 },
            { label: "Chicken (3 oz)", value: 15, color: "#94A3B8", y: 174 },
          ].map((item, i) => (
            <g key={i}>
              <text x="10" y={item.y + 12} fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui">{item.label}</text>
              <rect x="160" y={item.y} width={Math.max(item.value / 4, 3)} height="22" rx="4" fill={item.color} opacity="0.8"/>
              <text x={165 + Math.max(item.value / 4, 3)} y={item.y + 15} fontSize="11" fill={item.color} fontWeight="800" fontFamily="system-ui">{item.value}mg</text>
            </g>
          ))}
          <line x1="210" y1="30" x2="210" y2="190" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4,3"/>
          <text x="213" y="193" fontSize="8" fill="#EF4444" fontFamily="system-ui">Min daily need</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 4 — SOFT CHEESE additional SVG
// ═══════════════════════════════════════════

export function CheeseDecisionFlowSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Can I Eat This Cheese? Quick Decision Flow</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Step 1 */}
          <rect x="10" y="60" width="130" height="60" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
          <text x="75" y="85" fontSize="10" fill="#1E40AF" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Is it a HARD cheese?</text>
          <text x="75" y="100" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">(cheddar, parmesan...)</text>

          {/* Arrow YES to safe */}
          <line x1="140" y1="70" x2="180" y2="40" stroke="#10B981" strokeWidth="1.5"/>
          <text x="155" y="50" fontSize="9" fill="#10B981" fontWeight="700" fontFamily="system-ui">YES</text>
          <rect x="180" y="20" width="110" height="40" rx="20" fill="#10B981"/>
          <text x="235" y="44" fontSize="11" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">SAFE</text>

          {/* Arrow NO */}
          <line x1="140" y1="100" x2="180" y2="120" stroke="#64748B" strokeWidth="1.5"/>
          <text x="152" y="118" fontSize="9" fill="#64748B" fontWeight="700" fontFamily="system-ui">NO</text>

          {/* Step 2 */}
          <rect x="180" y="90" width="155" height="60" rx="10" fill="#FFF7ED" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="258" y="113" fontSize="10" fill="#92400E" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Does the label say</text>
          <text x="258" y="128" fontSize="10" fill="#92400E" fontWeight="700" fontFamily="system-ui" textAnchor="middle">&quot;pasteurized milk&quot;?</text>

          {/* Arrow YES */}
          <line x1="335" y1="100" x2="380" y2="70" stroke="#10B981" strokeWidth="1.5"/>
          <text x="352" y="78" fontSize="9" fill="#10B981" fontWeight="700" fontFamily="system-ui">YES</text>
          <rect x="380" y="50" width="110" height="40" rx="20" fill="#10B981"/>
          <text x="435" y="74" fontSize="11" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">SAFE</text>

          {/* Arrow NO */}
          <line x1="335" y1="130" x2="380" y2="150" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="350" y="148" fontSize="9" fill="#EF4444" fontWeight="700" fontFamily="system-ui">NO / UNSURE</text>
          <rect x="380" y="135" width="110" height="40" rx="20" fill="#EF4444"/>
          <text x="435" y="159" fontSize="11" fill="white" fontWeight="800" fontFamily="system-ui" textAnchor="middle">AVOID</text>

          <text x="540" y="75" fontSize="9" fill="#065F46" fontFamily="system-ui">Pasteurized soft cheese</text>
          <text x="540" y="88" fontSize="9" fill="#065F46" fontFamily="system-ui">carries minimal risk</text>
          <text x="540" y="160" fontSize="9" fill="#991B1B" fontFamily="system-ui">Unpasteurized = Listeria</text>
          <text x="540" y="173" fontSize="9" fill="#991B1B" fontFamily="system-ui">risk during pregnancy</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 4 — MACRO CALCULATOR additional SVGs
// ═══════════════════════════════════════════

export function MacroMistakesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Four Common Macro Mistakes That Sabotage Results</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { num: "1", label: "Ratio obsession", fix: "Calories first, then macros", color: "#EF4444", x: 10 },
            { num: "2", label: "Fear of fat", fix: "Keep fat at 20-35% for hormones", color: "#F59E0B", x: 170 },
            { num: "3", label: "Carb-cutting without reason", fix: "Active people need 30%+ carbs", color: "#3B82F6", x: 330 },
            { num: "4", label: "Never recalculating", fix: "Redo every 10-15 lbs lost", color: "#8B5CF6", x: 490 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="145" height="155" rx="10" fill="white" stroke={item.color} strokeWidth="1.5"/>
              <circle cx={item.x + 73} cy="42" r="20" fill={item.color}/>
              <text x={item.x + 73} y="48" fontSize="16" fill="white" fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.num}</text>
              <text x={item.x + 73} y="82" fontSize="10" fill="#1E293B" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <rect x={item.x + 10} y="92" width="125" height="1" fill={item.color} opacity="0.3"/>
              <text x={item.x + 73} y="115" fontSize="9" fill="#10B981" fontWeight="600" fontFamily="system-ui" textAnchor="middle">Fix:</text>
              <text x={item.x + 73} y="132" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.fix.split(' ').slice(0, 3).join(' ')}</text>
              <text x={item.x + 73} y="147" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.fix.split(' ').slice(3).join(' ')}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProteinNeedsByGoalSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">How Much Protein You Actually Need (by Goal)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 170" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Sedentary (RDA minimum)", range: "0.8 g/kg", example: "64g for 80kg person", width: 80, color: "#94A3B8", y: 15 },
            { label: "Active / resistance training", range: "1.6–2.2 g/kg", example: "128–176g for 80kg person", width: 200, color: "#3B82F6", y: 55 },
            { label: "Cutting (calorie deficit)", range: "2.0–2.4 g/kg", example: "160–192g for 80kg person", width: 230, color: "#0F766E", y: 95 },
            { label: "Aggressive cut (contest prep)", range: "2.3–3.1 g/kg", example: "184–248g for 80kg person", width: 280, color: "#7C3AED", y: 135 },
          ].map((item, i) => (
            <g key={i}>
              <text x="10" y={item.y + 14} fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui">{item.label}</text>
              <rect x="220" y={item.y} width={item.width} height="24" rx="4" fill={item.color} opacity="0.2"/>
              <rect x="220" y={item.y} width={item.width} height="24" rx="4" fill="none" stroke={item.color} strokeWidth="1.5"/>
              <text x={225 + item.width / 2} y={item.y + 16} fontSize="11" fill={item.color} fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.range}</text>
              <text x={235 + item.width} y={item.y + 16} fontSize="9" fill="#64748B" fontFamily="system-ui">{item.example}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 5 — HCG LEVELS additional SVGs
// ═══════════════════════════════════════════

export function HCGPeakTimelineSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">HCG Trajectory: Rise, Peak, and Decline Through Pregnancy</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Weeks 3-6", desc: "Rapid doubling every 48-72h", color: "#10B981", x: 10, height: 40 },
            { label: "Weeks 7-8", desc: "Doubling slows to 72-96h", color: "#3B82F6", x: 140, height: 70 },
            { label: "Weeks 9-11", desc: "Peak: 68K-680K mIU/mL", color: "#7C3AED", x: 270, height: 110 },
            { label: "Weeks 12-16", desc: "Declining — this is normal", color: "#F59E0B", x: 400, height: 65 },
            { label: "Weeks 17-40", desc: "Stable at low levels", color: "#94A3B8", x: 530, height: 35 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y={130 - item.height} width="110" height={item.height} rx="6" fill={item.color} opacity="0.15"/>
              <rect x={item.x} y={130 - item.height} width="110" height={item.height} rx="6" fill="none" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 55} y={142} fontSize="9" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 55} y={155} fontSize="8" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.desc}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 5 — CONTRACTION TIMER additional SVG
// ═══════════════════════════════════════════

export function FiveOneOneRuleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">The 5-1-1 Rule: When to Go to the Hospital</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { num: "5", label: "minutes apart", desc: "Contractions every 5 min or closer", color: "#0F766E", x: 30 },
            { num: "1", label: "minute long", desc: "Each contraction lasts 60+ seconds", color: "#2563EB", x: 240 },
            { num: "1", label: "hour sustained", desc: "Pattern holds for at least 1 hour", color: "#7C3AED", x: 450 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="160" height="120" rx="12" fill="white" stroke={item.color} strokeWidth="2"/>
              <circle cx={item.x + 80} cy="48" r="26" fill={item.color}/>
              <text x={item.x + 80} y="56" fontSize="24" fill="white" fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.num}</text>
              <text x={item.x + 80} y="92" fontSize="11" fill="#1E293B" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 80} y="112" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.desc}</text>
              {i < 2 && <text x={item.x + 198} y="70" fontSize="24" fill="#CBD5E1" fontFamily="system-ui">+</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 5 — ADHD additional SVG
// ═══════════════════════════════════════════

export function ASRSScoreRangesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">ASRS Part A Score Interpretation</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { range: "0-13", label: "Low probability", action: "No evaluation needed", color: "#10B981", bg: "#ECFDF5", x: 10 },
            { range: "14-21", label: "Moderate probability", action: "Consider clinical evaluation", color: "#F59E0B", bg: "#FFFBEB", x: 220 },
            { range: "22-24", label: "High probability", action: "Schedule ADHD evaluation", color: "#EF4444", bg: "#FEF2F2", x: 430 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="195" height="95" rx="10" fill={item.bg} stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 98} y="36" fontSize="18" fill={item.color} fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.range}</text>
              <text x={item.x + 98} y="58" fontSize="11" fill="#334155" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 98} y="82" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.action}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 5 — ANXIETY additional SVG
// ═══════════════════════════════════════════

export function GAD7SeverityScaleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">GAD-7 Score Severity Scale</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { range: "0-4", label: "Minimal", color: "#10B981", x: 10, width: 130 },
            { range: "5-9", label: "Mild", color: "#84CC16", x: 148, width: 140 },
            { range: "10-14", label: "Moderate", color: "#F59E0B", x: 296, width: 145 },
            { range: "15-21", label: "Severe", color: "#EF4444", x: 449, width: 180 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width={item.width} height="60" rx="8" fill={item.color} opacity="0.12" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + item.width / 2} y="35" fontSize="14" fill={item.color} fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.range}</text>
              <text x={item.x + item.width / 2} y="55" fontSize="10" fill="#334155" fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
            </g>
          ))}
          <line x1="367" y1="75" x2="367" y2="82" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="367" y="90" fontSize="8" fill="#EF4444" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Score 10+ = professional evaluation recommended</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// BATCH 5 — POSTPARTUM additional SVG
// ═══════════════════════════════════════════

export function PPDVsBabyBluesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Baby Blues vs. Postpartum Depression: Key Differences</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 190" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="295" height="170" rx="12" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5"/>
          <text x="158" y="34" fontSize="12" fill="#1E40AF" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Baby Blues (Normal)</text>
          {["Affects 50-80% of new mothers", "Starts 2-5 days after delivery", "Resolves within 2 weeks", "Mood swings, tearfulness, mild anxiety", "Does not impair daily functioning", "No treatment needed"].map((item, i) => (
            <text key={i} x="24" y={54 + i * 22} fontSize="10" fill="#1E3A5F" fontFamily="system-ui">{item}</text>
          ))}

          <rect x="335" y="10" width="295" height="170" rx="12" fill="#FFF1F2" stroke="#FCA5A5" strokeWidth="1.5"/>
          <text x="483" y="34" fontSize="12" fill="#991B1B" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Postpartum Depression</text>
          {["Affects ~1 in 7 mothers (ACOG)", "Can develop any time in first year", "Persists beyond 2 weeks, worsens", "Persistent sadness, hopelessness, guilt", "Impairs functioning and infant care", "Requires professional treatment"].map((item, i) => (
            <text key={i} x="349" y={54 + i * 22} fontSize="10" fill="#7F1D1D" fontFamily="system-ui">{item}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 1 — HCG DOUBLING
// ═══════════════════════════════════════════

export function HCGDoublingRatesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Expected HCG Doubling Time by Level</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { range: "Below 1,200", time: "48–72 hours", color: "#10B981", x: 10 },
            { range: "1,200–6,000", time: "72–96 hours", color: "#3B82F6", x: 220 },
            { range: "Above 6,000", time: "96+ hours", color: "#8B5CF6", x: 430 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="195" height="90" rx="10" fill="white" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 98} y="38" fontSize="10" fill="#64748B" fontFamily="system-ui" textAnchor="middle">HCG {item.range}</text>
              <text x={item.x + 98} y="62" fontSize="16" fill={item.color} fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.time}</text>
              <text x={item.x + 98} y="82" fontSize="9" fill="#94A3B8" fontFamily="system-ui" textAnchor="middle">expected doubling</text>
              {i < 2 && <text x={item.x + 213} y="55" fontSize="18" fill="#CBD5E1" fontFamily="system-ui">→</text>}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 1 — A1C CONVERTER
// ═══════════════════════════════════════════

export function A1CConversionScaleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">A1C Scale: Normal → Prediabetes → Diabetes</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 90" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { range: "Below 5.7%", label: "Normal", eag: "< 117 mg/dL", color: "#10B981", x: 10, width: 190 },
            { range: "5.7–6.4%", label: "Prediabetes", eag: "117–137 mg/dL", color: "#F59E0B", x: 210, width: 195 },
            { range: "6.5%+", label: "Diabetes", eag: "140+ mg/dL", color: "#EF4444", x: 415, width: 215 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width={item.width} height="65" rx="8" fill={item.color} opacity="0.1" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + item.width/2} y="32" fontSize="13" fill={item.color} fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.range}</text>
              <text x={item.x + item.width/2} y="50" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + item.width/2} y="66" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.eag}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 1 — CHOLESTEROL RATIO
// ═══════════════════════════════════════════

export function CholesterolRatioScaleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Total Cholesterol / HDL Ratio: Risk Assessment Scale</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 80" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Optimal", range: "< 3.5", color: "#10B981", x: 10, width: 145 },
            { label: "Average", range: "3.5–5.0", color: "#84CC16", x: 163, width: 145 },
            { label: "Elevated", range: "5.0–6.0", color: "#F59E0B", x: 316, width: 145 },
            { label: "High Risk", range: "> 6.0", color: "#EF4444", x: 469, width: 160 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width={item.width} height="55" rx="8" fill={item.color} opacity="0.12" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + item.width/2} y="33" fontSize="13" fill={item.color} fontWeight="800" fontFamily="system-ui" textAnchor="middle">{item.range}</text>
              <text x={item.x + item.width/2} y="52" fontSize="10" fill="#334155" fontWeight="600" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 1 — LEAN BODY MASS
// ═══════════════════════════════════════════

export function LBMUseCasesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Why Lean Body Mass Matters: Three Key Uses</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 110" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { label: "Protein targeting", desc: "2.0-2.4g per kg of LBM during a cut", color: "#0F766E", x: 10 },
            { label: "Metabolic rate", desc: "LBM drives BMR more than total weight", color: "#7C3AED", x: 220 },
            { label: "Progress tracking", desc: "Recomposition invisible to the scale", color: "#2563EB", x: 430 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="195" height="85" rx="10" fill="white" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 98} y="38" fontSize="11" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.label}</text>
              <text x={item.x + 98} y="60" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.desc.split(' ').slice(0, 4).join(' ')}</text>
              <text x={item.x + 98} y="75" fontSize="9" fill="#475569" fontFamily="system-ui" textAnchor="middle">{item.desc.split(' ').slice(4).join(' ')}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 1 — KETO MACROS
// ═══════════════════════════════════════════

export function KetoMacroBreakdownSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Standard Keto Macro Split (2,000 cal example)</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="430" height="70" rx="6" fill="#F59E0B" opacity="0.15" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="225" y="40" fontSize="13" fill="#92400E" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Fat — 70-75% (~165g)</text>
          <text x="225" y="58" fontSize="10" fill="#92400E" fontFamily="system-ui" textAnchor="middle">Primary fuel in ketosis</text>

          <rect x="448" y="10" width="130" height="70" rx="6" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" strokeWidth="1.5"/>
          <text x="513" y="40" fontSize="12" fill="#1E40AF" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Protein 20-25%</text>
          <text x="513" y="58" fontSize="10" fill="#1E40AF" fontFamily="system-ui" textAnchor="middle">(~100g)</text>

          <rect x="586" y="10" width="44" height="70" rx="6" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="1.5"/>
          <text x="608" y="40" fontSize="9" fill="#DC2626" fontWeight="800" fontFamily="system-ui" textAnchor="middle">5%</text>
          <text x="608" y="55" fontSize="8" fill="#DC2626" fontFamily="system-ui" textAnchor="middle">25g</text>

          <text x="320" y="96" fontSize="9" fill="#64748B" fontFamily="system-ui" textAnchor="middle">The carb number (5-10%, 20-50g) is the hard ceiling — it determines whether you enter ketosis</text>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 2 — IVF DUE DATE
// ═══════════════════════════════════════════

export function IVFTransferDatesSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">IVF Due Date Calculation by Transfer Type</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {[
            { type: "Day 3 (Fresh/Frozen)", days: "+263 days", color: "#3B82F6", x: 10 },
            { type: "Day 5 (Fresh/Frozen)", days: "+261 days", color: "#0F766E", x: 220 },
            { type: "Accuracy", days: "±3-5 days", color: "#8B5CF6", x: 430 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="10" width="195" height="75" rx="10" fill="white" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + 98} y="38" fontSize="10" fill="#64748B" fontFamily="system-ui" textAnchor="middle">{item.type}</text>
              <text x={item.x + 98} y="62" fontSize="18" fill={item.color} fontWeight="900" fontFamily="system-ui" textAnchor="middle">{item.days}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 2 — ANXIETY VS STRESS
// ═══════════════════════════════════════════

export function StressVsAnxietyComparisonSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">Stress vs Anxiety: The Key Distinction</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="295" height="140" rx="12" fill="#FFF7ED" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="158" y="34" fontSize="13" fill="#92400E" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Stress</text>
          {["External trigger (identifiable)", "Proportionate to the demand", "Resolves when stressor ends", "Better on weekends/vacation"].map((item, i) => (
            <text key={i} x="24" y={56 + i * 24} fontSize="10" fill="#78350F" fontFamily="system-ui">{item}</text>
          ))}
          <rect x="335" y="10" width="295" height="140" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
          <text x="483" y="34" fontSize="13" fill="#1E40AF" fontWeight="800" fontFamily="system-ui" textAnchor="middle">Anxiety</text>
          {["No clear trigger, or disproportionate", "Persistent beyond the situation", "Continues even when stressor gone", "Follows you everywhere"].map((item, i) => (
            <text key={i} x="349" y={56 + i * 24} fontSize="10" fill="#1E3A5F" fontFamily="system-ui">{item}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// PHASE 1 ROUND 2 — WHR
// ═══════════════════════════════════════════

export function WHRRiskScaleSVG() {
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0">WHO Waist-to-Hip Ratio Risk Thresholds</p>
      </div>
      <div className="p-5 bg-white">
        <svg viewBox="0 0 640 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <text x="320" y="18" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui" textAnchor="middle">Men</text>
          {[
            { label: "Low Risk", range: "< 0.90", color: "#10B981", x: 10, width: 200 },
            { label: "Moderate", range: "0.90–0.99", color: "#F59E0B", x: 218, width: 195 },
            { label: "High Risk", range: "1.0+", color: "#EF4444", x: 421, width: 210 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="28" width={item.width} height="32" rx="6" fill={item.color} opacity="0.15" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + item.width/2} y="48" fontSize="11" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.range} — {item.label}</text>
            </g>
          ))}
          <text x="320" y="82" fontSize="11" fill="#334155" fontWeight="600" fontFamily="system-ui" textAnchor="middle">Women</text>
          {[
            { label: "Low Risk", range: "< 0.80", color: "#10B981", x: 10, width: 200 },
            { label: "Moderate", range: "0.80–0.84", color: "#F59E0B", x: 218, width: 195 },
            { label: "High Risk", range: "0.85+", color: "#EF4444", x: 421, width: 210 },
          ].map((item, i) => (
            <g key={i}>
              <rect x={item.x} y="90" width={item.width} height="32" rx="6" fill={item.color} opacity="0.15" stroke={item.color} strokeWidth="1.5"/>
              <text x={item.x + item.width/2} y="110" fontSize="11" fill={item.color} fontWeight="700" fontFamily="system-ui" textAnchor="middle">{item.range} — {item.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
