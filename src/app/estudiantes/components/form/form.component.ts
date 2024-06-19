import { Component, Output,EventEmitter } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiantes.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public EmiterEstudianteForm: EventEmitter<Estudiante> = new EventEmitter()

  public estudianteFormulario: Estudiante = {
    nombre: '',
    carrera: '',
    edad: 0,
    tel: ''
  }

  emitEstudiante(): void {
    this.EmiterEstudianteForm.emit(this.estudianteFormulario);

    this.estudianteFormulario = {nombre: '', carrera: '', edad: 0, tel: ''}
  }
}
