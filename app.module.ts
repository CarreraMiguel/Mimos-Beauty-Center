import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { IntersectionObserverChildrenDirective } from './intersection-observer-children.directive';
import { ManicureComponent } from './manicure/manicure.component';
import { PedicureComponent } from './pedicure/pedicure.component';
import { DepilacionComponent } from './depilacion/depilacion.component';
import { FacialComponent } from './facial/facial.component';
import { EyelashComponent } from './eyelash/eyelash.component';
import { PresoterapyComponent } from './presoterapy/presoterapy.component';
import { MaderoterapyComponent } from './maderoterapy/maderoterapy.component';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionObserverDirective,
    IntersectionObserverChildrenDirective,
    ContactComponent,
    HomeComponent,
    KnowmoreComponent,
    ManicureComponent,
    PedicureComponent,
    DepilacionComponent,
    FacialComponent,
    EyelashComponent,
    PresoterapyComponent,
    MaderoterapyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
