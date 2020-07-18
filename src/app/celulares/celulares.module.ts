import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CelularesRoutingModule } from './celulares-routing.module';
import { CelularesComponent } from "./celulares.component";

@NgModule({
  declarations: [
    CelularesComponent
  ],
  imports: [
    CelularesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CelularesModule { }
