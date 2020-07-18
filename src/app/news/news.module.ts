import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NewsRoutingModule } from './news-routing.module'
import { NewsComponent } from './news.component';


@NgModule({
    imports: [
        NewsRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        NewsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewsModule { }
