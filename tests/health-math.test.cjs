const test=require('node:test'),assert=require('node:assert/strict'),ts=require('typescript'),fs=require('fs');
require.extensions['.ts']=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,file);
const m={...require('../src/lib/health-math.ts'),...require('../src/lib/bmi-math.ts'),...require('../src/lib/baby-growth-math.ts')};
const close=(a,b,tol=1e-6)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
test('lean mass regression: physically plausible, explicit Boer main estimate',()=>{
 const r=m.leanBodyMass(80,180,'male');close(r.boer,61.42);close(r.james,62.7160493827);close(r.avg,61.42);close(r.fatMass,18.58);
 const imperial=m.leanBodyMass(80/m.KG_PER_LB,180/2.54,'male',true);close(imperial.avg,r.avg);
 assert.throws(()=>m.leanBodyMass(-80,180,'male'));assert.throws(()=>m.leanBodyMass(1,180,'male'));
});
test('pregnancy pound conversion and distinct twin guidance',()=>{
 const r=m.pregnancyGain(132,65,148,'singleton',true);close(r.bmi,21.96572414494);assert.equal(r.category,'Normal weight');assert.deepEqual(r.range,[25,35]);
 const metric=m.pregnancyGain(132*m.KG_PER_LB,65*2.54,148*m.KG_PER_LB,'singleton');close(metric.bmi,r.bmi);close(metric.gain,r.gain);
 assert.deepEqual(m.pregnancyGain(132,65,148,'twins',true).range,[37,54]);assert.equal(m.pregnancyGain(60,165,65,'higher').range,null);
});
test('CDC 14-year regression falls below the fifth percentile',()=>{
 const r=m.teenBMI(168,45,173,'male');close(r.percentile,0.878088,0.0001);assert.equal(r.category,'Underweight');
 const s=m.teenBMI(168,45/m.KG_PER_LB,173/2.54,'male',true);close(s.percentile,r.percentile);
 assert.throws(()=>m.teenBMI(240,60,170,'male'));assert.throws(()=>m.teenBMI(NaN,60,170,'male'));
});
test('CDC reference published percentiles agree across sexes and ages',()=>{
 const cdc=fs.readFileSync(require.resolve('../src/lib/reference-data/cdc-bmi.csv'),'utf8').trim().split(/\r?\n/).filter(x=>!x.startsWith('Sex'));
 for(const line of cdc){const [sex,age,l,median,s,p3,p5,p10,p25,p50,p75,p85,p90,p95,p97]=line.split(',').map(Number);if(!Number.isFinite(age)||age%1!==0.5||age>=240)continue;
 for(const [bmi,pct] of [[p5,5],[p50,50],[p85,85],[p95,95]]){const result=m.teenBMI(Math.floor(age),bmi*1.7**2,170,sex===1?'male':'female');close(result.percentile,pct,0.0001);}
 }
});
test('EPDS zero, maximum, per-item score and Q10 safety independent of total',()=>{
 assert.deepEqual(m.epdsScore(Array(10).fill(0)),{score:0,selfHarm:false});assert.equal(m.epdsScore(Array(10).fill(3)).score,30);
 for(let i=0;i<10;i++)for(let value=0;value<4;value++){const a=Array(10).fill(0);a[i]=value;assert.equal(m.epdsScore(a).score,value);assert.equal(m.epdsScore(a).selfHarm,i===9&&value>0);}
 assert.throws(()=>m.epdsScore(Array(9).fill(0)));assert.throws(()=>m.epdsScore(Array(10).fill(-1)));
});
test('overnight sleep, daytime sleep, wakefulness and invalid timing',()=>{
 const r=m.sleepEstimate('23:00','07:00',15,0);close(r.timeInBed,8);close(r.duration,7.75);close(r.efficiency,96.875);
 close(m.sleepEstimate('09:00','17:00',15,30).duration,7.25);
 for(const [bed,wake,lat,awake] of [['07:00','07:00',0,0],['24:00','07:00',0,0],['23:00','07:00',480,0],['23:00','07:00',-1,0]])assert.throws(()=>m.sleepEstimate(bed,wake,lat,awake));
});
test('WHO daily reference: median is 50th, not nearest sparse age',()=>{
 for(const sex of ['male','female']){
 const data=require(`../src/lib/reference-data/who-weight-${sex==='male'?'boys':'girls'}.json`);
 for(const day of [0,1,90,456,1000,1826]){const row=data[day],r=m.babyWeight(day,row[2],sex);close(r.percentile,50,0.00001);assert.ok(r.p3<r.p50&&r.p97>r.p50);}
 }
 assert.throws(()=>m.babyWeight(NaN,3,'male'));assert.throws(()=>m.babyWeight(1827,20,'male'));assert.throws(()=>m.babyWeight(100,0,'male'));
});
test('local date and gestational age remain correct through DST and reject future dates',()=>{
 assert.equal(m.parseLocalDate('2026-10-02').getDate(),2);assert.throws(()=>m.parseLocalDate('2026-02-30'));
 assert.equal(m.calendarDays(m.parseLocalDate('2026-03-07'),m.parseLocalDate('2026-03-09')),2);
 assert.deepEqual(m.gestation(m.parseLocalDate('2026-01-01'),m.parseLocalDate('2026-01-11')),{weeks:1,days:3});
 assert.throws(()=>m.gestation(m.parseLocalDate('2026-10-03'),m.parseLocalDate('2026-10-02')));
});
test('5-1-1 needs continuous one-hour start-to-start coverage',()=>{
 const sequence=Array.from({length:13},(_,i)=>({start:i*300000,end:i*300000+60000}));
 assert.equal(m.contractionPattern(sequence.slice(0,6)),false);assert.equal(m.contractionPattern(sequence),true);
 const broken=sequence.map(x=>({...x}));broken[8].end=broken[8].start+59000;assert.equal(m.contractionPattern(broken),false);
 const gap=sequence.map(x=>({...x}));gap[7].start+=1000;gap[7].end+=1000;assert.equal(m.contractionPattern(gap),false);
});
test('ACOG IVF transfer offsets match the stated embryo age',()=>{
 assert.equal(m.ivfDaysToDue(5),261);assert.equal(m.ivfDaysToDue(3),263);assert.throws(()=>m.ivfDaysToDue(6));
 const transfer=m.parseLocalDate('2026-03-15');const day5=new Date(transfer);day5.setDate(day5.getDate()+m.ivfDaysToDue(5));assert.equal(day5.getFullYear(),2026);assert.equal(day5.getMonth(),11);assert.equal(day5.getDate(),1);
});
test('hCG arithmetic separates flat, declining and increasing results',()=>{
 const r=m.hcgChange(100,200,48);close(r.doublingTime,48);close(r.increase,100);assert.equal(r.halvingTime,null);
 assert.equal(m.hcgChange(100,100,48).doublingTime,null);close(m.hcgChange(200,100,48).halvingTime,48);close(m.hcgChange(200,100,48).increase,-50);
 close(m.hcgChange(100,200,49.5).doublingTime,49.5);assert.throws(()=>m.hcgChange(0,100,48));assert.throws(()=>m.hcgChange(100,200,0));assert.throws(()=>m.hcgChange(100,200,NaN));
});
test('calendar ovulation counts day 1 and displays six inclusive dates',()=>{
 const date=m.parseLocalDate('2026-10-01'),r=m.estimatedOvulation(date,28);assert.equal(r.ovulation.getDate(),14);assert.equal(r.windowStart.getDate(),9);assert.equal(r.nextPeriod.getDate(),29);assert.equal(m.calendarDays(r.windowStart,r.windowEnd)+1,6);assert.throws(()=>m.estimatedOvulation(date,28.5));assert.throws(()=>m.estimatedOvulation(date,0));
});
