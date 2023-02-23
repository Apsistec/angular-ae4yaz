import { CurrentUser } from 'src/app/models/current-user';

export const MockUsers: CurrentUser[] = [
  {
    name: 'Bill Coleman',
    roles: ['user', 'admin'],
    location: 'LBB',
    email: 'bill.coleman@alaskaair.com',
  },
  {
    name: 'Rachel Hicks',
    roles: ['user'],
    location: 'CHI',
    email: 'rachel.hicks@alaskaair.com',
  },
  {
    name: 'Josh Stern',
    roles: ['user'],
    location: 'SEA',
    email: 'josh.stern@alaskaair.com',
  },
];
