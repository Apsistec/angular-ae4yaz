import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailComponent } from './flight-detail.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FlightDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FlightDetailComponent}]),
    IonicModule,
    FormsModule,
  ]
})
export class FlightDetailModule { }
