import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherComponent } from './afficher/afficher.component';
import { InsererComponent } from './inserer/inserer.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherComponent,
    InsererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
