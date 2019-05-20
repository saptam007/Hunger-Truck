import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TruckModule } from './truck/truck.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TruckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
