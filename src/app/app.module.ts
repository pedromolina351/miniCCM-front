import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ParejasComponent } from './parejas/parejas.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    ParejasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
