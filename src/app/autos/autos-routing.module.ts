import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { path } from 'tns-core-modules/file-system';
import { AutosComponent } from './autos.component';


const routes: Routes = [
    {path: "", component: AutosComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AutosRoutingModule { }
