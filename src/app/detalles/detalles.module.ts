import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';


@NgModule({
  declarations: [
    DetallesComponent
  ],
  imports: [
    DetallesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DetallesModule { }
