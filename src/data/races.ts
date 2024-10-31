export interface Race {
  date: string;
  name: string;
  type: RaceType;
  distance: number;
  timeSeconds: number;
  isPR: boolean;
  location: string;
}

export type RaceType = 'Normal' | 'Trail';

export const races: Race[] = [
  {
    date: '2022-12-26',
    name: 'Sansilvestre',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1602, // 26:42
    isPR: false,
    location: 'Masnou'
  },
  {
    date: '2023-01-08',
    name: 'Cursa Reis',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1538, // 25:38
    isPR: false,
    location: 'Cornellà'
  },
  {
    date: '2023-01-22',
    name: 'Moritz Sant Antoni',
    type: 'Normal',
    distance: 10,
    timeSeconds: 3258, // 54:18
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-02-12',
    name: 'Els 10 de Santa Coloma',
    type: 'Normal',
    distance: 10,
    timeSeconds: 3166, // 52:46
    isPR: false,
    location: 'Santa Coloma de Gramanet'
  },
  {
    date: '2023-02-26',
    name: 'Malalties minoritàries',
    type: 'Normal',
    distance: 10,
    timeSeconds: 3000, // 50:00
    isPR: false,
    location: 'Badalona'
  },
  {
    date: '2023-03-05',
    name: 'Cursa del Meditarràni',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2946, // 49:06
    isPR: false,
    location: 'Castelldefels'
  },
  {
    date: '2023-03-12',
    name: 'Cursa de la dona 3 viles',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2947, // 49:07
    isPR: false,
    location: 'Masnou/Montgat/Premià'
  },
  {
    date: '2023-03-26',
    name: 'Ponle freno',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2906, // 48:26
    isPR: false,
    location: 'Badalona'
  },
  {
    date: '2023-04-02',
    name: 'Caldes 3 viles',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2863, // 47:43
    isPR: false,
    location: 'Caldes Estrach'
  },
  {
    date: '2023-04-16',
    name: 'Esplai Premià',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1263, // 21:03
    isPR: false,
    location: 'Premià de Mar'
  },
  {
    date: '2023-04-29',
    name: 'Nocturna Hospitalet',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2794, // 46:34
    isPR: false,
    location: 'Hospitalet de Llobregat'
  },
  {
    date: '2023-05-14',
    name: 'Nou Barris',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2736, // 45:36
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-05-32',
    name: 'Dir Diagonal',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2650, // 44:10
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-06-11',
    name: 'Cursa Pineda',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2953, // 49:13
    isPR: false,
    location: 'Pineda de Mar'
  },
  {
    date: '2023-06-18',
    name: 'CCMA TV3',
    type: 'Normal',
    distance: 7,
    timeSeconds: 1649, // 27:29
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-07-01',
    name: 'Cursa Premià',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2663, // 44:23
    isPR: false,
    location: 'Premià de Mar'
  },
  {
    date: '2023-07-08',
    name: 'Cursa Dani Vilassar',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2686, // 44:46
    isPR: false,
    location: 'Vilassar de Mar'
  },
  {
    date: '2023-09-24',
    name: 'Rentreé Badalona',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2827, // 47:07
    isPR: false,
    location: 'Badalona'
  },
  {
    date: '2023-10-01',
    name: 'Nick Horta',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1291, // 21:31
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-11-05',
    name: 'Cros Popular Sants',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2706, // 45:06
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-11-12',
    name: 'Els 10 de les Franqueses',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2968, // 49:28
    isPR: false,
    location: 'Franqueses del Vallès'
  },
  {
    date: '2023-11-26',
    name: 'Jean Bouin',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2668, // 44:28
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-12-17',
    name: 'La Segrera',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2618, // 43:38
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2023-12-26',
    name: 'San Silvestre',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1215, // 20:15
    isPR: true,
    location: 'Masnou'
  },
  {
    date: '2023-12-31',
    name: 'Cursa dels Nassos',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2594, // 43:14
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2024-01-14',
    name: 'La Barbuda Vilassar',
    type: 'Normal',
    distance: 8,
    timeSeconds: 2026, // 33:46
    isPR: false,
    location: 'Vilassar de Mar'
  },
  {
    date: '2024-01-21',
    name: 'Moritz Sant Antoni',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2539, // 42:19
    isPR: false,
    location: 'Barcelona'
  },
  {
    date: '2024-02-11',
    name: 'Mitja Marató Barcelona',
    type: 'Normal',
    distance: 21.1,
    timeSeconds: 5857, // 1:37:37
    isPR: true,
    location: 'Barcelona'
  },
  {
    date: '2024-02-25',
    name: 'Malalties Minoritàries',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2632, // 43:52
    isPR: false,
    location: 'Badalona'
  },
  {
    date: '2024-03-17',
    name: 'Ponle freno',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2519, // 41:59
    isPR: false,
    location: 'Badalona'
  },
  {
    date: '2024-03-24',
    name: 'Caldes 3 viles',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2646, // 44:06
    isPR: false,
    location: "Caldes d'Estrach"
  },
  {
    date: '2024-04-14',
    name: 'Vilatrail',
    type: 'Trail',
    distance: 11,
    timeSeconds: 4379, // 1:12:59
    isPR: true,
    location: "Vilassar de Dalt"
  },
  {
    date: '2024-05-04',
    name: 'Cursa Dani Mataró',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2451, // 40:51
    isPR: true,
    location: "Mataró"
  },
  {
    date: '2024-06-06',
    name: 'Cursa Dani Vilassar',
    type: 'Normal',
    distance: 5,
    timeSeconds: 1296, // 21:36
    isPR: false,
    location: "Vilassar de Mar"
  },
  {
    date: '2024-09-29',
    name: 'La Mercè',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2742, // 45:42
    isPR: false,
    location: "Barcelona"
  },
  {
    date: '2024-10-27',
    name: 'Magic Run Badalona',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2737, // 45:37
    isPR: false,
    location: "Badalona"
  }
];