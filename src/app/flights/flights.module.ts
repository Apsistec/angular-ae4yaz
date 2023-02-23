import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FlightsComponent}]),
    IonicModule,
    FormsModule,
  ]
})
export class FlightsModule { }
