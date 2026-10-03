
export const KG_PER_LB = 0.45359237;
export function historicalWeightEquations(heightInches:number, sex:"male"|"female") {
  if(!Number.isFinite(heightInches) || heightInches<60) throw new Error("Enter a finite height of at least 60 inches.");
  const over60=heightInches-60;
  const devine=sex==="male"?50+2.3*over60:45.5+2.3*over60;
  const robinson=sex==="male"?52+1.9*over60:49+1.7*over60;
  const miller=sex==="male"?56.2+1.41*over60:53.1+1.36*over60;
  const hamwiLb=sex==="male"?106+6*over60:100+5*over60;
  return {devine,robinson,miller,hamwi:hamwiLb*KG_PER_LB};
}
// U.S. Dietary Guidelines for Americans 2025–2030, protein serving goal.
export function proteinGuidelineRange(weight:number, imperial=false) {
  if(!Number.isFinite(weight)||weight<=0) throw new Error("Enter a positive, finite body weight.");
  const weightKg=imperial?weight*KG_PER_LB:weight;
  return {min:Math.round(weightKg*1.2),max:Math.round(weightKg*1.6)};
}
// ESPEN 2022 commentary: 1.0–1.2 g/kg/day suggested for healthy older persons.
export function espenHealthyOlderProteinRange(weight:number, imperial=false) {
  if(!Number.isFinite(weight)||weight<=0) throw new Error("Enter a positive, finite body weight.");
  const kg=imperial?weight*KG_PER_LB:weight;
  return {min:Math.round(kg),max:Math.round(kg*1.2)};
}
export function mifflinStJeor(weight:number,height:number,age:number,sex:"male"|"female",imperial=false) {
  positive(weight,height);
  if(!Number.isInteger(age)||age<19||age>78) throw new Error("This estimate is limited to ages 19–78, the age range in the original study.");
  const kg=imperial?weight*KG_PER_LB:weight,cm=imperial?height*2.54:height;
  return sex==="male"?10*kg+6.25*cm-5*age+5:10*kg+6.25*cm-5*age-161;
}
export function macroAllocation(calories:number,proteinPercent:number,carbPercent:number,fatPercent:number) {
  const values=[calories,proteinPercent,carbPercent,fatPercent];
  if(values.some(v=>!Number.isFinite(v))||calories<=0||[proteinPercent,carbPercent,fatPercent].some(v=>v<0||v>100)||Math.abs(proteinPercent+carbPercent+fatPercent-100)>1e-8) throw new Error("Enter positive calories and percentages from 0–100 that total 100.");
  const grams=(percent:number,kcalPerGram:number)=>Math.round(calories*percent/100/kcalPerGram*10)/10;
  return {protein:grams(proteinPercent,4),carbs:grams(carbPercent,4),fat:grams(fatPercent,9),proteinCalories:calories*proteinPercent/100,carbCalories:calories*carbPercent/100,fatCalories:calories*fatPercent/100,totalCalories:calories,split:[proteinPercent,carbPercent,fatPercent] as [number,number,number]};
}
export function positive(...values: number[]) {
  if (values.some(v => !Number.isFinite(v) || v <= 0)) throw new Error("Enter positive, finite measurements.");
}
// U.S. Army Regulation 600-9, Appendix B, Table B-5; lengths are inches.
export function circumferenceBodyCompositionEstimate(waist:number,neck:number,height:number,sex:"male"|"female",hip=0) {
  positive(waist,neck,height);
  if(sex==="male"&&waist<=neck) throw new Error("Waist circumference must exceed neck circumference.");
  if(sex==="female"&&(!Number.isFinite(hip)||hip<=0||waist+hip<=neck)) throw new Error("Enter valid waist, hip and neck circumferences.");
  const estimate=sex==="male"
    ?86.010*Math.log10(waist-neck)-70.041*Math.log10(height)+36.76
    :163.205*Math.log10(waist+hip-neck)-97.684*Math.log10(height)-78.387;
  if(!Number.isFinite(estimate)||estimate<=0||estimate>=100) throw new Error("These measurements fall outside the equation's displayed range.");
  return Math.round(estimate*10)/10;
}
// NIDDK 2021 CKD-EPI creatinine equation for adults; SCr in standardized mg/dL.
export function ckdEpi2021Creatinine(scr:number,age:number,sex:"male"|"female") {
  positive(scr);
  if(!Number.isInteger(age)||age<18) throw new Error("This equation is specified for adults age 18 and older.");
  const female=sex==="female",k=female?0.7:0.9,alpha=female?-0.241:-0.302;
  return 142*Math.pow(Math.min(scr/k,1),alpha)*Math.pow(Math.max(scr/k,1),-1.2)*Math.pow(0.9938,age)*(female?1.012:1);
}
export function leanBodyMass(weight: number, height: number, sex: string, imperial = false) {
  positive(weight, height);
  const w = imperial ? weight * KG_PER_LB : weight;
  const h = imperial ? height * 2.54 : height;
  const boer = sex === "male" ? 0.407*w + 0.267*h - 19.2 : 0.252*w + 0.473*h - 48.3;
  if (boer <= 0 || boer >= w) throw new Error("These measurements produce an implausible equation result. Check the inputs.");
  return {boer};
}

