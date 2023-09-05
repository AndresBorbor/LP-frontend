import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  private URL: string = 'http://localhost:4567/api/rutas';
  public rutasConLikes: any[] = [];
  public rutasConNoRecomendado: any[] = [];
  public opcionSeleccionada: string = 'Mejor valorado'; // Opción predeterminada

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realiza la solicitud HTTP a la URL
    this.http.get<any[]>(this.URL).subscribe(response => {
      // Ordena las rutas por la cantidad de "likes" en orden descendente
      this.rutasConLikes = response.slice().sort((a, b) => +b.likes - +a.likes);
      
      // Ordena las rutas por la cantidad de "no_recomendado" en orden descendente
      this.rutasConNoRecomendado = response.slice().sort((a, b) => +b.no_recomendado - +a.no_recomendado);
    });
  }

  // Cambiar la opción seleccionada
  cambiarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
}
