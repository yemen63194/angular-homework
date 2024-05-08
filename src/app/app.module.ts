import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { ApartementsComponent } from './apartements/apartements.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    ApartementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
