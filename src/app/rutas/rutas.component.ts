import { Component } from '@angular/core';
import { Ruta } from '../interfaces/ruta';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  likeImage = '/assets/like.png';
  image = '/assets/dislike.png';
  data:Ruta[] = [{
    nombre:'ruta1',
    tiempo: '25min',
    valoracion:4.0,
    dinero: 100,
    likes:20,
    no_recomendado: 15,
  },{
    nombre:'ruta2',
    tiempo: '25min',
    valoracion:4.0,
    dinero: 250,
    likes:20,
    no_recomendado: 7,
  },{
    nombre:'ruta3',
    tiempo: '25min',
    valoracion:4.0,
    dinero: 400,
    likes:20,
    no_recomendado: 5,
  }]


  like(){
      console.log("like");
    
  }

  dislike(){
    console.log('dislike');
  }
}
