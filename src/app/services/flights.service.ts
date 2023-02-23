import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  mockFlights: MockFlight[] = [];

  constructor(private http: HttpClient) { }

  getFlight(callSign){
    this.mockFlights.filter(flight => flight.callSign === callSign)
  }
}
