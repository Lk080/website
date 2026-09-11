# Wekelijkse suggesties beheren

Start de website met Node.js 22 of nieuwer: `node server.mjs`.
Open `http://127.0.0.1:8080/admin`. Kies bij de eerste start een wachtwoord van minstens 12 tekens. Daarna kan de eigenaar daar inloggen en de naam, omschrijving en prijs van beide weeksuggesties aanpassen.

De gegevens en wachtwoordhash staan in `.piccolo-data`, buiten Git. Maak hiervan een backup. Het wachtwoord wordt niet leesbaar opgeslagen. Start de server opnieuw om alle bestaande sessies uit te loggen.

## Later online zetten

Deze versie heeft Node-hosting nodig met een blijvende, schrijfbare gegevensmap. GitHub Pages alleen ondersteunt het beheerpaneel niet. Gebruik HTTPS, stel `NODE_ENV=production`, `HOST=0.0.0.0`, de gewenste `PORT` en eventueel `PICCOLO_DATA_DIR` naar een blijvend volume in. Stel het wachtwoord eerst lokaal in en zet de gegevensmap veilig over; eerste configuratie via het openbare internet is geblokkeerd. De reverse proxy moet de oorspronkelijke Host-header behouden. Publiceer nooit de gegevensmap als statische bestanden.

Zonder de server blijft het menu werken met de standaard weeksuggesties uit `products.js`. Het beheerpaneel meldt dan dat de server ontbreekt; wijzigingen worden nooit alleen in browseropslag bewaard.
