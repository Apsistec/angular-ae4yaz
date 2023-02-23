import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaultComponent } from './fault.component';



@NgModule({
  declarations: [FaultComponent],
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path: 'page-not-found', component: FaultComponent}]),

  ],
  exports: [FaultComponent]
})
export class FaultModule { }

