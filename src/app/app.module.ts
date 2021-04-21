import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { NewsComponent } from './news/news.component';
import { NewCardComponent } from './new-card/new-card.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    NewsComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
