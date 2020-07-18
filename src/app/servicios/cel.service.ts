import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelularesService {
private lista: Array<string> = [];

  constructor() { }
  agregar(c: string){
      this.lista.push(c);
  }

  buscar(){
      return this.lista;
  }

}
