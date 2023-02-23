import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoComponent } from './sso.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SsoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path: 'sso', component: SsoComponent}]),

  ],
  exports: [SsoComponent,]
})
export class SsoModule { }
