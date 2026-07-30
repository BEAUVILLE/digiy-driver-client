/* DIGIY DRIVER — bascule de langue stable par rechargement */
(function(){
  'use strict';
  if(window.__DIGIY_DRIVER_LANGUAGE_NAV_FIX__)return;
  window.__DIGIY_DRIVER_LANGUAGE_NAV_FIX__=true;

  var VERSION='20260730-driver7e';
  var SUPPORTED=['fr','en','es','de','it','nl','ar'];
  var ORIGIN='https://driver-client.digiylyfe.com/';

  function normalize(value){
    value=String(value||'').slice(0,2).toLowerCase();
    return SUPPORTED.indexOf(value)>=0?value:'fr';
  }

  function urlLanguage(){
    try{
      var value=new URL(location.href).searchParams.get('lang');
      return value&&SUPPORTED.indexOf(value)>=0?value:null;
    }catch(e){return null;}
  }

  function navigate(lang){
    lang=normalize(lang);
    try{localStorage.setItem('digiy-lang',lang)}catch(e){}
    try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(e){}
    location.assign(ORIGIN+'?lang='+encodeURIComponent(lang)+'&v='+encodeURIComponent(VERSION));
  }

  function languageFromControl(control){
    if(!control)return null;
    if(control.id==='langFr')return'fr';
    if(control.id==='langEn')return'en';
    var value=control.getAttribute('data-digiy-lang')||control.getAttribute('data-lang')||'';
    value=String(value).slice(0,2).toLowerCase();
    return SUPPORTED.indexOf(value)>=0?value:null;
  }

  document.addEventListener('click',function(event){
    var control=event.target&&event.target.closest
      ? event.target.closest('#langFr,#langEn,[data-digiy-lang],[data-lang]')
      : null;
    var lang=languageFromControl(control);
    if(!lang)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    navigate(lang);
  },true);

  document.addEventListener('digiy:languagechange',function(event){
    var requested=normalize(event.detail&&event.detail.lang);
    var active=urlLanguage();
    if(active!==requested)navigate(requested);
  },true);

  if(urlLanguage()==='fr'){
    document.documentElement.lang='fr';
    document.documentElement.dir='ltr';
  }
})();
