/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");

// Get last-modified date for a path by checking the corresponding file
function getLastModified(urlPath) {
  try {
    // Try to find the corresponding page.tsx file
    let filePath = urlPath === "/" ? "src/app/page.tsx" : `src/app${urlPath}/page.tsx`;
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      return fs.statSync(fullPath).mtime.toISOString();
    }
  } catch (e) {}
  return new Date().toISOString();
}

// Determine priority based on URL pattern
function getPriority(urlPath) {
  if (urlPath === "/") return 1.0;
  if (urlPath === "/tools") return 0.9;
  // Calculator/tool pages (depth 2 with known categories)
  const toolCategories = ["/fitness/", "/body-metrics/", "/mental-health/", "/conditions/", "/pregnancy/"];
  if (toolCategories.some((c) => urlPath.startsWith(c)) && !urlPath.includes("/safe-food/")) {
    return 0.9;
  }
  // Category index pages
  if (["/fitness", "/body-metrics", "/mental-health", "/conditions", "/pregnancy"].includes(urlPath)) {
    return 0.8;
  }
  // Blog and guide articles
  if (urlPath.startsWith("/blog/") || urlPath.startsWith("/guides/")) return 0.8;
  // Safe food individual pages
  if (urlPath.startsWith("/pregnancy/safe-food/")) return 0.6;
  // Safe food index
  if (urlPath === "/pregnancy/safe-food") return 0.7;
  // Static pages (about, contact, etc.)
  if (["/about", "/contact", "/privacy", "/disclaimer"].includes(urlPath)) return 0.3;
  return 0.5;
}

// Determine change frequency
function getChangefreq(urlPath) {
  if (urlPath === "/") return "daily";
  if (["/about", "/contact", "/privacy", "/disclaimer"].includes(urlPath)) return "yearly";
  if (urlPath.startsWith("/blog/") || urlPath.startsWith("/guides/")) return "monthly";
  return "weekly";
}

module.exports = {
  siteUrl: "https://prohealthit.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, urlPath) => {
    return {
      loc: urlPath,
      changefreq: getChangefreq(urlPath),
      priority: getPriority(urlPath),
      lastmod: getLastModified(urlPath),
    };
  },
};
