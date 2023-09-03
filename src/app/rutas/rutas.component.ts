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
  public routes:Ruta[] = [];
  // public likedRoutes:UserRoute[] = [];

  constructor(private dataProvider:RutasserviceService){}
  ngOnInit(){
    this.loadLikedRoutes();
  }
  
  loadLikedRoutes(){
    this.dataProvider.getLikedRespone().subscribe(response => {
      const likedRoutes = (response as UserRoute[]);
      this.loadRoutes(likedRoutes);
    })
  }

  loadRoutes(likedRoutes:UserRoute[]){
    this.dataProvider.getResponse().subscribe(response => {
      let responseRoutes = (response as Ruta[])
      const userRoutes = (likedRoutes.filter(likedRoute => likedRoute.usuario === this.user)).map(route => route.ruta);
      this.routes = responseRoutes.filter(route => userRoutes.includes(route.nombre));
    })
  }

  dislike(ruta:Ruta){
    this.dataProvider.deleteLikedRecord(ruta, this.user).subscribe(response => {this.loadLikedRoutes()});
  }

  notRecommend(){
    console.log('notRecommend');
  }
}
