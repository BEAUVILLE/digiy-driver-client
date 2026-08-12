/* DIGIY DRIVER CLIENT — guaranteed compact WORLD8 mobile bar — 2026-08-12 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:720px)').matches) return;

  var SUPPORTED=['fr','en','es','pt','de','it','nl','ar'];

  function currentLang(){
    var lang='';
    try{
      var q=new URLSearchParams(location.search);
      lang=(q.get('lang')||'').slice(0,2).toLowerCase();
      if(SUPPORTED.indexOf(lang)<0) lang=(localStorage.getItem('digiy-lang')||localStorage.getItem('digiy_lang')||'').slice(0,2).toLowerCase();
    }catch(e){}
    if(SUPPORTED.indexOf(lang)<0) lang=(document.documentElement.lang||'fr').slice(0,2).toLowerCase();
    return SUPPORTED.indexOf(lang)>=0?lang:'fr';
  }

  function makeHref(lang){
    try{
      var u=new URL(location.href);
      u.searchParams.set('lang',lang);
      return u.pathname+u.search+u.hash;
    }catch(e){return '?lang='+lang;}
  }

  function styleBar(bar){
    bar.style.setProperty('display','flex','important');
    bar.style.setProperty('align-items','center','important');
    bar.style.setProperty('justify-content','center','important');
    bar.style.setProperty('gap','2px','important');
    bar.style.setProperty('padding','2px 3px','important');
    bar.style.setProperty('margin','3px 7px 0','important');
    bar.style.setProperty('min-height','26px','important');
    bar.style.setProperty('border-radius','11px','important');
    bar.style.setProperty('overflow-x','auto','important');
    bar.style.setProperty('overflow-y','hidden','important');
    bar.style.setProperty('box-sizing','border-box','important');
    bar.style.setProperty('background','rgba(3,18,12,.88)','important');
    bar.style.setProperty('border','1px solid rgba(255,255,255,.14)','important');
    bar.style.setProperty('scrollbar-width','none','important');
  }

  function styleLink(a,active){
    a.style.setProperty('flex','0 0 auto','important');
    a.style.setProperty('min-width','28px','important');
    a.style.setProperty('width','28px','important');
    a.style.setProperty('min-height','21px','important');
    a.style.setProperty('height','21px','important');
    a.style.setProperty('padding','0 2px','important');
    a.style.setProperty('border-radius','999px','important');
    a.style.setProperty('display','inline-flex','important');
    a.style.setProperty('align-items','center','important');
    a.style.setProperty('justify-content','center','important');
    a.style.setProperty('text-decoration','none','important');
    a.style.setProperty('font','1000 8.5px/1 system-ui,-apple-system,Segoe UI,Arial,sans-serif','important');
    a.style.setProperty('border','1px solid rgba(255,255,255,.16)','important');
    a.style.setProperty('color',active?'#06140f':'#fff','important');
    a.style.setProperty('background',active?'linear-gradient(135deg,#f6c453,#22c55e)':'rgba(255,255,255,.06)','important');
  }

  function ensureBar(){
    var lang=currentLang();
    var bar=document.getElementById('driverMobileLangBar');
    if(!bar){
      bar=document.createElement('nav');
      bar.id='driverMobileLangBar';
      bar.setAttribute('aria-label','Languages');
      bar.setAttribute('data-driver-mobile-langbar','1');
      var header=document.querySelector('.header');
      if(header && header.parentNode) header.insertAdjacentElement('afterend',bar);
      else document.body.insertAdjacentElement('afterbegin',bar);
    }

    styleBar(bar);
    if(bar.children.length!==SUPPORTED.length){
      bar.textContent='';
      SUPPORTED.forEach(function(l){
        var a=document.createElement('a');
        a.href=makeHref(l);
        a.setAttribute('data-driver-lang',l);
        a.textContent=l.toUpperCase();
        a.addEventListener('click',function(){
          try{localStorage.setItem('digiy-lang',l);localStorage.setItem('digiy_lang',l);}catch(e){}
        });
        bar.appendChild(a);
      });
    }
    bar.querySelectorAll('[data-driver-lang]').forEach(function(a){
      styleLink(a,a.getAttribute('data-driver-lang')===lang);
    });

    /* Hide duplicates only AFTER our guaranteed 8-language bar exists. */
    var nativeBar=document.querySelector('.lang-switch');
    if(nativeBar) nativeBar.style.setProperty('display','none','important');
    document.querySelectorAll('[data-world8-bar]').forEach(function(worldBar){
      worldBar.style.setProperty('display','none','important');
    });
  }

  function start(){
    ensureBar();
    var observer=new MutationObserver(function(){ensureBar();});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(ensureBar,50);
    setTimeout(ensureBar,250);
    setTimeout(ensureBar,900);
    setTimeout(function(){ensureBar();observer.disconnect();},1800);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
