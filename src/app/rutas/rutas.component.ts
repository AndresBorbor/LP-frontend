import { Component } from '@angular/core';
import { Ruta } from '../interfaces/ruta';
import { RutasserviceService } from '../services/rutasservice.service';
import { UserRoute } from '../interfaces/user-route';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  likeImage = '/assets/like.png';
  disLikeImage = '/assets/dislike_white.png';
  public user:string = 'Andres';
  public rutas:Ruta[] = [];
  public likedRoutes:UserRoute[] = [];
  constructor(private dataProvider:RutasserviceService){}
  ngOnInit(){
    this.dataProvider.getLikedRespone().subscribe(response => {
      this.likedRoutes = (response as UserRoute[]);
    })
    this.dataProvider.getResponse().subscribe(response => {
      let responseRutas = (response as Ruta[])
      for(let likedRoute of this.likedRoutes){
        for(let ruta of responseRutas){
          if(ruta['nombre'] === likedRoute['ruta'] && likedRoute['usuario'] === this.user) this.rutas.push(ruta);
        }
      }
    })
    
  }
  
  like(){
      this.likeImage = '/assets/like_white.png';
  }

  dislike(){
    console.log('dislike');
  }
}
