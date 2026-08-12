(()=>{
  'use strict';
  const SUP=['fr','en','es','pt','de','it','nl','ar'];
  const COPY={
    fr:'💳 ADHÉSION DRIVER · 19 900 FCFA / mois',
    en:'💳 DRIVER MEMBERSHIP · 19,900 FCFA / month',
    es:'💳 ADHESIÓN DRIVER · 19.900 FCFA / mes',
    pt:'💳 ADESÃO DRIVER · 19 900 FCFA / mês',
    de:'💳 DRIVER-MITGLIEDSCHAFT · 19.900 FCFA / Monat',
    it:'💳 ADESIONE DRIVER · 19.900 FCFA / mese',
    nl:'💳 DRIVER-LIDMAATSCHAP · 19.900 FCFA / maand',
    ar:'💳 اشتراك DRIVER · 19,900 FCFA / شهر'
  };
  function currentLang(){
    try{
      const q=(new URLSearchParams(location.search).get('lang')||'').slice(0,2).toLowerCase();
      if(SUP.includes(q))return q;
      const s=(localStorage.getItem('digiy-lang')||'').slice(0,2).toLowerCase();
      if(SUP.includes(s))return s;
    }catch(_){ }
    const b=(navigator.language||'fr').slice(0,2).toLowerCase();
    return SUP.includes(b)?b:'fr';
  }
  function mount(){
    if(document.getElementById('driverMembership19900'))return;
    const l=currentLang();
    const box=document.querySelector('.header-actions');
    if(!box)return;
    const a=document.createElement('a');
    a.id='driverMembership19900';
    a.className='btn green';
    a.href='https://digiylyfe.com/tarifs-adherents-1.html?lang='+encodeURIComponent(l);
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.dataset.driverTariff='1';
    a.textContent=COPY[l]||COPY.fr;
    a.setAttribute('aria-label',COPY[l]||COPY.fr);
    a.addEventListener('click',function(event){
      event.stopPropagation();
      if(event.defaultPrevented){
        event.preventDefault();
        window.open(a.href,'_blank','noopener,noreferrer');
      }
    });
    box.appendChild(a);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(mount,0),{once:true});
  else setTimeout(mount,0);
})();
