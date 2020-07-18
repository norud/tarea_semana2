import { Component, OnInit } from '@angular/core';
import { AutosService } from '../servicios/autos.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-autos',
  templateUrl: './autos.component.html',
  //styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
    resultados:Array<{id: number, marca: string, color: string}> = [];
  constructor(private auto: AutosService) { }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

  doLater(fn){ setTimeout(fn, 1000)}

  ngOnInit(): void {
      this.auto.regsitrarAuto(1, 'Toyota', 'Azul');
      this.auto.regsitrarAuto(2, 'BMW', 'Blanco');
      this.auto.regsitrarAuto(3, 'Citrone', 'Cafe');
      this.auto.regsitrarAuto(4, 'Ferrari', 'Rojo');
      this.auto.regsitrarAuto(5, 'Ford', 'Gris');
      this.auto.regsitrarAuto(6, 'Opel', 'Plateado');
      //console.log(this.auto.Autos());

  }
  //buscar autos
  searchResult (s: string){
    this.resultados = this.auto.Autos()
        .filter((x) => x.marca == s);
}
  //funcion eliminar
  borrarAuto(v: number, t: string):void{
    console.log(v);
    const toastOptions: Toast.ToastOptions = {
        text: "El registo '" + t + "' fue borrado",
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
                this.auto.borrar(v);
            }else if(result === "No" ){
                this.doLater(() =>
                dialogs.alert({
                    title: "Operacion Cancelada!",
                    message: "El registo '" + t + "' no fue borrado",
                    okButtonText: "ok"
                }).then(() => console.log("Cerrado 2!")));

            }
        })

    });
    //console.log(this.news.borrar(v));

}

}
