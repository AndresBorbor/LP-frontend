import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../interfaces/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutasserviceService {
  private URL:string = 'http://localhost:4567/api/rutas'

  constructor(private http:HttpClient) { }

  getResponse(){
    return this.http.get(this.URL);
  }
}
