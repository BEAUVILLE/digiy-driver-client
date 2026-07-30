/* DIGIY DRIVER — vrai pack multilingue FR/EN/ES/DE/IT/NL/AR */
(function () {
  'use strict';

  var SUPPORTED = ['fr','en','es','de','it','nl','ar'];
  var ASSISTANCE = '+221771342889';

  var I18N = {
    en: {
      brandSub:'Client • simple booking • DIGIY assistance',
      heroEyebrow:'DRIVER client • Africa · France · Diaspora',
      heroTitle:'Book a ride <span>without breaking the job</span>',
      heroSub:'Choose your pickup, destination and vehicle. DIGIY prepares the request, then DRIVER assistance forwards it to the right driver. DIGIY takes no commission and does not push prices down.',
      asideTitle:'Field doctrine', asideBig:'Fair prices.<br>Direct contact.<br>0% commission.',
      asideSub:'DIGIY DRIVER connects people cleanly. The phone does the rest.',
      bookingTitle:'Book a ride', bookingSub:'Pickup, destination, vehicle and phone. DRIVER assistance forwards the request to the right driver.',
      pickupPh:'Pickup point', dropoffPh:'Destination', phonePh:'Your reachable number (+221 or +33...)',
      vehEco:'Eco', vehConfort:'Comfort', vehPremium:'Premium', vehMoto:'Motorbike',
      vehTime1:'field', vehTime2:'field', vehTime3:'field', vehTime4:'compatible routes',
      summaryDistance:'Estimated distance', summaryDuration:'Estimated time', summaryVehicle:'Vehicle', summaryTotal:'Field estimate',
      confirmBtn:'🚗 Prepare my request', backBtn:'← Back to DIGIYLYFE',
      footNote:'Direct payment to the driver • 0% DIGIY commission • <a href="https://digiylyfe.com" target="_blank">Main site</a>',
      contactTitle:'DRIVER request ready', contactSub:'The summary is now locked. The same message will be used for WhatsApp or SMS.',
      contactPickup:'Pickup', contactDropoff:'Destination', contactVehicle:'Vehicle', contactPhone:'Phone', contactPrice:'Field estimate',
      messageLabel:'Exact message prepared', messageHint:'Check it before opening WhatsApp or your SMS app. You then confirm sending on your phone.',
      whatsappBtn:'💬 Send by WhatsApp', smsBtn:'✉️ Send by SMS', copyBtn:'📋 Copy message', copiedBtn:'✅ Message copied',
      callBtn:'📞 Call assistance', resetBtn:'✕ Start again', locationTitle:'Choose a place', noPlace:'No place found.',
      partnerTitle:'Partner driver in Saly',
      partnerSub:'For a Saly → AIBD transfer or a Petite Côte trip, open Lamine’s profile and confirm the date, time, fare and availability directly with him.',
      partnerProfile:'🚗 View Lamine’s profile', partnerWhatsApp:'💬 Direct WhatsApp'
    },
    es: {
      brandSub:'Cliente • solicitud sencilla • asistencia DIGIY',
      heroEyebrow:'Cliente DRIVER • África · Francia · Diáspora',
      heroTitle:'Reserva un trayecto <span>sin perjudicar el oficio</span>',
      heroSub:'Elige el punto de salida, el destino y el vehículo. DIGIY prepara la solicitud y la asistencia DRIVER la transmite al conductor adecuado. DIGIY no cobra comisión ni empuja los precios a la baja.',
      asideTitle:'Doctrina de terreno', asideBig:'Precios dignos.<br>Contacto directo.<br>0% de comisión.',
      asideSub:'DIGIY DRIVER conecta a las personas de forma clara. El teléfono hace el resto.',
      bookingTitle:'Reservar un trayecto', bookingSub:'Salida, destino, vehículo y teléfono. La asistencia DRIVER transmite la solicitud al conductor adecuado.',
      pickupPh:'Punto de salida', dropoffPh:'Destino', phonePh:'Tu número de contacto (+221 o +33...)',
      vehEco:'Económico', vehConfort:'Confort', vehPremium:'Premium', vehMoto:'Moto',
      vehTime1:'terreno', vehTime2:'terreno', vehTime3:'terreno', vehTime4:'trayectos compatibles',
      summaryDistance:'Distancia estimada', summaryDuration:'Duración estimada', summaryVehicle:'Vehículo', summaryTotal:'Estimación de terreno',
      confirmBtn:'🚗 Preparar mi solicitud', backBtn:'← Volver a DIGIYLYFE',
      footNote:'Pago directo al conductor • 0% de comisión DIGIY • <a href="https://digiylyfe.com" target="_blank">Sitio principal</a>',
      contactTitle:'Solicitud DRIVER lista', contactSub:'El resumen está bloqueado. Se utilizará el mismo mensaje para WhatsApp o SMS.',
      contactPickup:'Salida', contactDropoff:'Destino', contactVehicle:'Vehículo', contactPhone:'Teléfono', contactPrice:'Estimación de terreno',
      messageLabel:'Mensaje exacto preparado', messageHint:'Revísalo antes de abrir WhatsApp o la aplicación SMS. Confirmarás el envío en tu teléfono.',
      whatsappBtn:'💬 Enviar por WhatsApp', smsBtn:'✉️ Enviar por SMS', copyBtn:'📋 Copiar mensaje', copiedBtn:'✅ Mensaje copiado',
      callBtn:'📞 Llamar a asistencia', resetBtn:'✕ Empezar de nuevo', locationTitle:'Elegir un lugar', noPlace:'No se encontró ningún lugar.',
      partnerTitle:'Conductor asociado en Saly',
      partnerSub:'Para un traslado Saly → AIBD o un trayecto por la Petite Côte, consulta el perfil de Lamine y confirma directamente con él la fecha, la hora, la tarifa y la disponibilidad.',
      partnerProfile:'🚗 Ver el perfil de Lamine', partnerWhatsApp:'💬 WhatsApp directo'
    },
    de: {
      brandSub:'Kunde • einfache Anfrage • DIGIY-Unterstützung',
      heroEyebrow:'DRIVER-Kunde • Afrika · Frankreich · Diaspora',
      heroTitle:'Eine Fahrt buchen, <span>ohne den Beruf zu entwerten</span>',
      heroSub:'Wähle Abfahrt, Ziel und Fahrzeug. DIGIY bereitet die Anfrage vor, anschließend leitet die DRIVER-Unterstützung sie an den passenden Fahrer weiter. DIGIY nimmt keine Provision und drückt die Preise nicht.',
      asideTitle:'Praxisgrundsatz', asideBig:'Faire Preise.<br>Direkter Kontakt.<br>0% Provision.',
      asideSub:'DIGIY DRIVER bringt Menschen sauber zusammen. Das Telefon erledigt den Rest.',
      bookingTitle:'Fahrt buchen', bookingSub:'Abfahrt, Ziel, Fahrzeug und Telefon. Die DRIVER-Unterstützung leitet die Anfrage an den passenden Fahrer weiter.',
      pickupPh:'Abfahrtsort', dropoffPh:'Ziel', phonePh:'Deine erreichbare Nummer (+221 oder +33...)',
      vehEco:'Eco', vehConfort:'Komfort', vehPremium:'Premium', vehMoto:'Motorrad',
      vehTime1:'vor Ort', vehTime2:'vor Ort', vehTime3:'vor Ort', vehTime4:'geeignete Strecken',
      summaryDistance:'Geschätzte Entfernung', summaryDuration:'Geschätzte Dauer', summaryVehicle:'Fahrzeug', summaryTotal:'Vor-Ort-Schätzung',
      confirmBtn:'🚗 Anfrage vorbereiten', backBtn:'← Zurück zu DIGIYLYFE',
      footNote:'Direkte Zahlung an den Fahrer • 0% DIGIY-Provision • <a href="https://digiylyfe.com" target="_blank">Hauptseite</a>',
      contactTitle:'DRIVER-Anfrage bereit', contactSub:'Die Zusammenfassung ist jetzt gesperrt. Dieselbe Nachricht wird für WhatsApp oder SMS verwendet.',
      contactPickup:'Abfahrt', contactDropoff:'Ziel', contactVehicle:'Fahrzeug', contactPhone:'Telefon', contactPrice:'Vor-Ort-Schätzung',
      messageLabel:'Vorbereitete Nachricht', messageHint:'Prüfe sie, bevor du WhatsApp oder die SMS-App öffnest. Das Senden bestätigst du anschließend auf deinem Telefon.',
      whatsappBtn:'💬 Per WhatsApp senden', smsBtn:'✉️ Per SMS senden', copyBtn:'📋 Nachricht kopieren', copiedBtn:'✅ Nachricht kopiert',
      callBtn:'📞 Unterstützung anrufen', resetBtn:'✕ Neu beginnen', locationTitle:'Ort auswählen', noPlace:'Kein Ort gefunden.',
      partnerTitle:'Partnerfahrer in Saly',
      partnerSub:'Für einen Transfer Saly → AIBD oder eine Fahrt an der Petite Côte öffne Lamines Profil und bestätige Datum, Uhrzeit, Preis und Verfügbarkeit direkt mit ihm.',
      partnerProfile:'🚗 Lamines Profil ansehen', partnerWhatsApp:'💬 Direktes WhatsApp'
    },
    it: {
      brandSub:'Cliente • richiesta semplice • assistenza DIGIY',
      heroEyebrow:'Cliente DRIVER • Africa · Francia · Diaspora',
      heroTitle:'Prenota una corsa <span>senza svalutare il mestiere</span>',
      heroSub:'Scegli partenza, destinazione e veicolo. DIGIY prepara la richiesta, poi l’assistenza DRIVER la inoltra all’autista adatto. DIGIY non prende commissioni e non spinge i prezzi verso il basso.',
      asideTitle:'Dottrina sul campo', asideBig:'Prezzi giusti.<br>Contatto diretto.<br>0% commissioni.',
      asideSub:'DIGIY DRIVER mette in contatto le persone in modo chiaro. Il telefono fa il resto.',
      bookingTitle:'Prenota una corsa', bookingSub:'Partenza, destinazione, veicolo e telefono. L’assistenza DRIVER inoltra la richiesta all’autista adatto.',
      pickupPh:'Punto di partenza', dropoffPh:'Destinazione', phonePh:'Il tuo numero raggiungibile (+221 o +33...)',
      vehEco:'Eco', vehConfort:'Comfort', vehPremium:'Premium', vehMoto:'Moto',
      vehTime1:'sul campo', vehTime2:'sul campo', vehTime3:'sul campo', vehTime4:'percorsi compatibili',
      summaryDistance:'Distanza stimata', summaryDuration:'Durata stimata', summaryVehicle:'Veicolo', summaryTotal:'Stima sul campo',
      confirmBtn:'🚗 Prepara la mia richiesta', backBtn:'← Torna a DIGIYLYFE',
      footNote:'Pagamento diretto all’autista • 0% commissioni DIGIY • <a href="https://digiylyfe.com" target="_blank">Sito principale</a>',
      contactTitle:'Richiesta DRIVER pronta', contactSub:'Il riepilogo è ora bloccato. Lo stesso messaggio verrà usato per WhatsApp o SMS.',
      contactPickup:'Partenza', contactDropoff:'Destinazione', contactVehicle:'Veicolo', contactPhone:'Telefono', contactPrice:'Stima sul campo',
      messageLabel:'Messaggio esatto preparato', messageHint:'Controllalo prima di aprire WhatsApp o l’app SMS. Confermerai poi l’invio sul telefono.',
      whatsappBtn:'💬 Invia con WhatsApp', smsBtn:'✉️ Invia via SMS', copyBtn:'📋 Copia messaggio', copiedBtn:'✅ Messaggio copiato',
      callBtn:'📞 Chiama assistenza', resetBtn:'✕ Ricomincia', locationTitle:'Scegli un luogo', noPlace:'Nessun luogo trovato.',
      partnerTitle:'Autista partner a Saly',
      partnerSub:'Per un trasferimento Saly → AIBD o un viaggio sulla Petite Côte, apri il profilo di Lamine e conferma direttamente con lui data, ora, tariffa e disponibilità.',
      partnerProfile:'🚗 Vedi il profilo di Lamine', partnerWhatsApp:'💬 WhatsApp diretto'
    },
    nl: {
      brandSub:'Klant • eenvoudige aanvraag • DIGIY-assistentie',
      heroEyebrow:'DRIVER-klant • Afrika · Frankrijk · Diaspora',
      heroTitle:'Boek een rit <span>zonder het vak te ondermijnen</span>',
      heroSub:'Kies vertrekpunt, bestemming en voertuig. DIGIY bereidt de aanvraag voor en DRIVER-assistentie stuurt die door naar de juiste chauffeur. DIGIY rekent geen commissie en drukt de prijzen niet.',
      asideTitle:'Praktijkdoctrine', asideBig:'Eerlijke prijzen.<br>Direct contact.<br>0% commissie.',
      asideSub:'DIGIY DRIVER brengt mensen netjes met elkaar in contact. De telefoon doet de rest.',
      bookingTitle:'Een rit boeken', bookingSub:'Vertrek, bestemming, voertuig en telefoon. DRIVER-assistentie stuurt de aanvraag door naar de juiste chauffeur.',
      pickupPh:'Vertrekpunt', dropoffPh:'Bestemming', phonePh:'Je bereikbare nummer (+221 of +33...)',
      vehEco:'Eco', vehConfort:'Comfort', vehPremium:'Premium', vehMoto:'Motor',
      vehTime1:'lokaal', vehTime2:'lokaal', vehTime3:'lokaal', vehTime4:'geschikte ritten',
      summaryDistance:'Geschatte afstand', summaryDuration:'Geschatte duur', summaryVehicle:'Voertuig', summaryTotal:'Lokale schatting',
      confirmBtn:'🚗 Mijn aanvraag voorbereiden', backBtn:'← Terug naar DIGIYLYFE',
      footNote:'Directe betaling aan de chauffeur • 0% DIGIY-commissie • <a href="https://digiylyfe.com" target="_blank">Hoofdsite</a>',
      contactTitle:'DRIVER-aanvraag gereed', contactSub:'De samenvatting staat nu vast. Hetzelfde bericht wordt voor WhatsApp of SMS gebruikt.',
      contactPickup:'Vertrek', contactDropoff:'Bestemming', contactVehicle:'Voertuig', contactPhone:'Telefoon', contactPrice:'Lokale schatting',
      messageLabel:'Exact bericht voorbereid', messageHint:'Controleer het voordat je WhatsApp of de SMS-app opent. Daarna bevestig je het verzenden op je telefoon.',
      whatsappBtn:'💬 Via WhatsApp verzenden', smsBtn:'✉️ Via SMS verzenden', copyBtn:'📋 Bericht kopiëren', copiedBtn:'✅ Bericht gekopieerd',
      callBtn:'📞 Assistentie bellen', resetBtn:'✕ Opnieuw beginnen', locationTitle:'Kies een plaats', noPlace:'Geen plaats gevonden.',
      partnerTitle:'Partnerchauffeur in Saly',
      partnerSub:'Open voor een transfer Saly → AIBD of een rit aan de Petite Côte het profiel van Lamine en bevestig datum, tijd, prijs en beschikbaarheid rechtstreeks met hem.',
      partnerProfile:'🚗 Profiel van Lamine bekijken', partnerWhatsApp:'💬 Direct WhatsApp'
    },
    ar: {
      brandSub:'العميل • طلب بسيط • مساعدة DIGIY',
      heroEyebrow:'عميل DRIVER • إفريقيا · فرنسا · الجالية',
      heroTitle:'احجز رحلة <span>مع احترام مهنة السائق</span>',
      heroSub:'اختر نقطة الانطلاق والوجهة ونوع المركبة. تُحضّر DIGIY الطلب ثم ترسله مساعدة DRIVER إلى السائق المناسب. لا تأخذ DIGIY أي عمولة ولا تضغط الأسعار نحو الأسفل.',
      asideTitle:'مبدأ العمل الميداني', asideBig:'أسعار عادلة.<br>تواصل مباشر.<br>0% عمولة.',
      asideSub:'تربط DIGIY DRIVER الناس بطريقة واضحة، والهاتف يكمل الباقي.',
      bookingTitle:'احجز رحلة', bookingSub:'نقطة الانطلاق والوجهة والمركبة ورقم الهاتف. ترسل مساعدة DRIVER الطلب إلى السائق المناسب.',
      pickupPh:'نقطة الانطلاق', dropoffPh:'الوجهة', phonePh:'رقم هاتفك المتاح (+221 أو +33...)',
      vehEco:'اقتصادي', vehConfort:'مريح', vehPremium:'مميز', vehMoto:'دراجة نارية',
      vehTime1:'ميداني', vehTime2:'ميداني', vehTime3:'ميداني', vehTime4:'للرحلات المناسبة',
      summaryDistance:'المسافة التقديرية', summaryDuration:'المدة التقديرية', summaryVehicle:'المركبة', summaryTotal:'التقدير الميداني',
      confirmBtn:'🚗 تحضير طلبي', backBtn:'العودة إلى DIGIYLYFE ←',
      footNote:'الدفع مباشرة للسائق • 0% عمولة DIGIY • <a href="https://digiylyfe.com" target="_blank">الموقع الرئيسي</a>',
      contactTitle:'طلب DRIVER جاهز', contactSub:'تم تثبيت الملخص. ستُستخدم الرسالة نفسها في واتساب أو الرسائل القصيرة.',
      contactPickup:'نقطة الانطلاق', contactDropoff:'الوجهة', contactVehicle:'المركبة', contactPhone:'الهاتف', contactPrice:'التقدير الميداني',
      messageLabel:'الرسالة الجاهزة', messageHint:'راجعها قبل فتح واتساب أو تطبيق الرسائل القصيرة، ثم أكد الإرسال على هاتفك.',
      whatsappBtn:'💬 إرسال عبر واتساب', smsBtn:'✉️ إرسال عبر رسالة قصيرة', copyBtn:'📋 نسخ الرسالة', copiedBtn:'✅ تم نسخ الرسالة',
      callBtn:'📞 الاتصال بالمساعدة', resetBtn:'✕ البدء من جديد', locationTitle:'اختر مكانًا', noPlace:'لم يتم العثور على مكان.',
      partnerTitle:'سائق شريك في سالي',
      partnerSub:'لرحلة من سالي إلى AIBD أو داخل الساحل الصغير، افتح ملف لامين وأكد معه مباشرة التاريخ والوقت والسعر والتوفر.',
      partnerProfile:'🚗 عرض ملف لامين', partnerWhatsApp:'💬 واتساب مباشر'
    }
  };

  var ZONES = {
    fr:{aeroports:'✈️ AÉROPORTS',petite_cote:'🏖️ SALY & PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR & BANLIEUE',autres_villes:'🇸🇳 AUTRES VILLES'},
    en:{aeroports:'✈️ AIRPORTS',petite_cote:'🏖️ SALY & PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR & SUBURBS',autres_villes:'🇸🇳 OTHER CITIES'},
    es:{aeroports:'✈️ AEROPUERTOS',petite_cote:'🏖️ SALY Y PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR Y PERIFERIA',autres_villes:'🇸🇳 OTRAS CIUDADES'},
    de:{aeroports:'✈️ FLUGHÄFEN',petite_cote:'🏖️ SALY & PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR & VORORTE',autres_villes:'🇸🇳 ANDERE STÄDTE'},
    it:{aeroports:'✈️ AEROPORTI',petite_cote:'🏖️ SALY E PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR E PERIFERIA',autres_villes:'🇸🇳 ALTRE CITTÀ'},
    nl:{aeroports:'✈️ LUCHTHAVENS',petite_cote:'🏖️ SALY & PETITE CÔTE',mbour:'🏙️ MBOUR',dakar:'🏙️ DAKAR & VOORSTEDEN',autres_villes:'🇸🇳 ANDERE STEDEN'},
    ar:{aeroports:'✈️ المطارات',petite_cote:'🏖️ سالي والساحل الصغير',mbour:'🏙️ مبور',dakar:'🏙️ داكار والضواحي',autres_villes:'🇸🇳 مدن أخرى'}
  };

  var ERRORS = {
    en:['Please choose a pickup and a destination.','Pickup and destination must be different.','Please enter your phone number.','Please enter a valid phone number.','Please prepare your request first.'],
    es:['Elige un punto de salida y un destino.','La salida y el destino deben ser diferentes.','Introduce tu número de teléfono.','Introduce un número de teléfono válido.','Prepara primero tu solicitud.'],
    de:['Bitte wähle einen Abfahrtsort und ein Ziel.','Abfahrt und Ziel müssen unterschiedlich sein.','Bitte gib deine Telefonnummer ein.','Bitte gib eine gültige Telefonnummer ein.','Bitte bereite zuerst deine Anfrage vor.'],
    it:['Scegli un punto di partenza e una destinazione.','Partenza e destinazione devono essere diverse.','Inserisci il tuo numero di telefono.','Inserisci un numero di telefono valido.','Prepara prima la richiesta.'],
    nl:['Kies een vertrekpunt en een bestemming.','Vertrek en bestemming moeten verschillend zijn.','Vul je telefoonnummer in.','Vul een geldig telefoonnummer in.','Bereid eerst je aanvraag voor.'],
    ar:['اختر نقطة الانطلاق والوجهة.','يجب أن تكون نقطة الانطلاق مختلفة عن الوجهة.','أدخل رقم هاتفك.','أدخل رقم هاتف صالحًا.','حضّر طلبك أولًا.']
  };
  var FR_ERRORS = [
    'Choisis un départ et une destination.',
    'Le départ et la destination doivent être différents.',
    'Indique ton numéro de téléphone.',
    'Indique un numéro de téléphone valide.',
    'Prépare ta demande d’abord.'
  ];

  var state = { lang:'fr', applying:false };
  var nativeAlert = window.alert.bind(window);

  function detect(){
    var p = new URLSearchParams(location.search).get('lang');
    try { p = p || localStorage.getItem('digiy-lang'); } catch(e){}
    p = String(p || document.documentElement.lang || navigator.language || 'fr').slice(0,2).toLowerCase();
    return SUPPORTED.indexOf(p) >= 0 ? p : 'fr';
  }

  function pack(){ return I18N[state.lang] || null; }

  function setHtml(el, value){
    if (el && value != null && el.innerHTML !== value) el.innerHTML = value;
  }

  function translateVehicle(value){
    var v = String(value || '').trim().toLowerCase();
    var p = pack();
    if (!p) return value;
    if (/éco|eco|econ|اقتصادي/.test(v)) return p.vehEco;
    if (/confort|comfort|komfort|مريح/.test(v)) return p.vehConfort;
    if (/premium|mميز|مميز/.test(v)) return p.vehPremium;
    if (/moto|motor|motorrad|دراجة/.test(v)) return p.vehMoto;
    return value;
  }

  function applyStatic(){
    var p = pack();
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    if (!p) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (p[key] != null) setHtml(el, p[key]);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      if (p[key] != null) el.placeholder = p[key];
    });

    document.querySelectorAll('.zone[data-zone-id]').forEach(function(btn){
      var map = ZONES[state.lang] || ZONES.fr;
      if (map[btn.dataset.zoneId]) btn.textContent = map[btn.dataset.zoneId];
    });
    document.querySelectorAll('.vehicle[data-type]').forEach(function(card){
      var key = card.dataset.type === 'eco' ? 'vehEco' :
                card.dataset.type === 'confort' ? 'vehConfort' :
                card.dataset.type === 'premium' ? 'vehPremium' : 'vehMoto';
      var name = card.querySelector('.vehicle-name');
      if (name && p[key]) name.textContent = p[key];
    });

    ['summaryVehicle','contactVehicle'].forEach(function(id){
      var el = document.getElementById(id);
      if (el && el.textContent && el.textContent !== '—') el.textContent = translateVehicle(el.textContent);
    });

    var title = document.getElementById('locationTitle');
    if (title) {
      var current = title.textContent || '';
      if (/destination|destino|ziel|الوجهة/i.test(current)) {
        title.textContent = state.lang === 'en' ? 'Choose destination' :
          state.lang === 'es' ? 'Elegir destino' :
          state.lang === 'de' ? 'Ziel auswählen' :
          state.lang === 'it' ? 'Scegli la destinazione' :
          state.lang === 'nl' ? 'Kies de bestemming' :
          state.lang === 'ar' ? 'اختر الوجهة' : 'Choisir la destination';
      } else if (/départ|pickup|salida|abfahrt|partenza|vertrek|الانطلاق/i.test(current)) {
        title.textContent = state.lang === 'en' ? 'Choose pickup point' :
          state.lang === 'es' ? 'Elegir punto de salida' :
          state.lang === 'de' ? 'Abfahrtsort auswählen' :
          state.lang === 'it' ? 'Scegli il punto di partenza' :
          state.lang === 'nl' ? 'Kies het vertrekpunt' :
          state.lang === 'ar' ? 'اختر نقطة الانطلاق' : 'Choisir le point de départ';
      } else {
        title.textContent = p.locationTitle;
      }
    }
  }

  function messageData(){
    var preview = document.getElementById('messagePreview');
    var text = preview ? preview.textContent : '';
    var m = text.match(/(?:Référence|Reference|Referencia|Referenz|Riferimento|Referentie|المرجع)\s*[:：]\s*([^\s]+)/i);
    return {
      reference:m ? m[1] : ('DIGIY-' + Date.now()),
      pickup:(document.getElementById('contactPickup') || {}).textContent || '—',
      dropoff:(document.getElementById('contactDropoff') || {}).textContent || '—',
      vehicle:translateVehicle((document.getElementById('contactVehicle') || {}).textContent || '—'),
      phone:(document.getElementById('contactPhone') || {}).textContent || '—',
      price:(document.getElementById('contactPrice') || {}).textContent || '—',
      distance:(document.getElementById('summaryDistance') || {}).textContent || '—',
      duration:(document.getElementById('summaryDuration') || {}).textContent || '—'
    };
  }

  function buildMessage(){
    var d = messageData(), L = state.lang;
    var lines = {
      fr:['🚗 DIGIY DRIVER — DEMANDE DE COURSE','Référence : '+d.reference,'','📍 Départ : '+d.pickup,'🏁 Destination : '+d.dropoff,'🚘 Véhicule : '+d.vehicle,'📏 Distance estimée : '+d.distance,'⏱️ Durée estimée : '+d.duration,'💰 Estimation affichée : '+d.price,'📞 Numéro du client : '+d.phone,'','🤝 Paiement direct au chauffeur • 0% commission DIGIY','Merci de confirmer la disponibilité d’un chauffeur et le tarif final.'],
      en:['🚗 DIGIY DRIVER — RIDE REQUEST','Reference: '+d.reference,'','📍 Pickup: '+d.pickup,'🏁 Destination: '+d.dropoff,'🚘 Vehicle: '+d.vehicle,'📏 Estimated distance: '+d.distance,'⏱️ Estimated time: '+d.duration,'💰 Displayed estimate: '+d.price,'📞 Client number: '+d.phone,'','🤝 Direct payment to the driver • 0% DIGIY commission','Please confirm driver availability and the final fare.'],
      es:['🚗 DIGIY DRIVER — SOLICITUD DE VIAJE','Referencia: '+d.reference,'','📍 Salida: '+d.pickup,'🏁 Destino: '+d.dropoff,'🚘 Vehículo: '+d.vehicle,'📏 Distancia estimada: '+d.distance,'⏱️ Duración estimada: '+d.duration,'💰 Estimación mostrada: '+d.price,'📞 Número del cliente: '+d.phone,'','🤝 Pago directo al conductor • 0% de comisión DIGIY','Confirma la disponibilidad del conductor y la tarifa final.'],
      de:['🚗 DIGIY DRIVER — FAHRTANFRAGE','Referenz: '+d.reference,'','📍 Abfahrt: '+d.pickup,'🏁 Ziel: '+d.dropoff,'🚘 Fahrzeug: '+d.vehicle,'📏 Geschätzte Entfernung: '+d.distance,'⏱️ Geschätzte Dauer: '+d.duration,'💰 Angezeigte Schätzung: '+d.price,'📞 Kundennummer: '+d.phone,'','🤝 Direkte Zahlung an den Fahrer • 0% DIGIY-Provision','Bitte bestätige die Verfügbarkeit eines Fahrers und den endgültigen Preis.'],
      it:['🚗 DIGIY DRIVER — RICHIESTA DI CORSA','Riferimento: '+d.reference,'','📍 Partenza: '+d.pickup,'🏁 Destinazione: '+d.dropoff,'🚘 Veicolo: '+d.vehicle,'📏 Distanza stimata: '+d.distance,'⏱️ Durata stimata: '+d.duration,'💰 Stima visualizzata: '+d.price,'📞 Numero cliente: '+d.phone,'','🤝 Pagamento diretto all’autista • 0% commissioni DIGIY','Conferma la disponibilità dell’autista e la tariffa finale.'],
      nl:['🚗 DIGIY DRIVER — RITAANVRAAG','Referentie: '+d.reference,'','📍 Vertrek: '+d.pickup,'🏁 Bestemming: '+d.dropoff,'🚘 Voertuig: '+d.vehicle,'📏 Geschatte afstand: '+d.distance,'⏱️ Geschatte duur: '+d.duration,'💰 Getoonde schatting: '+d.price,'📞 Nummer van de klant: '+d.phone,'','🤝 Directe betaling aan de chauffeur • 0% DIGIY-commissie','Bevestig de beschikbaarheid van een chauffeur en de definitieve prijs.'],
      ar:['🚗 DIGIY DRIVER — طلب رحلة','المرجع: '+d.reference,'','📍 نقطة الانطلاق: '+d.pickup,'🏁 الوجهة: '+d.dropoff,'🚘 المركبة: '+d.vehicle,'📏 المسافة التقديرية: '+d.distance,'⏱️ المدة التقديرية: '+d.duration,'💰 التقدير المعروض: '+d.price,'📞 رقم العميل: '+d.phone,'','🤝 الدفع مباشرة للسائق • 0% عمولة DIGIY','يرجى تأكيد توفر السائق والسعر النهائي.']
    };
    return (lines[L] || lines.fr).join('\n');
  }

  function refreshPrepared(){
    var preview = document.getElementById('messagePreview');
    var panel = document.getElementById('contactPanel');
    if (preview && panel && panel.classList.contains('show') && preview.textContent.trim() !== '—') {
      preview.textContent = buildMessage();
    }
  }

  function setLanguage(lang, updateUrl){
    if (SUPPORTED.indexOf(lang) < 0) lang = 'fr';
    state.lang = lang;
    try { localStorage.setItem('digiy-lang', lang); } catch(e){}
    if (updateUrl && history.replaceState) {
      var u = new URL(location.href);
      u.searchParams.set('lang', lang);
      history.replaceState({}, '', u.toString());
    }
    state.applying = true;
    applyStatic();
    refreshPrepared();
    state.applying = false;
  }

  window.alert = function(message){
    var idx = FR_ERRORS.indexOf(String(message));
    if (idx < 0) {
      var enErrors = ['Please choose a pickup and a destination.','Pickup and destination must be different.','Please enter your phone number.','Please enter a valid phone number.','Please prepare your request first.'];
      idx = enErrors.indexOf(String(message));
    }
    var list = ERRORS[state.lang];
    nativeAlert(idx >= 0 && list ? list[idx] : message);
  };

  function prepared(){
    var panel = document.getElementById('contactPanel');
    return !!(panel && panel.classList.contains('show'));
  }

  function sendWhatsApp(){
    if (!prepared()) { window.alert(FR_ERRORS[4]); return; }
    window.open('https://wa.me/' + ASSISTANCE.replace(/\D/g,'') + '?text=' + encodeURIComponent(buildMessage()), '_blank', 'noopener');
  }

  function sendSms(){
    if (!prepared()) { window.alert(FR_ERRORS[4]); return; }
    var sep = /iPad|iPhone|iPod/.test(navigator.userAgent) ? '&' : '?';
    location.href = 'sms:' + ASSISTANCE + sep + 'body=' + encodeURIComponent(buildMessage());
  }

  function copyMessage(){
    if (!prepared()) { window.alert(FR_ERRORS[4]); return; }
    var text = buildMessage();
    var p = pack();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function(){});
    } else {
      var area = document.createElement('textarea');
      area.value = text; area.setAttribute('readonly','');
      area.style.position='fixed'; area.style.opacity='0';
      document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
    }
    var btn = document.getElementById('copyBtn');
    if (btn && p) {
      btn.innerHTML = p.copiedBtn;
      setTimeout(function(){ btn.innerHTML = p.copyBtn; }, 1800);
    }
  }

  document.addEventListener('click', function(e){
    var target = e.target && e.target.closest ? e.target.closest('button') : null;
    if (!target) return;
    if (target.id === 'whatsappBtn') { e.preventDefault(); e.stopImmediatePropagation(); sendWhatsApp(); }
    else if (target.id === 'smsBtn') { e.preventDefault(); e.stopImmediatePropagation(); sendSms(); }
    else if (target.id === 'copyBtn') { e.preventDefault(); e.stopImmediatePropagation(); copyMessage(); }
    else if (target.id === 'langFr' || target.id === 'langEn') {
      e.preventDefault(); e.stopImmediatePropagation();
      var lang = target.id === 'langEn' ? 'en' : 'fr';
      if (window.DIGIY_I18N && window.DIGIY_I18N.setLanguage) window.DIGIY_I18N.setLanguage(lang);
      setLanguage(lang, true);
    }
  }, true);

  document.addEventListener('digiy:languagechange', function(e){
    setLanguage(e.detail && e.detail.lang ? e.detail.lang : detect(), false);
  });

  var observer = new MutationObserver(function(){
    if (state.applying) return;
    setTimeout(function(){ applyStatic(); refreshPrepared(); }, 0);
  });

  function init(){
    setLanguage(detect(), false);
    observer.observe(document.body, {childList:true,subtree:true,characterData:true});
    setTimeout(function(){ applyStatic(); refreshPrepared(); }, 60);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
