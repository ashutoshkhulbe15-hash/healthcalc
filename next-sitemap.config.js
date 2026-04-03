/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://prohealthit.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Calculator pages get high priority
    return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() };
  },
};
