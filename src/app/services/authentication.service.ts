import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { CurrentUser } from '../models/current-user';
import { MessageService } from './message.service';


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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: CurrentUser[] = [];


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getUsers(){
    this.users = MockUsers;
    return this.users;
  }

  getUser(email: string){
    MockUsers.filter(user => user.email === email)
  }

 SignIn(user,pass){
  let response = {
    "id": 46643,
    "name": "Bill Coleman",
    "email": "bill.coleman@alaskaair.com",
    "location": "LBB",
    "roles": ["user", "admin"],
    
  };
  return response;

}
