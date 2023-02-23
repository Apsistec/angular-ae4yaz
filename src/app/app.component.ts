import {
  Component,
  OnInit,
} from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { CurrentUser } from './models/current-user';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  page: string;
  user: CurrentUser;

  constructor(
    private platform: Platform,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private messageService: MessageService,
    ) {
      const time = Math.floor((Math.random() * 1000)+ 7) 
      if (time > 8000) {
      setTimeout(() => {
        this.showAlert(),
      time});
      }
    }
    
  ngOnInit() {
    this.initializeApp();
   // this.user = this.authService.getUser();
  }

  showAlert(){
    this.messageService.presentAlert()
  }


  initializeApp() {
    this.platform.ready().then(platform => {
      this.platform.url();
      this.page = platform.substring(platform.lastIndexOf("/")+1);
    });
  }

  hasRole(role: string): boolean{
    return this.user.roles.filter(hasRole => hasRole === role).length > 0;
  }
    
}