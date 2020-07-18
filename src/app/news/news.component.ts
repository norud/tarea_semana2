import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsService } from "../servicios/news.service";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";

@Component({
    selector: "News",
    templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {

    onPull(e) {
        console.log(e);
        const pullRefresh = e.object;
        setTimeout(() => {
        this.news.crear('new add more');
        this.news.crear('new add more');
        this.news.crear('new add more');
        this.news.crear('new add more');
        this.news.crear('new add more');
        pullRefresh.refreshing = false;
        }, 1000);
       }
    constructor(private news: NewsService, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }
    doLater(fn){ setTimeout(fn, 1000)}
    ngOnInit(): void {
        // Init your component properties here.
        this.news.crear('New 1 Angular update to 10');
        this.news.crear('New 2 App for Iphone and Android');
        this.news.crear('New 3 Nodejs');
        this.news.crear('New 4 MongoDB');
        //console.log(this.news.buscar());
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTapNews(n):void{
        console.log(n);
        this.routerExtensions.navigate([n], {
            transition: {
              name: "fade"
            }
          });
    }
    onDelete(v):void{
        console.log(v);
        const toastOptions: Toast.ToastOptions = {
            text: "El registo '" + v + "' fue borrado",
            duration: Toast.DURATION.SHORT,
            position: Toast.POSITION.TOP //optional propert
        };

        this.doLater(() => {
            dialogs.action("Seguro que quiere borrar?", "Cancelar!", ["Si", "No"])
            .then((result) => {
                if(result === "Si"){
                    this.doLater(() => Toast.show(toastOptions));
                   /* this.doLater(() =>
                    dialogs.alert({
                        title: "Se ha borrado",
                        message: "El registo '" + v + "' fue borrado",
                        okButtonText: "Ok"
                    }).then(() => console.log("Cerrado 1!")));*/
                    //procedemos a borrar en el array el dato que pasa en v
                    this.news.borrar(v);
                }else if(result === "No" ){
                    this.doLater(() =>
                    dialogs.alert({
                        title: "Operacion Cancelada!",
                        message: "El registo '" + v + "' no fue borrado",
                        okButtonText: "ok"
                    }).then(() => console.log("Cerrado 2!")));

                }
            })

        });
        //console.log(this.news.borrar(v));

    }
}
