import { Component, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  @Input()message: Message;

  constructor(public messageService: MessageService) {}

}
