import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
private news: Array<string> = [];
private color:Array<{id: number, text: string}> =[
    {id: 0, text: 'Rojo'},
    {id: 1, text: 'Verde'},
    {id: 2, text: 'Amarillo'},
    {id: 3, text: 'Marron'},
    {id: 4, text: 'Naranja'},
];
  constructor() { }
  crear( t: string){
      this.news.push(t);
  }
  buscar(){
      return this.news;
  }
  borrar(v: string){
      let n = this.news;
      this.news = n.filter(function(n){
        return  n != v;
      }
      );
  }

  colores(){
      return this.color;
  }
}
