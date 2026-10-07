/**
 * Extracts FAQ question/answer pairs from markdown content.
 * Handles multiple patterns:
 * - **1. Question text?**
 * - **Question text?**
 * - ### Question text?
 */
export function extractFAQs(
  content: string
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = content.split("\n");

  // Allow decorative emoji before the FAQ heading without changing visible content.
  const faqHeading = /^##\s+[^\p{L}\p{N}]*(Frequently Asked Questions|FAQ)/iu;

  // Only extract from FAQ section
  let inFaqSection = false;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Detect FAQ section start
    if (faqHeading.test(line)) {
      inFaqSection = true;
      i++;
      continue;
    }

    // Stop at next H2 section after FAQ
    if (inFaqSection && line.match(/^##\s+/) && !faqHeading.test(line)) {
      break;
    }
    if (inFaqSection && /^#{2,3}\s+(?:Sources|References|Related\b)/i.test(line)) {
      break;
    }

    if (!inFaqSection) {
      i++;
      continue;
    }

    // Match question patterns:
    // **1. Question?** or **Question?** or ### Question?
    const matchBold = line.match(/^\*\*(?:\d+\.\s*|Q:\s*)?(.+?\?)\s*\*\*\s*$/);
    const matchH3 = line.match(/^###\s+(.+?\?)\s*$/);
    // Several restored food articles use standalone, unformatted questions.
    const matchPlain = line.match(/^([^#*>|\[\-].{0,239}\?)$/);
    const match = matchBold || matchH3 || matchPlain;

    if (match) {
      const question = match[1].trim();
      let answer = "";
      i++;

      // Collect answer lines until next question or section
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (
          nextLine.match(/^\*\*(?:\d+\.\s*|Q:\s*)?.*\?\s*\*\*\s*$/) ||
          nextLine.match(/^###\s+.+\?\s*$/) ||
          nextLine.match(/^([^#*>|\[\-].{0,239}\?)$/) ||
          nextLine.match(/^#{2,3}\s+(?:Sources|References|Related\b)/i) ||
          nextLine.match(/^##\s+/) ||
          nextLine === "---"
        ) {
          break;
        }
        if (nextLine && !nextLine.startsWith("<!--")) {
          const cleaned = nextLine
            .replace(/^\*\*A:\s*\*\*/i, "")
            .replace(/\*\*/g, "")
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
            .replace(/^[-*]\s+/, "")
            .trim();
          if (cleaned) {
            answer += (answer ? " " : "") + cleaned;
          }
        }
        i++;
      }

      if (question && answer) {
        faqs.push({ question, answer });
      }
    } else {
      i++;
    }
  }

  return faqs;
}
