import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { authGuard } from './auth/auth.guard';
import { FlightEditGuard } from './guards/flight-edit.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'notifications',
        
        loadChildren: () =>
        import('./notifications/notifications.module').then(
          (m) => m.NotificationsModule
          ),
        },
        {
          path: 'more',
          
          loadChildren: () =>
          import('./more/more.module').then((m) => m.MoreModule),
        },
        {
          path: 'my-day',
          
          loadChildren: () =>
          import('./my-day/my-day.module').then((m) => m.MyDayModule),
        },
        {
          path: 'home',
          canActivate: [AuthGuard],
          data: {roles: ['user', 'admin']},
          loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'sso',
          
          loadChildren: () =>
          import('./sso/sso.module').then((m) => m.SsoModule),
        },
        {
          path: 'flights',
          canDeactivate: [],
          loadChildren: () =>
          import('./flights/flights.module').then((m) => m.FlightsModule),
        },
        {
          path: 'flight/:id',
          canLoad: [FlightEditGuard],
          loadChildren: () =>
          import('./flight-detail/flight-detail.module').then((m) => m.FlightDetailModule),
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./fault/fault.module').then((m) => m.FaultModule),
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
})
export class AppRoutingModule {}
