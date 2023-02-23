import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyDayComponent } from './my-day.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MyDayComponent],
  imports: [
    IonicModule,
    FormsModule,
  RouterModule.forChild([{path: '', component: MyDayComponent}]),

  ],
  exports: [MyDayComponent]
})
export class MyDayModule { }
