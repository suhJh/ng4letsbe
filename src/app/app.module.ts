import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MemberService } from './services/member.service';

import { LoginGuard } from './guards/login.guard';
import { RegSrFormComponent } from './components/reg-sr-form/reg-sr-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavTopComponent,
    NavLeftComponent,
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    RegSrFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MemberService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
