import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoTextComponent } from './demo-text/demo-text.component';
import { DemoDateComponent } from './demo-date/demo-date.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTextComponent,
    DemoDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
