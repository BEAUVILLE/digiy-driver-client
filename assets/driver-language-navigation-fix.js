/* DIGIY DRIVER — barre métier autonome FR EN ES DE IT NL AR */
(function(){
  'use strict';
  if(window.__DIGIY_DRIVER_LANGUAGE_BAR__)return;
  window.__DIGIY_DRIVER_LANGUAGE_BAR__=true;

  var VERSION='20260730-driver7f';
  var SUPPORTED=['fr','en','es','de','it','nl','ar'];
  var LABELS={fr:'🇫🇷 FR',en:'🇬🇧 EN',es:'🇪🇸 ES',de:'🇩🇪 DE',it:'🇮🇹 IT',nl:'🇳🇱 NL',ar:'🌙 AR'};
  var ORIGIN='https://driver-client.digiylyfe.com/';

  function normalize(value){
    value=String(value||'').slice(0,2).toLowerCase();
    return SUPPORTED.indexOf(value)>=0?value:'fr';
  }

  function selected(){
    try{
      var query=new URL(location.href).searchParams.get('lang');
      if(SUPPORTED.indexOf(query)>=0)return query;
      var saved=localStorage.getItem('digiy-lang');
      if(SUPPORTED.indexOf(saved)>=0)return saved;
    }catch(e){}
    return 'fr';
  }

  function navigate(lang){
    lang=normalize(lang);
    try{localStorage.setItem('digiy-lang',lang)}catch(e){}
    try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}
    location.replace(ORIGIN+'?lang='+encodeURIComponent(lang)+'&v='+encodeURIComponent(VERSION));
  }

  function installStyle(){
    if(document.getElementById('driver-seven-language-style'))return;
    var style=document.createElement('style');
    style.id='driver-seven-language-style';
    style.textContent=
      '.lang-switch{display:grid!important;grid-template-columns:repeat(7,minmax(0,1fr))!important;gap:5px!important;width:100%!important;max-width:720px!important;flex:1 1 100%!important;order:20!important;pointer-events:auto!important}'+
      '.lang-switch button{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-width:0!important;min-height:40px!important;padding:0 7px!important;border:1px solid rgba(255,255,255,.18)!important;border-radius:999px!important;background:rgba(255,255,255,.06)!important;color:#ecfdf5!important;font-weight:900!important;cursor:pointer!important;pointer-events:auto!important;touch-action:manipulation!important;white-space:nowrap!important}'+
      '.lang-switch button.active{background:linear-gradient(135deg,#facc15,#f59e0b)!important;color:#111!important;border-color:#facc15!important}'+
      '@media(max-width:760px){.header-actions{width:100%!important}.lang-switch{grid-template-columns:repeat(4,minmax(0,1fr))!important;max-width:none!important}.lang-switch button{font-size:.76rem!important;padding:0 4px!important}}'+
      '@media(max-width:390px){.lang-switch button{font-size:.69rem!important}}';
    document.head.appendChild(style);
  }

  function render(){
    var bar=document.querySelector('.lang-switch');
    if(!bar)return false;
    var lang=selected();
    bar.innerHTML='';
    bar.setAttribute('aria-label',lang==='ar'?'اختيار اللغة':'Choisir la langue');
    SUPPORTED.forEach(function(code){
      var button=document.createElement('button');
      button.type='button';
      button.id=code==='fr'?'langFr':code==='en'?'langEn':'';
      button.dataset.driverLang=code;
      button.textContent=LABELS[code];
      button.className=code===lang?'active':'';
      button.setAttribute('aria-pressed',code===lang?'true':'false');
      button.addEventListener('click',function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        navigate(code);
      },true);
      bar.appendChild(button);
    });
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    return true;
  }

  function init(){
    installStyle();
    if(render())return;
    var tries=0;
    var timer=setInterval(function(){
      tries+=1;
      if(render()||tries>20)clearInterval(timer);
    },100);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
