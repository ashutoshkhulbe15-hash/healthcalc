const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),ts=require('typescript');
const file=path.join(__dirname,'../src/lib/faq.ts'),code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const sandbox={exports:{}};vm.runInNewContext(code,sandbox);const extract=sandbox.exports.extractFAQs;
test('FAQ extraction handles decorative headings, numbered questions and stops at references',()=>{
 const input='## Instructions\n\n**Outside question?**\n\nOutside answer.\n\n## ❓ Frequently Asked Questions\n\n**1. First question?**\n\nFirst [source](https://example.com).\n\n**Second question?**\n\nSecond answer.\n\n## Sources\n\n**Not a FAQ?**\n\nReference text.';
 assert.deepEqual(JSON.parse(JSON.stringify(extract(input))),[{question:'First question?',answer:'First source.'},{question:'Second question?',answer:'Second answer.'}]);
});
test('Reviewed calorie and teen FAQs are extracted without other section questions',()=>{
 for(const [name,count]of [['08-calorie-deficit-calculator.md',7],['15-bmi-calculator-teens.md',11],['02-due-date-calculator.md',5],['05-tdee-calculator.md',5]])assert.equal(extract(fs.readFileSync(path.join(__dirname,'../content',name),'utf8')).length,count,name);
});
test('Restored plain food questions stay separate and exclude H3 sources and disclaimer',()=>{
 const input='## Frequently Asked Questions\n\nFirst question?\n\nFirst answer.\n\nSecond question?\n\nSecond [authority](https://example.com).\n\n### Sources\n\n- Source entry\n\n**Medical Disclaimer:** Informational only.';
 assert.deepEqual(JSON.parse(JSON.stringify(extract(input))),[{question:'First question?',answer:'First answer.'},{question:'Second question?',answer:'Second authority.'}]);
 const article=fs.readFileSync(path.join(__dirname,'../content/food-matcha.md'),'utf8'),faqs=extract(article);
 assert.equal(faqs.length,4);assert.equal(faqs[0].question,'Is a matcha latte safe during pregnancy?');
 for(const faq of faqs)assert.doesNotMatch(faq.answer,/Medical Disclaimer|February 2025 overview/);
});
