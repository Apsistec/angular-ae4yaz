import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MoreComponent } from './more.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MoreComponent],
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: MoreComponent}]),

  ],
  exports: [MoreComponent]
})
export class MoreModule { }
