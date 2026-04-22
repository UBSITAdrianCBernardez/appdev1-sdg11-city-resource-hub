import { Routes } from '@angular/router';
import { accessGuard } from './guards/access.guard';
import { pendingChangesGuard } from './guards/pending-changes.guard';
import { AboutPageComponent } from './pages/about/about.page';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page';
import { DetailPageComponent } from './pages/detail/detail.page';
import { HomePageComponent } from './pages/home/home.page';
import { NotFoundPageComponent } from './pages/not-found/not-found.page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [accessGuard] },
  {
    path: 'resource/:id',
    component: DetailPageComponent,
    canDeactivate: [pendingChangesGuard]
  },
  { path: 'about', component: AboutPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' }
];
