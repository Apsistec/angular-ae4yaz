import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFlightsComponent } from './edit-flights.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditFlightsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [EditFlightsComponent]
})
export class EditFlightsModule { }
