// DIGIY DRIVER · 10 langues sans changer le moteur ni les données personnelles.
const fs=require('fs'), assert=require('node:assert/strict');
const page=fs.readFileSync('app.html','utf8');
const buttons=[...page.matchAll(/data-lang="(fr|en|es|pt|it|de|nl|ar|wo|zh)"/g)].map(m=>m[1]);
const languages=['fr','en','es','pt','it','de','nl','ar','wo','zh'];
assert.equal(buttons.length,10,'10 boutons de langue attendus');
assert.deepEqual(new Set(buttons),new Set(languages));
const begin=page.indexOf('const T={');
assert.ok(begin>0);
const start=begin+'const T='.length;
const end=page.indexOf(';\n  let DRIVERS=',start);
assert.ok(end>start,'fin du dictionnaire attendue');
const T=new Function('return ('+page.slice(start,end)+')')();
assert.deepEqual(new Set(Object.keys(T)),new Set(languages));
for(const lang of languages) {
  assert.deepEqual(new Set(Object.keys(T[lang])),new Set(Object.keys(T.fr)),'complet : '+lang);
  for(const [key,value] of Object.entries(T[lang]))assert.ok(value!==null&&value!==undefined&&value!=='','manque '+lang+'.'+key);
}
assert.notEqual(T.wo.title,T.fr.title);
assert.notEqual(T.zh.title,T.fr.title);
assert.ok(page.includes('🚓 Police 17'));
assert.ok(page.includes('🚑 SAMU 1515'));
assert.ok(page.includes('0 % commission')||page.includes('0% commission'));
assert.ok(page.includes('digiy_driver_public_list_v1'));
assert.ok(page.includes('window.DIGIY_DRIVER_REQUEST_CARNET_V1'));
const scripts=page.split('<script').slice(1).map(x=>{const a=x.indexOf('>'),b=x.indexOf('</script>');return [x.slice(0,a),x.slice(a+1,b)]}).filter(x=>x[1].trim()&&!x[0].includes('application/ld+json'));
for(const m of scripts)new Function(m[1]);
console.log('DIGIY DRIVER: 10/10 langues, JS et doctrines contrôlés');
