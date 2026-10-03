const test=require('node:test'),assert=require('node:assert/strict'),ts=require('typescript'),fs=require('fs');
require.extensions['.ts']=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,file);
const m={...require('../src/lib/health-math.ts'),...require('../src/lib/bmi-math.ts'),...require('../src/lib/baby-growth-math.ts')};
const close=(a,b,tol=1e-6)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
test('Boer equation reproduces its published coefficients and converts input units',()=>{
 const r=m.leanBodyMass(80,180,'male');close(r.boer,61.42);
 const female=m.leanBodyMass(65,165,'female');close(female.boer,46.125);
 const imperial=m.leanBodyMass(80/m.KG_PER_LB,180/2.54,'male',true);close(imperial.boer,r.boer);
 assert.throws(()=>m.leanBodyMass(-80,180,'male'));assert.throws(()=>m.leanBodyMass(1,180,'male'));
});
test('pregnancy pound conversion and distinct twin guidance',()=>{
 const r=m.pregnancyGain(132,65,148,'singleton',true);close(r.bmi,21.96572414494);assert.equal(r.category,'Normal weight');assert.deepEqual(r.range,[25,35]);
 const metric=m.pregnancyGain(132*m.KG_PER_LB,65*2.54,148*m.KG_PER_LB,'singleton');close(metric.bmi,r.bmi);close(metric.gain,r.gain);
 assert.deepEqual(m.pregnancyGain(132,65,148,'twins',true).range,[37,54]);assert.equal(m.pregnancyGain(60,165,65,'higher').range,null);
});
test('CDC 14-year regression falls below the fifth percentile',()=>{
 const r=m.teenBMI(168,45,173,'male');close(r.percentile,0.878088,0.0001);assert.equal(r.category,'Underweight');assert.equal(r.extreme,true);
 const s=m.teenBMI(168,45/m.KG_PER_LB,173/2.54,'male',true);close(s.percentile,r.percentile);
 assert.throws(()=>m.teenBMI(240,60,170,'male'));assert.throws(()=>m.teenBMI(NaN,60,170,'male'));
});
test('CDC reference published percentiles agree across sexes and ages',()=>{
 const cdc=fs.readFileSync(require.resolve('../src/lib/reference-data/cdc-bmi.csv'),'utf8').trim().split(/\r?\n/).filter(x=>!x.startsWith('Sex'));
 for(const line of cdc){const [sex,age,l,median,s,p3,p5,p10,p25,p50,p75,p85,p90,p95,p97]=line.split(',').map(Number);if(!Number.isFinite(age)||age%1!==0.5||age>=240)continue;
 for(const [bmi,pct] of [[p3,3],[p5,5],[p50,50],[p85,85],[p95,95],[p97,97]]){const result=m.teenBMI(Math.floor(age),bmi*1.7**2,170,sex===1?'male':'female');close(result.percentile,pct,0.0001);assert.equal(result.extreme,pct<3||pct>95);}
 }
});
test('adult BMI agrees across units and reports the CDC healthy BMI range',()=>{
 const bmi=m.adultBMI(75,175),imperial=m.adultBMI(75/m.KG_PER_LB,175/2.54,true);close(bmi,24.4897959184);close(imperial,bmi);
 const metric=m.adultBMIWeightRange(175),english=m.adultBMIWeightRange(175/2.54,true);close(metric[0],56.7);close(metric[1],76.6);close(english[0],metric[0]/m.KG_PER_LB,0.11);close(english[1],metric[1]/m.KG_PER_LB,0.11);
 assert.throws(()=>m.adultBMI(-1,175));assert.throws(()=>m.adultBMIWeightRange(0));
});
test('historical weight equations reproduce published coefficients and Hamwi pound conversion',()=>{
 const male=m.historicalWeightEquations(68,'male'),female=m.historicalWeightEquations(68,'female');
 close(male.devine,68.4);close(male.robinson,67.2);close(male.miller,67.48);close(male.hamwi,154*m.KG_PER_LB);
 close(female.devine,63.9);close(female.robinson,62.6);close(female.miller,63.98);close(female.hamwi,140*m.KG_PER_LB);
 const metric=m.historicalWeightEquations(172.72/2.54,'male');close(metric.devine,male.devine);close(metric.hamwi,male.hamwi);
 assert.throws(()=>m.historicalWeightEquations(59.9,'female'));assert.throws(()=>m.historicalWeightEquations(Infinity,'male'));
});
test('military circumference equations follow Army AR 600-9 coefficients and units',()=>{
 close(m.circumferenceBodyCompositionEstimate(49,16,69,'male'),38.6,0.001);
 close(m.circumferenceBodyCompositionEstimate(42,15,64,'female',44),47.3,0.001);
 assert.throws(()=>m.circumferenceBodyCompositionEstimate(15,16,69,'male'));
});
test('CKD-EPI 2021 creatinine equation matches NKF implementation checks',()=>{
 const f=m.ckdEpi2021Creatinine;
 close(f(0.90,18,'male'),127,0.5);close(f(0.91,18,'male'),125,0.5);
 close(f(0.70,18,'female'),128,0.5);close(f(0.71,18,'female'),126,0.5);
 close(f(0.50,90,'male'),97,0.5);close(f(1.50,90,'male'),44,0.5);
 close(f(0.50,90,'female'),89,0.5);close(f(1.50,90,'female'),33,0.5);
 assert.throws(()=>f(1.2,17,'male'));assert.throws(()=>f(0,60,'female'));
});
test('current U.S. protein guideline range is arithmetic and unit independent',()=>{
 assert.deepEqual(m.proteinGuidelineRange(80),{min:96,max:128});
 assert.deepEqual(m.proteinGuidelineRange(80/m.KG_PER_LB,true),{min:96,max:128});
 assert.throws(()=>m.proteinGuidelineRange(0));assert.throws(()=>m.proteinGuidelineRange(Infinity));
});
test('ESPEN healthy older-person range preserves cited endpoints and pound conversion',()=>{
 assert.deepEqual(m.espenHealthyOlderProteinRange(70),{min:70,max:84});
 assert.deepEqual(m.espenHealthyOlderProteinRange(70/m.KG_PER_LB,true),{min:70,max:84});
 assert.throws(()=>m.espenHealthyOlderProteinRange(0));assert.throws(()=>m.espenHealthyOlderProteinRange(NaN));
});
test('Mifflin–St Jeor reproduces the cited study example and unit conversion',()=>{
 close(m.mifflinStJeor(68,165,32,'female'),1390.25);
 close(m.mifflinStJeor(68/m.KG_PER_LB,165/2.54,32,'female',true),1390.25);
 close(m.mifflinStJeor(75,178,30,'male'),1717.5);
 assert.throws(()=>m.mifflinStJeor(68,165,18,'female'));assert.throws(()=>m.mifflinStJeor(68,165,79,'female'));
 assert.throws(()=>m.mifflinStJeor(0,165,32,'female'));
});
test('macro allocator converts user-selected shares without prescribing a split',()=>{
 const r=m.macroAllocation(2000,25,50,25);close(r.protein,125);close(r.carbs,250);close(r.fat,55.6);close(r.proteinCalories+r.carbCalories+r.fatCalories,2000);
 assert.deepEqual(m.macroAllocation(2000,33.3,33.3,33.4).split,[33.3,33.3,33.4]);
 assert.throws(()=>m.macroAllocation(2000,25,50,20));assert.throws(()=>m.macroAllocation(0,25,50,25));assert.throws(()=>m.macroAllocation(2000,-1,51,50));
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
 for(const day of [0,1,90,456,1000,1826]){const row=data[day],r=m.babyWeight(day,row[2],sex);close(r.percentile,50,0.00001);close(m.babyWeight(day,r.p3,sex).percentile,3,0.02);close(m.babyWeight(day,r.p97,sex).percentile,97,0.02);assert.ok(r.p3<r.p50&&r.p97>r.p50);}
 }
 assert.throws(()=>m.babyWeight(NaN,3,'male'));assert.throws(()=>m.babyWeight(1827,20,'male'));assert.throws(()=>m.babyWeight(100,0,'male'));
});
test('local date and gestational age remain correct through DST and reject future dates',()=>{
 assert.equal(m.parseLocalDate('2026-10-02').getDate(),2);assert.throws(()=>m.parseLocalDate('2026-02-30'));
 assert.equal(m.calendarDays(m.parseLocalDate('2026-03-07'),m.parseLocalDate('2026-03-09')),2);
 assert.deepEqual(m.gestation(m.parseLocalDate('2026-01-01'),m.parseLocalDate('2026-01-11')),{weeks:1,days:3});
 assert.throws(()=>m.gestation(m.parseLocalDate('2026-10-03'),m.parseLocalDate('2026-10-02')));
});
test('contraction timer reports duration and start-to-start intervals without a labor threshold',()=>{
 const result=m.contractionMetrics([{start:0,end:45000},{start:300000,end:360000},{start:660000,end:null}]);
 assert.equal(result.completed.length,2);assert.deepEqual(result.durations,[45,60]);assert.deepEqual(result.intervals,[300]);
 close(result.averageDuration,52.5);close(result.averageInterval,300);
 const onlyOne=m.contractionMetrics([{start:0,end:1000}]);assert.deepEqual(onlyOne.intervals,[]);assert.equal(onlyOne.averageInterval,0);
 const invalid=m.contractionMetrics([{start:10,end:5},{start:NaN,end:20}]);assert.deepEqual(invalid.completed,[]);
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

test('WHO official rounded minus-two and plus-two SD weights agree with LMS percentiles',()=>{
 const fixtures=require('./who-reference-fixtures.json');
 for(const c of fixtures.cases)close(m.babyWeight(c.ageDays,c.weightKg,c.sex).percentile,c.percentile,0.03);
 assert.throws(()=>m.babyWeight(0,3.2,'unsupported'));
});
test('pregnancy BMI category boundaries select the source pound ranges before rounding',()=>{
 const cases=[[18.49,[28,40],[50,62]],[18.5,[25,35],[37,54]],[24.99,[25,35],[37,54]],[25,[15,25],[31,50]],[29.99,[15,25],[31,50]],[30,[11,20],[25,42]],[40,[11,20],[25,42]]];
 for(const [bmi,singleton,twins] of cases){assert.deepEqual(m.pregnancyGain(bmi*4,200,bmi*4+5,'singleton').range,singleton);assert.deepEqual(m.pregnancyGain(bmi*4,200,bmi*4+5,'twins').range,twins);}
});
