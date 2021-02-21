import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherCrearComponent } from './teacher-crear/teacher-crear.component';
import { TeacherDetallesComponent } from './teacher-detalles/teacher-detalles.component';
import { TeacherListarComponent } from './teacher-listar/teacher-listar.component';
import { TeacherActualizarComponent } from './teacher-actualizar/teacher-actualizar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCrearComponent,
    TeacherDetallesComponent,
    TeacherListarComponent,
    TeacherActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
