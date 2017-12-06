import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SecondComponent } from './comp2';
@NgModule({
  declarations: [
    AppComponent, SecondComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, SecondComponent]
})
export class AppModule { }
