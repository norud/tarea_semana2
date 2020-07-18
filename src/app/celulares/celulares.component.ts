import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { CelularesService } from "../servicios/cel.service";

@Component({
    selector: "Celulares",
    templateUrl: "./celulares.component.html"
})
export class CelularesComponent implements OnInit {

    constructor(private celular: CelularesService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.celular.agregar('Iphone 6');
        this.celular.agregar('Iphone 7');
        this.celular.agregar('Iphone 11');
        //console.log(this.celular.buscar());

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x):void {
        console.log(x);

    }
}
