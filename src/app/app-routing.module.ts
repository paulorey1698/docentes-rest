import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherActualizarComponent } from './teacher-actualizar/teacher-actualizar.component';
import { TeacherCrearComponent } from './teacher-crear/teacher-crear.component';
import { TeacherDetallesComponent } from './teacher-detalles/teacher-detalles.component';
import { TeacherListarComponent } from './teacher-listar/teacher-listar.component';

const routes: Routes = [
  {path: '', redirectTo: 'teachers', pathMatch: 'full'},
  {path: 'teachers', component: TeacherListarComponent},
  {path: 'agregar', component: TeacherCrearComponent},
  {path: 'actualizar/:id', component: TeacherActualizarComponent},
  {path: 'detalles/:id', component: TeacherDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
