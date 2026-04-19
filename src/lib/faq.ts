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

  // Only extract from FAQ section
  let inFaqSection = false;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Detect FAQ section start
    if (line.match(/^##\s+(Frequently Asked Questions|FAQ)/i)) {
      inFaqSection = true;
      i++;
      continue;
    }

    // Stop at next H2 section after FAQ
    if (inFaqSection && line.match(/^##\s+/) && !line.match(/^##\s+(Frequently|FAQ)/i)) {
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
    const match = matchBold || matchH3;

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
