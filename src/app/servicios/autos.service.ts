import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
    private autos:Array<{id: number, marca: string, color: string}> = [];

  constructor() { }

  regsitrarAuto(id: number, marca: string, color: string):void {
      this.autos.push({id, marca, color});
  }

  Autos(){
      return this.autos;
  }

  //borrar
  borrar(v: number){
    return this.autos.splice(v, 1);
}

}
