import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutasserviceService } from '../services/rutasservice.service';
import { UserRoute } from '../interfaces/user-route';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf, NgFor],

})
export class AddRoutesComponent {
  public user:string = 'Andres';
  userList:string[] = [];
  userSelect = new FormControl('Andres');
  routeForm: FormGroup;
  public likedRoutes:UserRoute[] = [];
  places: string[] = [];

  constructor(private formBuilder: FormBuilder, private rutasserviceService: RutasserviceService) {
    this.routeForm = this.formBuilder.group({
      routeName: [''],
      newPlace: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.loadLikedRoutes();
  }

  agregarLugar() {
    if (this.routeForm.valid) {
      const newPlaceValue = this.routeForm.get('newPlace')?.value;
      this.places.push(newPlaceValue);
      this.routeForm.get('newPlace')?.reset();
    }
  }
    selection(user:string){
    this.user = user;
  }

  loadLikedRoutes(){
    this.rutasserviceService.getLikedRespone().subscribe(response => {
      this.likedRoutes = (response as UserRoute[]);
      this.likedRoutes.map(likedRoute => {
        if( !this.userList.includes(likedRoute.usuario.toString())) this.userList.push(likedRoute.usuario)
      })
    })
  }
  onSubmit() {
    const routeName = this.routeForm.get('routeName')?.value;
    
    if (routeName && this.places.length > 0) {
      // Envía los datos al backend como un arreglo de cadenas

      this.rutasserviceService.addRoute(routeName, this.places).subscribe(
        (response) => {
          console.log('Registro creado en el backend:', response);
          // Puedes realizar cualquier otra acción necesaria después de la respuesta del backend
        },
        (error) => {
          console.error('Error al crear el registro:', error);
          // Manejar el error de acuerdo a tus necesidades
        }
      );

      this.rutasserviceService.addUserRoute(routeName, this.user).subscribe(
        (response) => {
          console.log('Registro creado en el backend:', response);
          // Puedes realizar cualquier otra acción necesaria después de la respuesta del backend
        },
        (error) => {
          console.error('Error al crear el registro:', error);
          // Manejar el error de acuerdo a tus necesidades
        }
      );
    }
  }
}
