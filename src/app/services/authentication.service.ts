import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { CurrentUser } from '../models/current-user';
import { MessageService } from './message.service';
import {MockUsers} from "../mocks/mockUsers";
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
    return MockUsers;
  }

  getUser(email: string): Observable<CurrentUser> {
    return this.getUsers()
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
        }),
        catchError(this.handleError<CurrentUser>(`getUser email=${email}`))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }


}
