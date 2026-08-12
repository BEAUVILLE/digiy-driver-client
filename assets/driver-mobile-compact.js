/* DIGIY DRIVER CLIENT — force compact WORLD8 on mobile — 2026-08-12 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:720px)').matches) return;

  function compactWorld8(){
    var nativeBar=document.querySelector('.lang-switch');
    if(nativeBar) nativeBar.style.setProperty('display','none','important');

    document.querySelectorAll('[data-world8-bar]').forEach(function(bar){
      bar.style.setProperty('display','flex','important');
      bar.style.setProperty('align-items','center','important');
      bar.style.setProperty('justify-content','center','important');
      bar.style.setProperty('gap','2px','important');
      bar.style.setProperty('padding','2px 3px','important');
      bar.style.setProperty('margin','2px auto 0','important');
      bar.style.setProperty('width','calc(100% - 12px)','important');
      bar.style.setProperty('min-height','28px','important');
      bar.style.setProperty('border-radius','12px','important');
      bar.style.setProperty('overflow-x','auto','important');
      bar.style.setProperty('box-sizing','border-box','important');

      bar.querySelectorAll('[data-world8-lang]').forEach(function(a){
        var lang=(a.getAttribute('data-world8-lang')||'').slice(0,2).toUpperCase();
        if(lang) a.textContent=lang;
        a.style.setProperty('min-width','28px','important');
        a.style.setProperty('width','28px','important');
        a.style.setProperty('min-height','22px','important');
        a.style.setProperty('height','22px','important');
        a.style.setProperty('padding','0 3px','important');
        a.style.setProperty('border-radius','999px','important');
        a.style.setProperty('font-size','8.5px','important');
        a.style.setProperty('line-height','1','important');
        a.style.setProperty('font-weight','1000','important');
      });
    });
  }

  function start(){
    compactWorld8();
    var observer=new MutationObserver(compactWorld8);
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(compactWorld8,50);
    setTimeout(compactWorld8,250);
    setTimeout(function(){compactWorld8();observer.disconnect();},1200);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
