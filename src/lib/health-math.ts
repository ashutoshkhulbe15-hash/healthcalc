
export const KG_PER_LB = 0.45359237;
export function positive(...values: number[]) {
  if (values.some(v => !Number.isFinite(v) || v <= 0)) throw new Error("Enter positive, finite measurements.");
}
export function leanBodyMass(weight: number, height: number, sex: string, imperial = false) {
  positive(weight, height);
  const w = imperial ? weight * KG_PER_LB : weight;
  const h = imperial ? height * 2.54 : height;
  const boer = sex === "male" ? 0.407*w + 0.267*h - 19.2 : 0.252*w + 0.473*h - 48.3;
  const james = sex === "male" ? 1.1*w - 128*(w/h)**2 : 1.07*w - 148*(w/h)**2;
  if (boer <= 0 || boer >= w || james <= 0 || james >= w) throw new Error("These measurements are outside this estimator's useful range. Check the inputs or use a measured assessment.");
  // Boer is the main estimate; the James result is a comparison, not an invented average.
  return {boer, james, avg: boer, fatMass: w-boer, bf: (w-boer)/w*100};
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
export function contractionPattern(entries:{start:number;end:number|null}[]) {
  const completed=entries.filter((e):e is {start:number;end:number}=>e.end!==null);
  if(completed.length<2) return false;
  const last=completed[completed.length-1], cutoff=last.start-3600000;
  // Include the entry just before the one-hour boundary to prove continuous coverage.
  const before=completed.findLastIndex(e=>e.start<=cutoff);
  if(before<0) return false;
  const window=completed.slice(before);
  return window.every(e=>e.end-e.start>=60000) && window.slice(1).every((e,i)=>e.start-window[i].start>0 && e.start-window[i].start<=300000);
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
