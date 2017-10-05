import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SrListComponent } from './components/sr-list/sr-list.component';
import { SubsrListComponent } from './components/subsr-list/subsr-list.component';
import { RegSrFormComponent } from './components/reg-sr-form/reg-sr-form.component';
import { SrDetailComponent } from './components/sr-detail/sr-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftNavBarComponent,
    HomeComponent,
    FooterComponent,
    SrListComponent,
    SubsrListComponent,
    RegSrFormComponent,
    SrDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
