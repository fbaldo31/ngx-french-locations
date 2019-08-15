import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatOptionModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule, BrowserModule,
    MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule
  ],
  exports: []
})
export class NgxFrenchLocationModule { }
