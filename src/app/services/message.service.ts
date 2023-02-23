import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '../models/message';

export const MockMessages: Message[] = [
  {
    title: 'Message 1',
    msg: 'This is message 1',
    isChecked: true,
  },
  {
    title: 'Message 2',
    msg: 'This is message 2',
    isChecked: true,
  },
  {
    title: 'Message 3',
    msg: 'This is message 3',
    isChecked: true,
  },
  {
    title: 'Message 4',
    msg: 'This is message 4',
    isChecked: false,
  },
];

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
