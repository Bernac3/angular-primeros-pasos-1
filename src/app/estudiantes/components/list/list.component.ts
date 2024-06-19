import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiantes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listaEstudiantes: Estudiante[] = [
    {
      nombre: 'Luis',
      carrera: 'Sistemas',
      edad: 3,
      tel: '234'
    }
  ]

  @Output()
  public EliminarEstudianteEmiter: EventEmitter<string> = new EventEmitter();

  eliminarEstudiante(i?: string): void { 
    this.EliminarEstudianteEmiter.emit(i)
  }
}
