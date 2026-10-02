const fs=require('node:fs'),assert=require('node:assert/strict');
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3100';
if(!/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(base))throw new Error('Only localhost is allowed.');
const origin='https://prohealthit.com';
const attr=(tag,name)=>tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
(async()=>{
 const sitemap=await(await fetch(base+'/sitemap.xml')).text(),urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);assert.ok(urls.length>=90);
 const seen=new Set(),results=[],links=new Set();
 for(const url of urls){const route=new URL(url).pathname,expected=origin+route;assert.equal(seen.has(route),false);seen.add(route);const response=await fetch(base+route),html=await response.text();assert.equal(response.status,200,route);
 const canonical=[...html.matchAll(/<link\b[^>]+>/g)].map(m=>m[0]).filter(t=>attr(t,'rel')==='canonical');assert.equal(canonical.length,1,route);assert.equal(attr(canonical[0],'href').replace(/\/$/,''),expected.replace(/\/$/,''),route+' canonical');
 const tags=[...html.matchAll(/<meta\b[^>]+>/g)].map(m=>m[0]),og=tags.find(t=>attr(t,'property')==='og:url');assert.equal(attr(og,'content').replace(/\/$/,''),expected.replace(/\/$/,''),route+' social URL');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,route+' H1');assert.ok(!tags.some(t=>attr(t,'name')==='robots'&&/noindex/.test(attr(t,'content'))),route+' indexability');
 for(const script of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){const schema=JSON.parse(script[1]);const entries=Array.isArray(schema)?schema:[schema];for(const e of entries){if(e['@type']==='Article'){assert.equal(e.datePublished,undefined,route+' invented publication date');}}}
 for(const a of html.matchAll(/<a\b[^>]*href="([^"#]+)"/g)){if(a[1].startsWith('/')&&!a[1].startsWith('//'))links.add(a[1].split(/[?#]/)[0]);}
 results.push({route,status:response.status,canonical:expected,h1:1});
 }
 for(const link of links){if(seen.has(link)||/\.[a-z0-9]+$/i.test(link))continue;const r=await fetch(base+link);assert.equal(r.status,200,'internal link '+link);}
 const old=await fetch(base+'/pregnancy/safe-food/papaya',{redirect:'manual'});assert.equal(old.status,308);assert.equal(old.headers.get('location'),'/guides/everyday-foods-pregnancy');
 assert.equal((await fetch(base+'/missing-test-page')).status,404);
 fs.mkdirSync('test-artifacts',{recursive:true});fs.writeFileSync('test-artifacts/site-structure.json',JSON.stringify({pages:urls.length,internalDestinations:links.size,results},null,2));console.log(`${urls.length} sitemap pages passed: 200 status, self-canonical, self social URL, one H1, indexability and parseable schema; ${links.size} internal destinations checked. Redirect and 404 passed.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
