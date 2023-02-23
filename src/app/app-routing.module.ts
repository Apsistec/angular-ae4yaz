import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: TabsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),        },
          {
            path: 'my-day',
            loadChildren: () => import('./my-day/my-day.module').then((m) => m.MyDayModule),
          },
          {
            path: 'notifications',
            loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsModule),
          },
          {
            path: 'more',
            loadChildren: () => import('./more/more.module').then((m) => m.MoreModule),
          },
 
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
