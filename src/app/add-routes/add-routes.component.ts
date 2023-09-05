import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutasserviceService } from '../services/rutasservice.service';


@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent {
  routeForm: FormGroup;
  places: string[] = [];

  constructor(private formBuilder: FormBuilder, private rutasserviceService: RutasserviceService) {
    this.routeForm = this.formBuilder.group({
      routeName: [''],
      newPlace: ['', Validators.required]
    });
  }

  agregarLugar() {
    if (this.routeForm.valid) {
      const newPlaceValue = this.routeForm.get('newPlace')?.value;
      this.places.push(newPlaceValue);
      this.routeForm.get('newPlace')?.reset();
    }
  }

  onSubmit() {
    const routeName = this.routeForm.get('routeName')?.value;

    if (routeName && this.places.length > 0) {
      // Envía los datos al backend a través del servicio
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
    }
  }
}
