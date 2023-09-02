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
    nombre:'Ruta Guayarte',
    tiempo: '25min',
    valoracion:4.0,
    dinero: 100,
    likes:20,
    no_recomendado: 15,
  },{
    nombre:'Ruta ceibos',
    tiempo: '25min',
    valoracion:4.0,
    dinero: 250,
    likes:32,
    no_recomendado: 7,
  },{
    nombre:'Ruta Urdesa',
    tiempo: '30min',
    valoracion:4.0,
    dinero: 400,
    likes:40,
    no_recomendado: 14,
  }]


  like(){
      console.log("like");
    
  }

  dislike(){
    console.log('dislike');
  }
}
