import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListShowComponent } from './components/list-show/list-show.component';


@NgModule({
  declarations: [ 
    FormComponent,
    ListComponent,
    MainPageComponent,
    ListShowComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class EstudiantesModule { }
