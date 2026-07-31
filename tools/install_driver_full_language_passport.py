from pathlib import Path

INDEX = Path("index.html")
I18N = Path("assets/driver-i18n-full.js")
NAV = Path("assets/driver-language-navigation-fix.js")
MARKER = "DIGIY DRIVER FULL LANGUAGE PASSPORT v1"
VERSION_OLD = "20260730-driver7g"
VERSION_NEW = "20260731-driver7-passport-v1"

index = INDEX.read_text(encoding="utf-8")
i18n = I18N.read_text(encoding="utf-8")
nav = NAV.read_text(encoding="utf-8")

if MARKER in i18n:
    print("Passeport DRIVER déjà installé")
    raise SystemExit(0)

index = index.replace(VERSION_OLD, VERSION_NEW)
nav = nav.replace(VERSION_OLD, VERSION_NEW)

i18n = i18n.replace(
    "/* DIGIY DRIVER — vrai pack multilingue FR/EN/ES/DE/IT/NL/AR */",
    "/* DIGIY DRIVER — vrai pack multilingue FR/EN/ES/DE/IT/NL/AR */\n/* " + MARKER + " */",
    1,
)

seo_anchor = "  var ASSISTANCE = '+221771342889';\n"
seo_block = r'''

  var SEO = {
    fr:{title:'DIGIY DRIVER — Chauffeurs privés et transferts',desc:'Préparez une course ou un transfert, puis contactez directement un chauffeur partenaire. Paiement direct et 0% commission DIGIY.'},
    en:{title:'DIGIY DRIVER — Private drivers and transfers',desc:'Prepare a ride or transfer, then contact a partner driver directly. Direct payment and 0% DIGIY commission.'},
    es:{title:'DIGIY DRIVER — Conductores privados y traslados',desc:'Prepara un trayecto o traslado y contacta directamente con un conductor asociado. Pago directo y 0% de comisión DIGIY.'},
    de:{title:'DIGIY DRIVER — Private Fahrer und Transfers',desc:'Bereite eine Fahrt oder einen Transfer vor und kontaktiere direkt einen Partnerfahrer. Direkte Zahlung und 0% DIGIY-Provision.'},
    it:{title:'DIGIY DRIVER — Autisti privati e trasferimenti',desc:'Prepara una corsa o un trasferimento e contatta direttamente un autista partner. Pagamento diretto e 0% commissioni DIGIY.'},
    nl:{title:'DIGIY DRIVER — Privéchauffeurs en transfers',desc:'Bereid een rit of transfer voor en neem rechtstreeks contact op met een partnerchauffeur. Directe betaling en 0% DIGIY-commissie.'},
    ar:{title:'DIGIY DRIVER — سائقون خاصون وخدمات نقل',desc:'حضّر رحلة أو خدمة نقل ثم تواصل مباشرة مع سائق شريك. الدفع مباشر وعمولة DIGIY تساوي 0%.'}
  };
'''
if seo_anchor not in i18n:
    raise SystemExit("Ancre ASSISTANCE introuvable")
i18n = i18n.replace(seo_anchor, seo_anchor + seo_block, 1)

functions_anchor = "  function applyStatic(){\n"
functions_block = r'''  function isDigiyHost(hostname){
    var host=String(hostname||'').toLowerCase();
    return host==='digiylyfe.com'||host.endsWith('.digiylyfe.com');
  }

  function linkWithLanguage(href){
    try{
      var url=new URL(href,location.href);
      if(!/^https?:$/.test(url.protocol)||!isDigiyHost(url.hostname))return href;
      url.searchParams.set('lang',state.lang);
      return url.toString();
    }catch(e){return href;}
  }

  function propagateLanguage(root){
    var scope=root&&root.querySelectorAll?root:document;
    scope.querySelectorAll('a[href]').forEach(function(link){
      var current=link.getAttribute('href');
      if(!current||current.charAt(0)==='#')return;
      var next=linkWithLanguage(current);
      if(next!==current)link.setAttribute('href',next);
    });
  }

  function applySeo(){
    var seo=SEO[state.lang]||SEO.fr;
    document.title=seo.title;
    var description=document.querySelector('meta[name="description"]');
    if(description)description.setAttribute('content',seo.desc);
    var ogTitle=document.querySelector('meta[property="og:title"]');
    if(ogTitle)ogTitle.setAttribute('content',seo.title);
    var ogDescription=document.querySelector('meta[property="og:description"]');
    if(ogDescription)ogDescription.setAttribute('content',seo.desc);
    var twitterTitle=document.querySelector('meta[name="twitter:title"]');
    if(twitterTitle)twitterTitle.setAttribute('content',seo.title);
    var twitterDescription=document.querySelector('meta[name="twitter:description"]');
    if(twitterDescription)twitterDescription.setAttribute('content',seo.desc);
  }

'''
if functions_anchor not in i18n:
    raise SystemExit("Fonction applyStatic introuvable")
i18n = i18n.replace(functions_anchor, functions_block + functions_anchor, 1)

old_apply_head = "    document.documentElement.lang = state.lang;\n    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';\n    if (!p) return;"
new_apply_head = "    document.documentElement.lang = state.lang;\n    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';\n    applySeo();\n    if (!p) { propagateLanguage(document); return; }"
if old_apply_head not in i18n:
    raise SystemExit("Tête applyStatic introuvable")
i18n = i18n.replace(old_apply_head, new_apply_head, 1)

old_apply_end = "      } else {\n        title.textContent = p.locationTitle;\n      }\n    }\n  }\n\n  function messageData(){"
new_apply_end = "      } else {\n        title.textContent = p.locationTitle;\n      }\n    }\n    propagateLanguage(document);\n  }\n\n  function messageData(){"
if old_apply_end not in i18n:
    raise SystemExit("Fin applyStatic introuvable")
i18n = i18n.replace(old_apply_end, new_apply_end, 1)

old_init = "    setLanguage(detect(), false);\n    observer.observe(document.body, {childList:true,subtree:true,characterData:true});"
new_init = "    setLanguage(detect(), false);\n    propagateLanguage(document);\n    observer.observe(document.body, {childList:true,subtree:true,characterData:true});"
if old_init not in i18n:
    raise SystemExit("Initialisation introuvable")
i18n = i18n.replace(old_init, new_init, 1)

checks = {
    "index_version": VERSION_NEW in index,
    "nav_version": VERSION_NEW in nav,
    "marker": MARKER in i18n,
    "seo": "function applySeo()" in i18n,
    "passport": "function propagateLanguage(root)" in i18n,
    "languages": all(("'" + code + "'") in i18n for code in ["fr","en","es","de","it","nl","ar"]),
}
failed = [name for name, ok in checks.items() if not ok]
if failed:
    raise SystemExit("Contrôles échoués: " + ", ".join(failed))

INDEX.write_text(index, encoding="utf-8")
I18N.write_text(i18n, encoding="utf-8")
NAV.write_text(nav, encoding="utf-8")
print("DRIVER client : parcours 7 langues et passeport installés")
