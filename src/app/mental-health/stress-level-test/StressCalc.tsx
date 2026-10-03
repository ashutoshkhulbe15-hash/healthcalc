import { MethodNotice } from "@/components/MethodNotice";

export function StressCalc() {
  return (
    <MethodNotice>
      <h2 className="mb-2 text-lg font-bold">About the Perceived Stress Scale</h2>
      <p className="mb-3">The scale’s author-maintained page says it is not diagnostic and has no score cutoffs. It also directs users to request permission to use the questionnaire. This site does not display or score the questionnaire while that use permission is unconfirmed.</p>
      <a href="https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html" className="font-semibold underline">Read the scale information and request-use instructions from Carnegie Mellon University</a>
    </MethodNotice>
  );
}
