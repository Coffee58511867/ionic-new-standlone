import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'book',
    loadComponent: () => import('./book/book.page').then( m => m.BookPage)
  },
  {
    path: 'view-bookings',
    loadComponent: () => import('./view-bookings/view-bookings.page').then( m => m.ViewBookingsPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'add-notes',
    loadComponent: () => import('./add-notes/add-notes.page').then( m => m.AddNotesPage)
  },
];
