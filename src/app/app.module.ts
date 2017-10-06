import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdCustomModule } from './modules/md.custom.module';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SrListComponent } from './components/sr-list/sr-list.component';
import { SubsrListComponent } from './components/subsr-list/subsr-list.component';
import { RegSrFormComponent } from './components/reg-sr-form/reg-sr-form.component';
import { SrDetailComponent } from './components/sr-detail/sr-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SrListComponent,
    SubsrListComponent,
    RegSrFormComponent,
    SrDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCustomModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
