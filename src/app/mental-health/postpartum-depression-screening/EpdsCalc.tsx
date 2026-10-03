import { MethodNotice } from "@/components/MethodNotice";

export function EpdsCalc() {
  return (
    <MethodNotice>
      <h2 className="mb-2 text-lg font-bold">EPDS form temporarily unavailable</h2>
      <p className="mb-3">The EPDS is a screening questionnaire, not a diagnosis. Its source pages specify attribution and reproduction conditions. This site has not confirmed permission for online reproduction and automated scoring, so the form and score output are withheld.</p>
      <a href="https://www.cope.org.au/health-professionals/screening-and-assessment-tools/using-the-epds-as-a-screening-tool" className="font-semibold underline">Read COPE&apos;s screening and follow-up information</a>
    </MethodNotice>
  );
}
