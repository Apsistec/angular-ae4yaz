
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditFlightsComponent } from '../edit-flights/edit-flights.component';

@Injectable({
  providedIn: 'root'
})
export class EditArticleGuard implements CanDeactivate<EditFlightsComponent>  {

  canDeactivate(component: EditFlightsComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>  {

    return true;
  }
}
