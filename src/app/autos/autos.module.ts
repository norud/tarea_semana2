import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AutosRoutingModule } from './autos-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AutosComponent } from '../autos/autos.component';
import { SearchAutoFormComponent } from './search-autoform.component';
import { AutoMinLenDirective } from "./mail.validator";


@NgModule({
  declarations: [
      AutosComponent,
      SearchAutoFormComponent,
      AutoMinLenDirective
    ],
  imports: [
    AutosRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AutosModule { }
