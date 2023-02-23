import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { FlightsService } from './flights.service';

@Injectable({
  providedIn: 'root' 
})
export class FlightResolver implements Resolve<FlightDetailComponent> {
  constructor(private flightsService: FlightsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.flightsService.getFlight(route.paramMap.get('id'));
  }
}