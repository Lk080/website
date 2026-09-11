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
    ]
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
    ]
  },
  {
    "id": "03",
    "name": "Kip de luxe",
    "description": "Rucola, ananas, zongedroogde tomaat, kipfilet, Parmezaan, bicky-ui & zoete saus",
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
    ]
  },
  {
    "id": "04",
    "name": "Italiaans broodje",
    "description": "Rucola, Parmaham, mozzarella, zongedroogde tomaat, zwarte peper & pesto",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "62",
    "name": "Broodje croque",
    "description": "Kaas & hesp",
    "category": "broodjes",
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
    ]
  },
  {
    "id": "63",
    "name": "Broodje croque zalm & brie",
    "description": "Warme croque met zalm en brie",
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
    ]
  },
  {
    "id": "64",
    "name": "Italiaanse croque",
    "description": "Met mozzarella, Parmaham, pesto & zongedroogde tomaat",
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "68",
    "name": "Zuiderse martino",
    "description": "Préparé, rucola, zongedroogde tomaat, Parmezaan & pesto",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "79",
    "name": "Spek de luxe",
    "description": "Rucola, ananas, Parmezaan, zongedroogde tomaat, gerookt spek, bicky-ui & zoete saus",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "07",
    "name": "Croque Hawaï",
    "description": "Kaas, hesp & ananas",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Groot broodje",
        "cents": 600
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "37",
    "name": "Visburger",
    "description": "Pistolet met sla, tomaat & ei",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ]
  },
  {
    "id": "38",
    "name": "Kipburger",
    "description": "Pistolet met sla, tomaat & ei",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ]
  },
  {
    "id": "39",
    "name": "Bicky Burger",
    "description": "Met bickysaus",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 550
      }
    ]
  },
  {
    "id": "40",
    "name": "Bicky Cheese Bacon Burger",
    "description": "Met kaas en spek",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 700
      }
    ]
  },
  {
    "id": "82",
    "name": "Vis XL",
    "description": "Groot broodje met sla, tomaat, ei & tartaar",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ]
  },
  {
    "id": "83",
    "name": "Kip XL",
    "description": "Groot broodje met sla, tomaat, ei & saus",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ]
  },
  {
    "id": "84",
    "name": "Bicky Cheese Burger",
    "description": "Bicky burger met kaas",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 600
      }
    ]
  },
  {
    "id": "85",
    "name": "Bicky Boulet",
    "description": "Boulet met bickysaus",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ]
  },
  {
    "id": "86",
    "name": "Bicky Mexicano",
    "description": "Mexicano met bickysaus",
    "category": "warm",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Standaard",
        "cents": 650
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "id": "60",
    "name": "Gezonde schotel van de week",
    "description": "Elke week een verse, voedzame verrassing",
    "category": "schotels",
    "featured": false,
    "sideChoice": false,
    "variants": [
      {
        "name": "Koude schotel",
        "cents": null
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