// Standard normal CDF, absolute error < 1e-7 (Abramowitz & Stegun 26.2.17).
export function normalCDF(z: number) {
  const t=1/(1+0.2316419*Math.abs(z));
  const tail=Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)*t*(0.319381530+t*(-0.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));
  return z>=0 ? 1-tail : tail;
}
export function lmsZ(value:number, l:number, m:number, s:number) {
  positive(value,m,s);
  return l===0 ? Math.log(value/m)/s : ((value/m)**l-1)/(l*s);
}
export function lmsValue(z:number,l:number,m:number,s:number) {
  return l===0 ? m*Math.exp(s*z) : m*(1+l*s*z)**(1/l);
}

export function epdsScore(answers:number[]) {
  if(answers.length!==10 || answers.some(a=>!Number.isInteger(a)||a<0||a>3)) throw new Error("Answer every question.");
  // Every displayed choice is explicitly ordered from score 0 to score 3.
  const score=answers.reduce((s,a)=>s+a,0);
  return {score,selfHarm:answers[9]>0};
}

export function sleepEstimate(bedtime:string,waketime:string,latency:number,awake:number) {
  if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(bedtime)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(waketime)) throw new Error("Enter valid sleep and wake times.");
  const minutes=(v:string)=>Number(v.slice(0,2))*60+Number(v.slice(3));
  const inBed=(minutes(waketime)-minutes(bedtime)+1440)%1440;
  if(inBed===0 || !Number.isFinite(latency) || !Number.isFinite(awake) || latency<0 || awake<0 || latency+awake>=inBed) throw new Error("Wake time must differ from bedtime, and awake minutes must be less than time in bed.");
  const duration=(inBed-latency-awake)/60;
  return {timeInBed:inBed/60,duration,efficiency:duration/(inBed/60)*100};
}
export function pregnancyGain(preWeight:number,height:number,currentWeight:number,kind:string,imperial=false) {
  positive(preWeight,height,currentWeight);
  const pw=imperial ? preWeight*KG_PER_LB : preWeight, cw=imperial ? currentWeight*KG_PER_LB : currentWeight;
  const hm=imperial ? height*0.0254 : height/100, bmi=pw/(hm*hm);
  const index=bmi<18.5?0:bmi<25?1:bmi<30?2:3;
  const category=["Underweight","Normal weight","Overweight","Obesity"][index];
  const singleton=[[28,40],[25,35],[15,25],[11,20]];
  const twins=[[50,62],[37,54],[31,50],[25,42]];
  const range=kind==="singleton" ? singleton[index] : kind==="twins" ? twins[index] : null;
  return {bmi,category,gain:cw-pw,range,underweightTwins:kind==="twins" && index===0};
}
export function parseLocalDate(value:string) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("Enter a valid date.");
  const [y,m,d]=value.split("-").map(Number), result=new Date(y,m-1,d,12);
  if(result.getFullYear()!==y || result.getMonth()!==m-1 || result.getDate()!==d) throw new Error("Enter a valid calendar date.");
  return result;
}
export function calendarDays(a:Date,b:Date) {
  return Math.round((Date.UTC(b.getFullYear(),b.getMonth(),b.getDate())-Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()))/86400000);
}
export function gestation(start:Date,today:Date) {
  const days=calendarDays(start,today);
  if(days<0 || days>294) throw new Error("The dates must describe a current pregnancy, up to 42 weeks.");
  return {weeks:Math.floor(days/7),days:days%7};
}
export function contractionMetrics(entries:{start:number;end:number|null}[]) {
  const completed=entries.filter((e):e is {start:number;end:number}=>e.end!==null && Number.isFinite(e.start) && Number.isFinite(e.end) && e.end>=e.start);
  const durations=completed.map(e=>(e.end-e.start)/1000);
  const intervals=completed.slice(1).map((e,i)=>(e.start-completed[i].start)/1000).filter(v=>v>0);
  const average=(values:number[])=>values.length?values.reduce((sum,value)=>sum+value,0)/values.length:0;
  return {completed,durations,intervals,averageDuration:average(durations),averageInterval:average(intervals)};
}

// ACOG Committee Opinion 700: 266 days from fertilization, less embryo age.
export function ivfDaysToDue(embryoAge:number) {
  if(embryoAge!==3&&embryoAge!==5) throw new Error("Use the clinic-confirmed day-3 or day-5 embryo age.");
  return 266-embryoAge;
}
export function hcgChange(first:number,second:number,hours:number) {
  positive(first,second,hours);
  const increase=(second/first-1)*100;
  const doublingTime=second>first?hours*Math.LN2/(Math.log(second)-Math.log(first)):null;
  const halvingTime=second<first?hours*Math.LN2/(Math.log(first)-Math.log(second)):null;
  if(!Number.isFinite(increase)||(doublingTime!==null&&!Number.isFinite(doublingTime))||(halvingTime!==null&&!Number.isFinite(halvingTime)))throw new Error("These values are outside the supported arithmetic range.");
  return {increase,hours,doublingTime,halvingTime,trend:second>first?"Increased":second<first?"Decreased":"Unchanged"};
}
export function estimatedOvulation(lmp:Date,cycleLength:number) {
  if(!Number.isFinite(lmp.getTime())||!Number.isInteger(cycleLength)||cycleLength<21||cycleLength>45) throw new Error("Enter a valid period date and a whole cycle length from 21–45 days.");
  const add=(days:number)=>{const d=new Date(lmp);d.setDate(d.getDate()+days);return d;};
  // Calendar-model assumption: cycle day (length - 14); first period day is day 1.
  const ovulation=add(cycleLength-15),windowStart=add(cycleLength-20),nextPeriod=add(cycleLength);
  return {ovulation,windowStart,windowEnd:ovulation,nextPeriod};
}
