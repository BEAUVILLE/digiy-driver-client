# ARCHIVE — ancien moteur DRIVER CLIENT

Date de classement : 27 août 2026.

L'ancien `app.html` DRIVER CLIENT contenait la mécanique historique de réservation et de calcul tarifaire :
- table `ROUTE_PRICES` ;
- calcul kilométrique de repli ;
- minimums Éco / Confort / Premium / Moto ;
- estimation automatique de distance, durée et prix ;
- préparation d'une demande transmise à l'assistance DRIVER.

Cette mécanique est désormais CADUQUE pour l'architecture publique actuelle.

## Référence immuable

Dernier commit avant remplacement :
`410eadc52f7b9eeac9bf433908e41ba4f7d3d845`

Blob exact de l'ancien `app.html` :
`18cc71bd50bac4a710a849f3867c5d16deed64ff`

Blob exact de l'ancien `index.html` :
`e3872af86afdb585d587b6d567bca05abf4acebd`

L'historique Git conserve donc intégralement l'ancien moteur. Ne pas le reconstruire sur la branche principale sauf décision humaine explicite.

## Doctrine de remplacement

DRIVER CLIENT reste une interface client, mais :
- aucun calcul de tarif par DIGIY ;
- aucune attribution automatique de chauffeur ;
- aucune commission sur la course ;
- chaque chauffeur dispose de sa carte ;
- ses tarifs indicatifs sont communiqués par lui ;
- le client choisit et contacte directement le professionnel ;
- paiement direct au chauffeur.
