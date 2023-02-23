import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages.component';



@NgModule({
  declarations: [MessagesComponent,],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [MessagesComponent,]
})
export class MessagesModule { }
