// place for dumb components and pipes that don’t inject services but can only receive data through props.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
  // for pipes, directives, and components (local scope)
  declarations: [StringifyPipe],
  // for modules
  imports: [],
  // for services (public scope)
  providers: [],
  exports: [
    CommonModule, // NgIf, NgForOf, DecimalPipe
    FormsModule, // Register forms module ([ngModel] lives here)
    ReactiveFormsModule, // Register reactive forms module ([formControl] lives here)
    HttpClientModule,
    StringifyPipe,
  ],
})
export class SharedModule {}
