import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiantes.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class EstudianteService {
    
    public estudiantes: Estudiante[] = [
        {
            id: uuid(),
            nombre: 'lus',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
        {
            id: uuid(),
            nombre: 'ana',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
        {
            id: uuid(),
            nombre: 'pedro',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
        {
            id: uuid(),
            nombre: 'juan',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
        {
            id: uuid(),
            nombre: 'maria',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
        {
            id: uuid(),
            nombre: 'tony',
            carrera: 'sistemas',
            edad: 23,
            tel: '123'
        },
    ]

    addEstudiante(estudiante: Estudiante): void {
        const newEstudiante = {id: uuid(), ...estudiante}

        this.estudiantes.push(newEstudiante);
    }

    deleteEstudiante(id: string): void {
        this.estudiantes = this.estudiantes.filter( estudiante => estudiante.id !== id)
    }
}