import { Component, Input } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiantes.interface';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrl: './list-show.component.css'
})
export class ListShowComponent {

  @Input()
  public showEstudiantes: Estudiante[] = [
    {
      nombre: '',
      carrera: '',
      edad: 0,
      tel: ''
    }
  ]
}
