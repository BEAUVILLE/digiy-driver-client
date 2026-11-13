/* Static non-network contract for the public client; run: node tests/world10-contract.cjs */
'use strict';
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'app.html'),'utf8');
const inline=(html.match(/<script>([\s\S]*?)<\/script>/)||[])[1];
assert.ok(inline,'client inline app script');
new vm.Script(inline,{filename:'app.html'});
for(const file of ['assets/driver-client-master-v1.js','assets/driver-request-carnet-v1.js']){
  new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
}
const required=['fr','wo','zh','en','es','pt','it','de','nl','ar'];
const buttons=[...html.matchAll(/<button[^>]*data-lang="([a-z]+)"/g)].map(x=>x[1]);
assert.deepEqual(buttons,required,'ten visible languages in expected order');
assert.ok(html.includes('flex-wrap:wrap;overflow:visible'),'mobile selector wraps without hidden choices');
assert.ok(html.includes('url.searchParams.set("lang",lang)'),'selected language kept in URL');
assert.ok(html.includes('route.href=linkLang("./metiers-route.html")'),'road link keeps language');
assert.ok(html.includes('home.href=linkLang("https://digiylyfe.com/")'),'return to homepage keeps language');
assert.ok(html.includes('lang==="ar"?"rtl":"ltr"'),'Arabic RTL support');
function newDict(src,lang,next){
  const pattern=new RegExp(lang+':(\\{[^\\n]*?\\}),\\n\\s*'+next+':');
  const found=src.match(pattern);
  assert.ok(found,lang+' dictionary present');
  return JSON.parse(found[1]);
}
const assets=[
  ['app.html',inline,'zh'],
  ['assets/driver-client-master-v1.js',fs.readFileSync(path.join(root,'assets/driver-client-master-v1.js'),'utf8'),'zh'],
  ['assets/driver-request-carnet-v1.js',fs.readFileSync(path.join(root,'assets/driver-request-carnet-v1.js'),'utf8'),'zh']
];
for(const [name,src] of assets){
  const wo=newDict(src,'wo','zh'),zh=newDict(src,'zh','fr');
  assert.deepEqual(Object.keys(wo).sort(),Object.keys(zh).sort(),name+' WO/ZH parity');
  assert.ok(wo.msg||wo.real||wo.name,name+' functional text');
}
console.log('PASS DRIVER CLIENT 10 langues · syntaxe · mobile · URLs · WO/ZH');
