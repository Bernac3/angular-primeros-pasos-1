import { Component } from '@angular/core';
import { EstudianteService } from '../services/estudiantes.service';
import { Estudiante } from '../interfaces/estudiantes.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private estudiantesServicio: EstudianteService){}
  

    get estudiante(): Estudiante[] {
        return [...this.estudiantesServicio.estudiantes]
    }

    addEstudiante(estudiante: Estudiante):void {
        this.estudiantesServicio.addEstudiante(estudiante)
    }
    deleteEstudiante(id: string): void {
        this.estudiantesServicio.deleteEstudiante(id)
    }
}