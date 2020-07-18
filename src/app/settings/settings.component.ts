import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";
import { getCurrencySymbol } from "@angular/common";
import { reduce } from "rxjs/operators";
import { backgroundColorProperty } from "tns-core-modules/ui/page";
@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }
    doLater(fn){ setTimeout(fn, 1000)}

    ngOnInit(): void {
        // Init your component properties here.
      /*  this.doLater(() => {
            dialogs.action("Mesnaje", "Cancelar!", ["Opcion1", "Opcion2"])
            .then((result) => {
                console.log("Resultado:" + result);
                if(result === "Opcion1"){
                    this.doLater(() =>
                    dialogs.alert({
                        title: "Titulo 1",
                        message: "msj 1",
                        okButtonText: "btn 1"
                    }).then(() => console.log("Cerrado 1!")));
                }else if(result === "Opcion2" ){
                    this.doLater(() =>
                    dialogs.alert({
                        title: "Titulo 2",
                        message: "msj 2",
                        okButtonText: "btn 2"
                    }).then(() => console.log("Cerrado 2!")));

                }
            })

        });*/
        const toastOptions: Toast.ToastOptions = {
            text: "Ok Work it!",
            duration: Toast.DURATION.SHORT,
            position: Toast.POSITION.TOP //optional propert
        };
        this.doLater(() => Toast.show(toastOptions));
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
