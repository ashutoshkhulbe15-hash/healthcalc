import boys from "./reference-data/who-weight-boys.json";
import girls from "./reference-data/who-weight-girls.json";
import {positive,lmsZ,lmsValue,normalCDF} from "./health-math";
export function babyWeight(ageDays:number, weight:number, sex:string) {
  positive(weight);
  const rows=sex==="male" ? boys : girls;
  if(!Number.isInteger(ageDays)||ageDays<0||ageDays>1826) throw new Error("Enter an age in completed days within the WHO birth-to-five-year reference.");
  const [,l,m,s]=rows[ageDays], z=lmsZ(weight,l,m,s);
  if(Math.abs(z)>3) throw new Error("This measurement is outside this calculator's percentile range. Check the age/weight and discuss it with your child's clinician.");
  return {percentile:normalCDF(z)*100,p3:lmsValue(-1.880793608,l,m,s),p50:m,p97:lmsValue(1.880793608,l,m,s)};
}
