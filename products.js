// Productgegevens: alle prijzen in eurocenten.
const PRODUCTS = [
  {
    "id": "01",
    "name": "Martino",
    "description": "Préparé, ui, mosterd, ketchup & augurk",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 520
      },
      {
        "name": "Groot broodje",
        "cents": 570
      },
      {
        "name": "Groot smoske",
        "cents": 670
      },
      {
        "name": "Klein smoske",
        "cents": 620
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "02",
    "name": "Broodje van het huis",
    "description": "Huisbereide aardappelsla, sla, tomaat, ei, gerookt spek & licht pikante saus",
    "category": "broodjes",
    "featured": true,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 750
      },
      {
        "name": "Groot broodje",
        "cents": 800
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "03",
    "name": "Kip de luxe",
    "description": "Rucola, ananas, zongedroogde tomaat, kipfilet, parmezaanse kaas, bicky-ui & zoete saus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "04",
    "name": "Italiaans broodje",
    "description": "Rucola, parmaham, mozzarella, zongedroogde tomaat, zwarte peper & pesto",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "05",
    "name": "Crispy bacon",
    "description": "Sla, tomaat, kaas, spek, bicky-ui & andalouse",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "06",
    "name": "Gerookte zalm",
    "description": "Broodje met gerookte zalm",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      },
      {
        "name": "Groot smoske",
        "cents": 800
      },
      {
        "name": "Klein smoske",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "16",
    "name": "Kaas",
    "description": "Klassiek belegd",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 350
      },
      {
        "name": "Groot broodje",
        "cents": 400
      },
      {
        "name": "Groot smoske",
        "cents": 500
      },
      {
        "name": "Klein smoske",
        "cents": 450
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "17",
    "name": "Hesp",
    "description": "Klassiek belegd",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 350
      },
      {
        "name": "Groot broodje",
        "cents": 400
      },
      {
        "name": "Groot smoske",
        "cents": 500
      },
      {
        "name": "Klein smoske",
        "cents": 450
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "18",
    "name": "Kaas & hesp",
    "description": "De vertrouwde klassieker",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "19",
    "name": "Ei-bieslooksla",
    "description": "Huisbereide eiersla met bieslook",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "20",
    "name": "Brie",
    "description": "Zachte brie op een vers broodje",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "21",
    "name": "Préparé",
    "description": "Vers rundsvlees, klassiek gekruid",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "22",
    "name": "Martino special",
    "description": "Met barbecuesaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 570
      },
      {
        "name": "Groot broodje",
        "cents": 620
      },
      {
        "name": "Groot smoske",
        "cents": 720
      },
      {
        "name": "Klein smoske",
        "cents": 670
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "23",
    "name": "Kip-curry",
    "description": "Romige kip-curry",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "24",
    "name": "Aardappelsla",
    "description": "Huisbereide aardappelsla",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "25",
    "name": "Krabsla (surimi)",
    "description": "Surimi met frisse salade",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "26",
    "name": "Tonijnsla",
    "description": "Frisse huisbereide tonijnsla",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "27",
    "name": "Tonijntino",
    "description": "Tonijn, pikant, ui, mosterd, ketchup & augurk",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 520
      },
      {
        "name": "Groot broodje",
        "cents": 570
      },
      {
        "name": "Groot smoske",
        "cents": 670
      },
      {
        "name": "Klein smoske",
        "cents": 620
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "61",
    "name": "Grijze garnaalsla",
    "description": "Huisbereide garnalensla",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      },
      {
        "name": "Groot smoske",
        "cents": 800
      },
      {
        "name": "Klein smoske",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "65",
    "name": "Broodje gezond",
    "description": "Sla, tomaat, ei, komkommer, worteltjes & mayonaise",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "66",
    "name": "Vegetarisch broodje",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, mayonaise, maïs, boontjes & rode kool",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 550
      },
      {
        "name": "Groot broodje",
        "cents": 600
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "68",
    "name": "Zuiderse martino",
    "description": "Préparé, rucola, zongedroogde tomaat, parmezaanse kaas & pesto",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "76",
    "name": "Brie & spek & honing",
    "description": "Brie, spek & honing",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "77",
    "name": "Spek & eieren",
    "description": "Omelet en spek tussen een broodje",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 600
      },
      {
        "name": "Groot broodje",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "78",
    "name": "Andalousiër",
    "description": "Aardappelsla, sla, kaas, komkommer, augurk, rode ui, andalouse & kruiden",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "79",
    "name": "Spek de luxe",
    "description": "Rucola, ananas, parmezaanse kaas, zongedroogde tomaat, gerookt spek, bicky-ui & zoete saus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "81",
    "name": "Gerookte zalm & kruidenkaas",
    "description": "Gerookte zalm, kruidenkaas, rucola, komkommer & verse ajuin",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "87",
    "name": "Aardappelsla + hesp of kaas",
    "description": "Aardappelsla met hesp of kaas",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 550
      },
      {
        "name": "Groot broodje",
        "cents": 600
      },
      {
        "name": "Groot smoske",
        "cents": 700
      },
      {
        "name": "Klein smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "88",
    "name": "Tonijn pikant",
    "description": "Pikante tonijnsalade",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 450
      },
      {
        "name": "Groot broodje",
        "cents": 500
      },
      {
        "name": "Groot smoske",
        "cents": 600
      },
      {
        "name": "Klein smoske",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Klassiekers & specialiteiten"
  },
  {
    "id": "67",
    "name": "Smos kaas & hesp special",
    "description": "Kaas, hesp, ketchup, mayonaise & ui",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Smoskes"
  },
  {
    "id": "69",
    "name": "Smos gerookt spek",
    "description": "Sla, tomaat, ei, gerookt spek & barbecuesaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 600
      },
      {
        "name": "Groot broodje",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Smoskes"
  },
  {
    "id": "70",
    "name": "Boerensmos",
    "description": "Ei-bieslooksla, sla, tomaat, gerookt spek & mayonaise",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Smoskes"
  },
  {
    "id": "80",
    "name": "Smos Hawaï",
    "description": "Sla, tomaat, ei, kaas, hesp, ananas & cocktailsaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Smoskes"
  },
  {
    "id": "71",
    "name": "Club Kip",
    "description": "Sla, tomaat, ei, kipfilet & mayonaise",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 650
      },
      {
        "name": "Groot broodje",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Clubs"
  },
  {
    "id": "72",
    "name": "Club special",
    "description": "Sla, tomaat, ei, kipfilet & barbecuesaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 670
      },
      {
        "name": "Groot broodje",
        "cents": 720
      }
    ],
    "breadChoice": true,
    "group": "Clubs"
  },
  {
    "id": "73",
    "name": "Club Kip Hawaï",
    "description": "Sla, tomaat, ei, kipfilet, ananas & cocktailsaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Clubs"
  },
  {
    "id": "74",
    "name": "Club Kip Aardappelsla",
    "description": "Club Kip Aardappelsla",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 800
      },
      {
        "name": "Groot broodje",
        "cents": 850
      }
    ],
    "breadChoice": true,
    "group": "Clubs"
  },
  {
    "id": "75",
    "name": "Hanniclub",
    "description": "Sla, ei, worteltjes, kipfilet, kruiden, bicky-ui & hannibalsaus",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 700
      },
      {
        "name": "Groot broodje",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Clubs"
  },
  {
    "id": "89",
    "name": "Broodje van de week",
    "description": "Elke week een ander broodje aan een voordelige prijs. Vraag naar het aanbod van deze week.",
    "category": "broodjes",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": null
      }
    ],
    "breadChoice": true,
    "weekly": true,
    "group": "Weeksuggestie"
  },
  {
    "id": "62",
    "name": "Broodje croque",
    "description": "Kaas & hesp",
    "category": "croques",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 500
      },
      {
        "name": "Groot broodje",
        "cents": 550
      }
    ],
    "breadChoice": true,
    "group": "Croques"
  },
  {
    "id": "63",
    "name": "Broodje croque zalm & brie",
    "description": "Warme croque met zalm en brie",
    "category": "croques",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 800
      },
      {
        "name": "Groot broodje",
        "cents": 850
      }
    ],
    "breadChoice": true,
    "group": "Croques"
  },
  {
    "id": "64",
    "name": "Italiaanse croque",
    "description": "Met mozzarella, parmaham, pesto & zongedroogde tomaat",
    "category": "croques",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Klein broodje",
        "cents": 800
      },
      {
        "name": "Groot broodje",
        "cents": 850
      }
    ],
    "breadChoice": true,
    "group": "Croques"
  },
  {
    "id": "07",
    "name": "Croque Hawaï",
    "description": "Kaas, hesp & ananas",
    "category": "croques",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 600
      }
    ],
    "breadChoice": true,
    "group": "Croques"
  },
  {
    "id": "08",
    "name": "Kipsaté",
    "description": "Huisbereide kipsaté op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 600
      },
      {
        "name": "Groot smoske",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "29",
    "name": "Curryworst XL",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "30",
    "name": "Mexicano",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "31",
    "name": "Viandel",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "32",
    "name": "Bockworst",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "33",
    "name": "Vleeskroket",
    "description": "2 stuks",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 650
      },
      {
        "name": "Groot smoske",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "34",
    "name": "Goulashkroket",
    "description": "2 stuks",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 650
      },
      {
        "name": "Groot smoske",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "35",
    "name": "Kaaskroket",
    "description": "3 stuks",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 650
      },
      {
        "name": "Groot smoske",
        "cents": 750
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "90",
    "name": "Braadworst",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "91",
    "name": "Saté",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 600
      },
      {
        "name": "Groot smoske",
        "cents": 700
      }
    ],
    "breadChoice": true,
    "group": "Warme broodjes"
  },
  {
    "id": "09",
    "name": "Huisbereide spaghetti",
    "description": "Grote portie met groentjes, kippengehakt & kaas",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 950
      }
    ],
    "breadChoice": false,
    "extrasMode": "spaghetti",
    "group": "Warme gerechten"
  },
  {
    "id": "92",
    "name": "Curryrol",
    "description": "Warme curryrol",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 300
      }
    ],
    "breadChoice": false,
    "group": "Warme gerechten"
  },
  {
    "id": "93",
    "name": "Uitsmijter",
    "description": "2 sneden bruin brood, sla, tomaat, komkommer, augurk, mayonaise, 2 spiegeleieren en naar keuze ontvette hesp, gerookt spek of jonge kaas",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 750
      }
    ],
    "breadChoice": false,
    "group": "Warme gerechten"
  },
  {
    "id": "28",
    "name": "Boulet",
    "description": "Warme snack op een groot broodje of groot smoske",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 550
      },
      {
        "name": "Groot smoske",
        "cents": 650
      }
    ],
    "breadChoice": true,
    "group": "Bouletjes"
  },
  {
    "id": "36",
    "name": "Boerenboulet",
    "description": "Groot broodje, huisbereide aardappelsla, sla, tomaat, ei, boulet, augurk & 1 saus naar keuze",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 800
      }
    ],
    "breadChoice": true,
    "group": "Bouletjes"
  },
  {
    "id": "104",
    "name": "Cheeseboulet",
    "description": "Broodje met boulet en kaas",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "breadChoice": true,
    "variants": [
      {
        "name": "Broodje",
        "cents": 750
      }
    ],
    "group": "Bouletjes"
  },
  {
    "id": "37",
    "name": "Visburger",
    "description": "Pistolet met sla, tomaat & ei",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ],
    "breadChoice": false,
    "group": "Kip & vis"
  },
  {
    "id": "38",
    "name": "Kipburger",
    "description": "Pistolet met sla, tomaat & ei",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ],
    "breadChoice": false,
    "group": "Kip & vis"
  },
  {
    "id": "82",
    "name": "Vis XL",
    "description": "Groot broodje met sla, tomaat, ei & tartaar",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ],
    "breadChoice": false,
    "group": "Kip & vis"
  },
  {
    "id": "83",
    "name": "Kip XL",
    "description": "Groot broodje met sla, tomaat, ei & saus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ],
    "breadChoice": false,
    "group": "Kip & vis"
  },
  {
    "id": "39",
    "name": "Bicky Burger",
    "description": "Met bickysaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ],
    "breadChoice": false,
    "group": "Bicky burgers"
  },
  {
    "id": "40",
    "name": "Bicky Cheese Bacon Burger",
    "description": "Met kaas en spek",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 700
      }
    ],
    "breadChoice": false,
    "group": "Bicky burgers"
  },
  {
    "id": "84",
    "name": "Bicky Cheese Burger",
    "description": "Bicky burger met kaas",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 600
      }
    ],
    "breadChoice": false,
    "group": "Bicky burgers"
  },
  {
    "id": "85",
    "name": "Bicky Boulet",
    "description": "Boulet met bickysaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ],
    "breadChoice": false,
    "group": "Bicky burgers"
  },
  {
    "id": "86",
    "name": "Bicky Mexicano",
    "description": "Mexicano met bickysaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ],
    "breadChoice": false,
    "group": "Bicky burgers"
  },
  {
    "id": "10",
    "name": "Cheeseburger",
    "description": "Sla, tomaat, smeltkaas, hamburger & cocktailsaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 500
      },
      {
        "name": "Big",
        "cents": 600
      },
      {
        "name": "Super",
        "cents": 700
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "11",
    "name": "Baconburger",
    "description": "Sla, tomaat, hamburger, smeltkaas, gerookt spek & barbecuesaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 600
      },
      {
        "name": "Big",
        "cents": 700
      },
      {
        "name": "Super",
        "cents": 800
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "12",
    "name": "Ultra stoomboot",
    "description": "Sla, tomaat, ei, augurk, 2 hamburgers, saus, ananas, smeltkaas & gerookt spek",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Super",
        "cents": 900
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "41",
    "name": "Hamburger",
    "description": "Hamburger met 1 saus naar keuze",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 450
      },
      {
        "name": "Big",
        "cents": 550
      },
      {
        "name": "Super",
        "cents": 650
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "42",
    "name": "Hamburger met gebakken ui",
    "description": "Augurk, hamburger, mayonaise, ketchup & gebakken ui",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 570
      },
      {
        "name": "Big",
        "cents": 670
      },
      {
        "name": "Super",
        "cents": 770
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "43",
    "name": "Hawaïburger",
    "description": "Sla, tomaat, ananas, hamburger & cocktailsaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 500
      },
      {
        "name": "Big",
        "cents": 600
      },
      {
        "name": "Super",
        "cents": 700
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "44",
    "name": "Tropicalburger",
    "description": "Sla, tomaat, ananas, hamburger, smeltkaas & cocktailsaus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 550
      },
      {
        "name": "Big",
        "cents": 650
      },
      {
        "name": "Super",
        "cents": 750
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "45",
    "name": "Chipieburger",
    "description": "Sla, tomaat, ei, hamburger & saus naar keuze",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 500
      },
      {
        "name": "Big",
        "cents": 600
      },
      {
        "name": "Super",
        "cents": 700
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "46",
    "name": "Monacoburger",
    "description": "Sla, tomaat, ei, ui, hesp, hamburger, smeltkaas & saus naar keuze",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Enkel",
        "cents": 650
      },
      {
        "name": "Big",
        "cents": 750
      },
      {
        "name": "Super",
        "cents": 850
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "47",
    "name": "Stoomboot",
    "description": "Sla, tomaat, ei, augurk, 2 hamburgers & saus",
    "category": "burgers",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Super",
        "cents": 750
      }
    ],
    "breadChoice": false,
    "group": "Hamburgers"
  },
  {
    "id": "60",
    "name": "Salade van de week",
    "description": "Elke week een verse, voedzame verrassing",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": null
      }
    ],
    "breadChoice": false,
    "weekly": true,
    "group": "Weeksuggestie"
  },
  {
    "id": "53",
    "name": "Koude schotel klein — natuur",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 750
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "54",
    "name": "Koude schotel klein — met hesp",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 850
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "55",
    "name": "Koude schotel klein — met americain",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 950
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "56",
    "name": "Koude schotel klein — met kip",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 950
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "57",
    "name": "Koude schotel klein — met tonijn",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje. Met een blikje tonijn.",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1000
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "58",
    "name": "Koude schotel klein — met gerookte zalm",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1050
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "59",
    "name": "Koude schotel klein — met grijze garnaalsla",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, augurk, mayonaise, aardappelsla & een groot broodje",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1150
      }
    ],
    "breadChoice": false,
    "group": "Kleine schotels"
  },
  {
    "id": "97",
    "name": "Koude schotel van het huis — natuur",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 750
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "98",
    "name": "Koude schotel van het huis — met hesp",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 850
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "99",
    "name": "Koude schotel van het huis — met americain",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 950
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "100",
    "name": "Koude schotel van het huis — met kip",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 950
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "101",
    "name": "Koude schotel van het huis — met tonijn",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla. Met een blikje tonijn.",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1000
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "102",
    "name": "Koude schotel van het huis — met gerookte zalm",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1050
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "103",
    "name": "Koude schotel van het huis — met grijze garnaalsla",
    "description": "Sla, tomaat, ei, komkommer, worteltjes, boontjes, rode kool, maïs, paprika & mayonaise. Naar keuze met een groot broodje of aardappelsla",
    "category": "schotels",
    "featured": false,
    "sideChoice": true,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": 1150
      }
    ],
    "breadChoice": false,
    "group": "Schotels van het huis"
  },
  {
    "id": "13",
    "name": "Koffie",
    "description": "Meeneembeker",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Meeneembeker",
        "cents": 300
      }
    ],
    "breadChoice": false,
    "group": "Koffie"
  },
  {
    "id": "52",
    "name": "Koffie verkeerd",
    "description": "Beker",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Beker",
        "cents": 350
      }
    ],
    "breadChoice": false,
    "group": "Koffie"
  },
  {
    "id": "14",
    "name": "Cola",
    "description": "Cola",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Blikje",
        "cents": 270
      },
      {
        "name": "Flesje",
        "cents": 320
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "15",
    "name": "Red Bull",
    "description": "Blikje",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Blikje",
        "cents": 320
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "48",
    "name": "Capri-Sun",
    "description": "Flesje",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Flesje",
        "cents": 200
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "49",
    "name": "Water",
    "description": "Flesje",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Flesje",
        "cents": 270
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "50",
    "name": "Chocovit",
    "description": "Chocoladedrank",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Flesje",
        "cents": 320
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "94",
    "name": "Cola Zero",
    "description": "Cola zonder suiker",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Blikje",
        "cents": 270
      },
      {
        "name": "Flesje",
        "cents": 320
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "95",
    "name": "Fanta",
    "description": "Frisdrank",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Blikje",
        "cents": 270
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  },
  {
    "id": "96",
    "name": "Ice Tea",
    "description": "IJsthee",
    "category": "dranken",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Blikje",
        "cents": 320
      },
      {
        "name": "Flesje",
        "cents": 370
      }
    ],
    "breadChoice": false,
    "group": "Frisdranken"
  }
];
