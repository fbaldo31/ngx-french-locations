import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatOptionModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule, BrowserModule, BrowserAnimationsModule,
    ReactiveFormsModule, HttpClientModule,
    MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatOptionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
