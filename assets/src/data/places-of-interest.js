const placesOfInterest = [
  {
    categories: ["hotel", "bar"],
    name: "Hotel Born Palma",
    coordinates: [39.5701037, 2.64697665],
  },
  {
    categories: ["hotel"],
    name: "Hospes Maricel",
    coordinates: [39.5429559, 2.5890969],
  },
  {
    categories: ["hotel", "manor", "garden", "cafe"],
    name: "Årås Säteri & Trädgårdar",
  },
  {
    categories: ["hotel"],
    name: "Ästad Vingård",
  },
  {
    categories: ["bar"],
    name: "Avalon Hotel",
  },
  {
    categories: ["hotel"],
    name: "Hoby Kulle Herrgård",
  },
  {
    categories: ["hotel"],
    name: "Wanås Restaurant Hotel",
  },
  {
    categories: ["restaurant", "lunch"],
    name: "Feggesund Kro",
  },
  {
    categories: ["restaurant", "lunch"],
    name: "Det gamle røgeri",
  },
  {
    categories: ["restaurant", "hotel", "spa", "drinks"],
    name: "Jacy's",
  },
  {
    categories: ["restaurant", "bar", "drinks", "bite-sized"],
    name: "BRUK",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Carbon",
  },
  {
    categories: ["restaurant", "lunch", "ethiopian"],
    name: "Gabriels Lunchcafé",
  },
  {
    categories: ["cafe", "gelateria"],
    name: "Gelateria Positano Artigianale",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Gurras",
  },
  {
    categories: ["bar", "restaurant", "dinner"],
    name: "Bar Robusta",
  },
  {
    categories: ["bar", "restaurant", "rooftop", "drinks"],
    name: "Mei Rose",
  },
  {
    categories: ["street-food", "lunch"],
    name: "O's Streetfood",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Project",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Signum",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Tizne",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "SK",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Spice Room",
  },
  {
    categories: ["restaurant", "dinner", "bite-sized"],
    name: "Tant Anton i stan",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Buns & Buns",
  },
  {
    categories: ["restaurant", "lunch", "beach-club"],
    name: "Gran Folies",
  },
  {
    categories: ["restaurant", "lunch", "japanese"],
    name: "Restaurante Hanaita",
  },
  {
    categories: ["restaurant", "lunch", "bar"],
    name: "Byaregårdens Brygghus",
  },
  {
    categories: ["restaurant", "pizza", "lunch"],
    name: "Lilla Napoli",
  },
  {
    categories: ["store", "games"],
    name: "Concept Entertainment TV-spel",
  },
  {
    categories: ["fortress", "sightseeing"],
    name: "Hanstholm",
  },
  {
    categories: ["light-house", "sightseeing"],
    name: "Rubjerg Knude",
  },
  {
    categories: ["beach"],
    name: "Hanklit 60 m høj",
  },
  {
    categories: ["monastery", "sightseeing"],
    name: "Fornalutx, Mallorca",
  },
  {
    categories: ["cave", "sightseeing"],
    name: "Coves de Campanet, Mallorca",
  },
  {
    categories: ["museum", "sightseeing"],
    name: "Son Marroig, Mallorca",
  },
  {
    categories: ["beach"],
    name: "Cala Deià, Mallorca",
  },
  {
    categories: ["wineyard"],
    name: "Bodega Terra IóN, Palma",
  },
  {
    categories: ["airbnb"],
    name: "Boende Klitmøller 2024",
  },
  {
    categories: ["store", "second-hand"],
    name: "By Duddie, Thy, Danmark",
  },
  {
    categories: ["bar"],
    name: "HAANDPLUK, Danmark",
  },
  {
    categories: ["surf-shack"],
    name: "Viking Surf House, Klitmøller",
  },
  {
    categories: ["restaurant", "pizzeria"],
    name: "Vø Pizzabar",
  },
  {
    categories: ["restaurant"],
    name: "Aux Cœurs Joyeux,Bailleul",
  },
  {
    categories: ["airbnb"],
    name: "Boende Bailleul 2023",
  },
  {
    categories: ["restaurant", "bar"],
    name: "NŪ Restaurant, Lille",
  },
  {
    categories: ["bar", "show"],
    name: "Bar Abaco Mallorca",
  },
  {
    categories: ["hotel"],
    name: "Boende i Banyalbufar 2024",
  },
  {
    categories: ["hotel", "airbnb"],
    name: "Boende i Palma 2024",
  },
  {
    categories: ["restaurant", "lunch"],
    name: "Mercat Tramuntana, Palma",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Toque de Queda, Palma",
  },
  {
    categories: ["beach", "sightseeing"],
    name: "Cala Illetes, Palma",
  },
  {
    categories: ["sightseeing", "monastery"],
    name: "Valldemossa, Mallorca",
  },
  {
    categories: ["restaurant", "dinner"],
    name: "Vandal L'Atelier, Palma",
  },
  {
    categories: ["wineyard", "sightseeing"],
    name: "Son Vich, Mallorca",
  },
  {
    categories: ["cafe", "restaurant", "dinner"],
    name: "van Kerkwijk, Amsterdam",
  },
  {
    categories: ["restaurant"],
    name: "Central Park 27, Belgien",
  },
  {
    categories: ["restaurant"],
    name: "Mata Hari Restaurant, Amsterdam",
  },
  {
    categories: ["hotel"],
    name: "Hotel Oostzaan,Amsterdam",
  },
  {
    categories: ["cafe", "restaurant", "lunch"],
    name: "Cafe Kalkhoven,Amsterdam",
  },
  {
    categories: ["sightseeing", "hiking"],
    name: "BESSEGGEN",
  },
  {
    categories: ["hotel"],
    name: "Hytte i Gjendesheim",
  },
  {
    categories: ["restaurant"],
    name: "Taverna Tinchitè, Sicilien",
  },
  {
    categories: ["hotel", "restaurant", "spa"],
    name: "Gullmarsstrand",
  },
  {
    categories: ["restaurant", "wine", "bar"],
    name: "Poppy, Göteborg",
  },
  {
    categories: ["restaurant"],
    name: "Manfreds",
  },
  {
    categories: ["restaurant"],
    name: "Anatolia, Neuwied",
  },
  {
    categories: ["hotel", "airbnb"],
    name: "Boende Neuwied 2023",
  },
  {
    categories: ["restaurant", "breakfast"],
    name: "Café Pfefferminzje, Koblenz",
  },
  {
    categories: ["restaurant", "golf-club"],
    name: "Golfclub Aldruper Heide, Greven",
  },
  {
    categories: ["hotel"],
    name: "Hotel Alster, Hamburg",
  },
  {
    categories: ["hotel"],
    name: "Hotel Excellent, Lubeck",
  },
  {
    categories: ["restaurant"],
    name: "Jawed´s Remise, Lubeck",
  },
  {
    categories: ["castle", "sightseeing"],
    name: "Schloss Drachenburg",
  },
  {
    categories: ["restaurant"],
    name: "BUDDELS, Hamburg",
  },
  {
    categories: ["beach"],
    name: "Norsta Aurar, Fårö",
    coordinates: [57.956224, 19.344387],
  },
  {
    categories: ["restaurant"],
    name: "Creperie Tati, Fårö",
    coordinates: [57.933977, 19.162994],
  },
  {
    categories: ["beach"],
    name: "Sudersand",
    coordinates: [57.951997, 19.253111],
  },
  {
    categories: ["beach"],
    name: "Raukarna, Langhammarsgubben",
    coordinates: [57.99749, 19.18035],
  },
  {
    categories: ["beach"],
    name: "Helgumannens fiskeläge",
    coordinates: [57.919206, 19.127464],
  },
  {
    categories: ["beach"],
    name: "Digerhuvud",
    coordinates: [57.982372, 19.113089],
  },
  {
    categories: ["restaurant", "cafe", "hotel"],
    name: "Lauters Bar Mat Café",
    coordinates: [57.954729, 19.104496],
  },
  {
    categories: ["restaurant"],
    name: "Bistro Albatross",
    coordinates: [57.933587, 19.165124],
  },
  {
    categories: ["museum"],
    name: "Bergmancenter",
    coordinates: [57.918856, 19.138756],
  },
  {
    categories: ["lake"],
    name: "Bästeträsk",
    coordinates: [57.898952, 18.931609],
  },
  {
    categories: ["museum"],
    name: "Bläse Kalkbruksmuseum",
    coordinates: [57.894107, 18.839492],
  },
  {
    categories: ["flea-market"],
    name: "Fint o Fult",
    coordinates: [57.846567, 19.062087],
  },
  {
    categories: ["restaurant"],
    name: "Prima Gård",
    coordinates: [57.851044, 19.023663],
  },
  {
    categories: ["cafe", "bakery"],
    name: "Rute Stenugnsbageri",
    coordinates: [57.819199, 18.911648],
  },
  {
    categories: ["restaurant"],
    name: "Sjökrogen, Valleviken",
    coordinates: [57.787518, 18.947904],
  },
  {
    categories: ["park"],
    name: "Furilden",
    coordinates: [57.75, 19.016667],
  },
  {
    categories: ["beach"],
    name: "Smöjen",
    coordinates: [57.728091, 18.95421],
  },
  {
    categories: ["restaurant", "crepes"],
    name: "Ett Litet Creperie",
    coordinates: [57.793189, 18.533154],
  },
  {
    categories: ["restaurant"],
    name: "Fiskboden i Lickershamn",
    coordinates: [57.825818, 18.512081],
  },
  {
    categories: ["landmark"],
    name: "Jungfrun",
    coordinates: [57.829686, 18.504848],
  },
  {
    categories: ["cave"],
    name: "Lummelundagrottan",
    coordinates: [57.738275, 18.406085],
  },
  {
    categories: ["crepes", "cafe"],
    name: "Medusas Badcafé",
    coordinates: [57.702005, 18.806673],
  },
  {
    categories: ["store", "ceramics"],
    name: "Lilla Bjers",
    coordinates: [57.582521, 18.234162],
  },
  {
    categories: ["beach", "bar"],
    name: "Tofta Beach House",
    coordinates: [57.486303, 18.128043],
  },
  {
    categories: ["farm-house", "restaurant", "farmers-market"],
    name: "Ala Gård",
    coordinates: [57.416592, 18.633565],
  },
  {
    categories: ["restaurant", "bar"],
    name: "Bruna Dörren",
    coordinates: [57.330376, 18.710228],
  },
  {
    categories: ["beach"],
    name: "Vakti Fiskeläge",
    coordinates: [57.118733, 18.238006],
  },
  {
    categories: ["hotel"],
    name: "Grå Gåsen",
    coordinates: [57.039392, 18.287016],
  },
  {
    categories: ["beach"],
    name: "Hoburgen",
    coordinates: [56.918843, 18.12392],
  },
  {
    categories: ["museum"],
    name: "Körsbärsgården",
    coordinates: [56.932476, 18.169017],
  },
  {
    categories: ["park", "beach", "camping"],
    name: "Holmhällar",
    coordinates: [56.930526, 18.292623],
  },
  {
    categories: ["restaurant", "bar"],
    name: "Hamra krog",
    coordinates: [56.978973, 18.315601],
  },
  {
    categories: ["cafe", "destination"],
    name: "Vamlingbo Prästgård",
    coordinates: [56.969241, 18.229215],
  },
];

export default places;
