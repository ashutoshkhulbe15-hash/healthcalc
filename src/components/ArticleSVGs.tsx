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
