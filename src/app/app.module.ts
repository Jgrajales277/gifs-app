import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    GifsModule,
    SharedModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
