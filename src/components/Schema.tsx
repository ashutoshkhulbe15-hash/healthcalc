export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `https://prohealthit.com${item.url}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  category,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  category?: string;
  dateModified?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: `https://prohealthit.com${url}`,
    image: "https://prohealthit.com/og-image.png",
    datePublished: "2026-04-01T00:00:00Z",
    dateModified: dateModified ?? "2026-07-01T00:00:00Z",
    author: {
      "@type": "Person",
      name: "Ash K",
      url: "https://prohealthit.com/about",
      jobTitle: "Health Researcher and Writer",
      description:
        "Health technology researcher and founder of ProHealthIt. Writes every article from primary sources: WHO, NIH, ACOG, CDC, FDA, and peer-reviewed literature. Not a licensed medical professional.",
      knowsAbout: [
        "Pregnancy nutrition",
        "Food safety",
        "Body composition metrics",
        "Clinical screening instruments",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "ProHealthIt",
      url: "https://prohealthit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://prohealthit.com/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://prohealthit.com${url}`,
    },
    ...(category ? { articleSection: category } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `https://prohealthit.com${url}`,
    publisher: {
      "@type": "Organization",
      name: "ProHealthIt",
      url: "https://prohealthit.com",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "ProHealthIt",
      url: "https://prohealthit.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
