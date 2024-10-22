import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authDeactivateGuard } from './guards/deactivate.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./pages/chat/chat.page').then((m) => m.ChatPage),
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
    canActivate: [authGuard],
    canDeactivate: [authDeactivateGuard],
  },
];
