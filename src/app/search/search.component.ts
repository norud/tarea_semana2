import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { CelularesService } from "../servicios/cel.service";
import { View, Color } from "tns-core-modules/ui/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
resultados: Array<string>;
@ViewChild("layout", { static: false }) layout: ElementRef;

    constructor(private celular: CelularesService) {
        // Use the component constructor to inject providers.
    }
    cambio (e) {
        let indicator = <ActivityIndicator>e.object;
        console.log("indicator.busy: " + indicator.busy);
        }
    ngOnInit(): void {
        // Init your component properties here.
        this.celular.agregar('Iphone 6');
        this.celular.agregar('Sansumg ');
        this.celular.agregar('Iphone 11');
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    searchResult (s: string){
        this.resultados = this.celular.buscar()
        .filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("red"),
            duration: 300,
            delay: 150,
            opacity: 0.6
        }).then(() => layout.animate({
            backgroundColor: new Color("white"),
            duration: 300,
            delay: 150,
            opacity: 1
        }))
    }
}
