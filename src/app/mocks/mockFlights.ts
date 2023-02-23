import { Flight } from 'src/app/models/flight';
export const MockFlights: Flight[] = [
  {
    callSign: 'AF878',
    status: 'delayed',
    baqQuantity: 15,
    bagTransfers: 7,
  },
  {
    callSign: 'FS4421',
    status: 'in-flight',
    baqQuantity: 62,
    bagTransfers: 5,
  },
  {
    callSign: 'LR1321',
    status: 'landing',
    baqQuantity: 42,
    bagTransfers: 17,
  },
  {
    callSign: 'QZ9821',
    status: 'arrived',
    baqQuantity: 67,
    bagTransfers: 27,
  },
];
