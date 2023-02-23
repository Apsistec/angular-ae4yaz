import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: NotificationsComponent}]),

  ]
})
export class NotificationsModule { }
