import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../interfaces/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutasserviceService {
  private URL:string = 'http://localhost:4567/api/rutas'
  private likedURL:string = 'http://localhost:4567/api/users_routes'
  private deleteLikedRoute:string = `http://localhost:4567/api/users_routes/`

  constructor(private http:HttpClient) { }

  getResponse(){
    return this.http.get(this.URL);
  }

  getLikedRespone(){
    return this.http.get(this.likedURL);
  }

  deleteLikedRecord(route:Ruta, user:string){
    let url = this.deleteLikedRoute+user+"/"+route.nombre;
    return this.http.delete(url);
  }
}
