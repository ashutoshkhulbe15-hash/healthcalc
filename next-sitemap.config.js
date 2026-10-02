const fs=require("fs"),path=require("path");
function lastmod(route){
 const page=path.join(process.cwd(),route==="/"?"src/app/page.tsx":`src/app${route}/page.tsx`);
 if(!fs.existsSync(page))return undefined;
 const source=fs.readFileSync(page,"utf8"),file=source.match(/getArticleContent\("([^"]+)"\)/)?.[1];
 if(!file)return undefined;
 const text=fs.readFileSync(path.join(process.cwd(),"content",file),"utf8");
 const date=text.match(/<!--\s*last-updated:\s*(\d{4}-\d{2}-\d{2})\s*-->/)?.[1];
 return date?`${date}T00:00:00Z`:undefined;
}
module.exports={siteUrl:"https://prohealthit.com",generateRobotsTxt:true,generateIndexSitemap:false,autoLastmod:false,sitemapSize:7000,robotsTxtOptions:{policies:[{userAgent:"*",allow:"/"}]},transform:async(_,route)=>({loc:route,...(lastmod(route)?{lastmod:lastmod(route)}:{})})};
