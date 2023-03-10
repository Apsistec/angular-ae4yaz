import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
     RouterModule.forChild([{path: '', component: HomeComponent}]),
    IonicModule,
    FormsModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
