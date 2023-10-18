import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomIconComponent } from './random-icon/random-icon.component';
import {ColorDirective} from "./random-icon/color.directive";
import { LoaderComponent } from './ui/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    RandomIconComponent,
    ColorDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
