import { Component } from '@angular/core';
import { Ruta } from '../interfaces/ruta';
import { RutasserviceService } from '../services/rutasservice.service';
import { UserRoute } from '../interfaces/user-route';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor],
})
export class RutasComponent {
  likeImage = '/assets/like.png';
  disLikeImage = '/assets/dislike_white.png';
  public user:string = 'Andres';
  public routes:Ruta[] = [];
  public likedRoutes:UserRoute[] = [];
  userList:string[] = [];
  userSelect = new FormControl('Andres');
  constructor(private dataProvider:RutasserviceService){}
  ngOnInit(){
    this.loadLikedRoutes();
  }
  
  loadLikedRoutes(){
    this.dataProvider.getLikedRespone().subscribe(response => {
      this.likedRoutes = (response as UserRoute[]);
      this.likedRoutes.map(likedRoute => {
        if( !this.userList.includes(likedRoute.usuario.toString())) this.userList.push(likedRoute.usuario)
      })
      this.loadRoutes();
    })
  }

  loadRoutes(){
    this.dataProvider.getResponse().subscribe(response => {
      let responseRoutes = (response as Ruta[])
      const userRoutes = (this.likedRoutes.filter(likedRoute => likedRoute.usuario === this.user)).map(route => route.ruta);
      this.routes = responseRoutes.filter(route => userRoutes.includes(route.nombre));
    })
  }

  selection(user:string){
    this.user = user;
    this.loadLikedRoutes();
  }

  dislike(ruta:Ruta){
    this.dataProvider.deleteLikedRecord(ruta, this.user).subscribe(response => {this.loadLikedRoutes()});
  }

  notRecommend(){
    console.log('notRecommend');
  }
}
