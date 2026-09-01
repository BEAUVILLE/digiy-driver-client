/* DIGIY DRIVER — dépôt public d'une demande dans le carnet privé */
(()=>{
'use strict';
const API='https://wesqmwjjtsefyjnluosj.supabase.co/functions/v1/driver-client-request';
const SLUGS={lamine:'lamine-saly','baptiste-ambassadeur':'baptiste-driver-ambassador','nazir-driver':'nazir-driver'};
const T={
fr:{name:'Nom du client',phone:'Téléphone',namePh:'Votre nom',phonePh:'+221… / +33…',missing:"Merci de renseigner nom, téléphone, départ, destination et date avant d'envoyer la demande.",saving:'Enregistrement…'},
en:{name:'Customer name',phone:'Phone',namePh:'Your name',phonePh:'+221… / +33…',missing:'Please enter name, phone, pickup, destination and date before sending the request.',saving:'Saving…'},
es:{name:'Nombre del cliente',phone:'Teléfono',namePh:'Su nombre',phonePh:'+221… / +33…',missing:'Indique nombre, teléfono, salida, destino y fecha antes de enviar la solicitud.',saving:'Guardando…'},
pt:{name:'Nome do cliente',phone:'Telefone',namePh:'O seu nome',phonePh:'+221… / +33…',missing:'Indique nome, telefone, partida, destino e data antes de enviar o pedido.',saving:'A guardar…'},
de:{name:'Kundenname',phone:'Telefon',namePh:'Ihr Name',phonePh:'+221… / +33…',missing:'Bitte Name, Telefon, Abfahrt, Ziel und Datum eingeben.',saving:'Speichern…'},
it:{name:'Nome cliente',phone:'Telefono',namePh:'Il tuo nome',phonePh:'+221… / +33…',missing:'Inserisci nome, telefono, partenza, destinazione e data.',saving:'Salvataggio…'},
nl:{name:'Naam klant',phone:'Telefoon',namePh:'Uw naam',phonePh:'+221… / +33…',missing:'Vul naam, telefoon, vertrek, bestemming en datum in.',saving:'Opslaan…'},
ar:{name:'اسم العميل',phone:'الهاتف',namePh:'اسمك',phonePh:'+221… / +33…',missing:'يرجى إدخال الاسم والهاتف والانطلاق والوجهة والتاريخ.',saving:'جارٍ الحفظ…'}
};
const $=s=>document.querySelector(s);
const lang=()=>{const l=(document.documentElement.lang||'fr').slice(0,2).toLowerCase();return T[l]?l:'fr'};
function labels(){const t=T[lang()];const a=$('#digiyClientNameLabel'),b=$('#digiyClientPhoneLabel'),ai=$('#clientName'),bi=$('#clientPhone');if(a)a.textContent=t.name;if(b)b.textContent=t.phone;if(ai)ai.placeholder=t.namePh;if(bi)bi.placeholder=t.phonePh}
function install(){const grid=$('.grid4');if(!grid||$('#clientName'))return;const a=document.createElement('label');a.innerHTML='<span id="digiyClientNameLabel"></span><input id="clientName" class="field" autocomplete="name">';const b=document.createElement('label');b.innerHTML='<span id="digiyClientPhoneLabel"></span><input id="clientPhone" class="field" type="tel" autocomplete="tel">';grid.insertBefore(b,grid.firstChild);grid.insertBefore(a,grid.firstChild);labels()}
async function save(payload){try{const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});return r.ok}catch(_){return false}}
async function send(driverId,whatsapp,baseMessage,button){const t=T[lang()],name=($('#clientName')?.value||'').trim(),phone=($('#clientPhone')?.value||'').trim(),pickup=($('#pickup')?.value||'').trim(),destination=($('#dropoff')?.value||'').trim(),day=$('#date')?.value||'',time=$('#time')?.value||'',note=($('#note')?.value||'').trim(),slug=SLUGS[driverId];if(!name||!phone||!pickup||!destination||!day){alert(t.missing);return}const old=button?button.textContent:'';if(button){button.disabled=true;button.textContent=t.saving}if(slug)await save({driver_slug:slug,client_name:name,client_phone:phone,pickup,destination,ride_day:day,ride_time:time||null,note:note||null});if(button){button.disabled=false;button.textContent=old}const msg=['👤 '+name,'📞 '+phone,baseMessage].filter(Boolean).join('\n');location.href='https://wa.me/'+whatsapp+'?text='+encodeURIComponent(msg)}
window.DIGIY_DRIVER_REQUEST_CARNET_V1={install,labels,send,save};
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('[data-lang]'))setTimeout(labels,0)});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();