import cdc from "./reference-data/cdc-bmi.json";
import {positive,KG_PER_LB,lmsZ,normalCDF} from "./health-math";
export function adultBMI(weight:number,height:number,imperial=false) {
  positive(weight,height);
  const kg=imperial?weight*KG_PER_LB:weight;
  const metres=imperial?height*0.0254:height/100;
  return kg/(metres*metres);
}
export function adultBMIWeightRange(height:number,imperial=false):[number,number] {
  positive(height);
  const metres=imperial?height*0.0254:height/100;
  const factor=imperial?1/KG_PER_LB:1;
  const round=(value:number)=>Math.round(value*metres*metres*factor*10)/10;
  return [round(18.5),round(25)];
}
export function teenBMI(ageMonths:number, weight:number, height:number, sex:string, imperial=false) {
  positive(weight,height);
  if (!Number.isInteger(ageMonths) || ageMonths<24 || ageMonths>=240) throw new Error("Enter a completed age from 24 to 239 months.");
  const rows=sex==="male" ? cdc["1"] : cdc["2"];
  // CDC half-month rows represent the completed-month interval; age 24 uses 24.5.
  const row=rows.find(r=>r[0]===ageMonths+0.5);
  if(!row) throw new Error("No CDC reference is available for this age.");
  const [,l,m,s]=row;
  const w=imperial ? weight*KG_PER_LB : weight, hm=imperial ? height*0.0254 : height/100;
  const bmi=w/(hm*hm), z=lmsZ(bmi,l,m,s), percentile=normalCDF(z)*100;
  const category=percentile<5?"Underweight":percentile<85?"Healthy weight":percentile<95?"Overweight":"Obesity";
  // CDC maps p3 to z=-1.881 and p95 to z=1.645. Suppress values outside
  // those standard-table bounds; the extended method is not implemented.
  return {bmi,percentile,category,status: (percentile>=5 && percentile<85 ? "good" : "warning") as "good"|"warning",extreme:z < -1.881 || z > 1.645};
}
