import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AirplaneComponent } from './airplane/airplane.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouteReuseStrategy } from '@angular/router';
import { EditFlightsComponent } from './edit-flights/edit-flights.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, AirplaneComponent, TabsComponent, EditFlightsComponent, MessagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
