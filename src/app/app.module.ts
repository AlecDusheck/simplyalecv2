import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BorderedPageComponent } from './bordered-page/bordered-page.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        BorderedPageComponent,
        ContactMeComponent,
        ResumeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
