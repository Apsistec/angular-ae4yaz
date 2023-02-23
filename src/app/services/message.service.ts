import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '../models/message';
import {MockMessages} from "../mocks/mockMessages";


@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: Message[] = [];

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

getMessages(){
  this.messages = MockMessages;
  return this.messages;
}


  clear() {
    this.messages = [];
  }
}
