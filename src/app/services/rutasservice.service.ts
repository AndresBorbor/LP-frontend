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
  private createRute: string = 'http://localhost:4567/api/rutas';



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

  addRoute(routeName: string, places: string[]) {
    const data = {
      nombre: routeName,
      lugares: places,
      likes: 0,
      no_recomendado: 0,
    };

    return this.http.post(`${this.createRute}`, data);
  }
  addUserRoute(routeName: string, user: string){

    const data = {
      usuario: user,
      ruta: routeName
    };

    return this.http.post(`${this.likedURL}`, data);
  }
}
