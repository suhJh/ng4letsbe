import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegSrFormComponent } from './components/reg-sr-form/reg-sr-form.component';

import { LoginGuard } from './app.guards';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'regSrForm/:srTpSeq', component: RegSrFormComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];


