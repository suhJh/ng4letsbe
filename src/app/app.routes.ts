import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegSrFormComponent } from './components/reg-sr-form/reg-sr-form.component';
import { SrListComponent } from './components/sr-list/sr-list.component';
import { SubsrListComponent } from './components/subsr-list/subsr-list.component';
import { SrDetailComponent } from './components/sr-detail/sr-detail.component'


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'regSrForm', component: RegSrFormComponent },
    { path: 'srList', component: SrListComponent },
    { path: 'subsrList', component: SubsrListComponent },
    { path: 'srDetail/:srNo', component: SrDetailComponent }
];


