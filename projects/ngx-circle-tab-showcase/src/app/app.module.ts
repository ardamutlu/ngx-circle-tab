import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxCircleTabModule} from '../../../ngx-circle-tab/src/lib/ngx-circle-tab.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCircleTabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
