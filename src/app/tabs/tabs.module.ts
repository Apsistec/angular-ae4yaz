import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class TabsModule { }
