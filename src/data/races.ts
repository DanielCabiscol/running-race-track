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
    date: '2024-03-15',
    name: 'City Marathon',
    type: 'Normal',
    distance: 42.2,
    timeSeconds: 14400, // 4:00:00
    isPR: true,
    location: 'Madrid, Spain'
  },
  {
    date: '2024-02-20',
    name: 'Park Run',
    type: 'Trail',
    distance: 5,
    timeSeconds: 1500, // 25:00
    isPR: false,
    location: 'Retiro Park, Madrid'
  },
  {
    date: '2024-01-10',
    name: 'Winter Half',
    type: 'Normal',
    distance: 21.1,
    timeSeconds: 5400, // 1:30:00
    isPR: true,
    location: 'Barcelona, Spain'
  },
  {
    date: '2023-12-05',
    name: 'Holiday 10K',
    type: 'Normal',
    distance: 10,
    timeSeconds: 2700, // 45:00
    isPR: true,
    location: 'Valencia, Spain'
  }
];