import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flights: Flight[] = []
  constructor(private http: HttpClient) { }

  getFlight(callSign){
    MockFlights.filter(flight => flight.callSign === callSign)
  }

  getFlights(){
    this.flights = MockFlights;
    return this.flights;
  }

}
