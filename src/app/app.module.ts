import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //import forms
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // import animation
import {DataService} from './data.service'; //import service



@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ] ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // import forms
    BrowserAnimationsModule // import animations
  ],
  providers: [DataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
