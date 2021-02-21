import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { TeacherService } from '../teacher.service'
import { Teacher } from '../teacher'

@Component({
  selector: 'app-teacher-listar',
  templateUrl: './teacher-listar.component.html',
  styleUrls: ['./teacher-listar.component.css']
})
export class TeacherListarComponent implements OnInit {
  teachers: Observable<Teacher[]>
  constructor(
    private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    this.teachers = this.teacherService.getListaTeachers()
  }
  editarTeacher(id: number) {
    this.router.navigate(['actualizar', id])
  }
  eliminarTeacher(id: number) {
    this.teacherService.eliminarTeacher(id).subscribe(data => {
      console.log(data)
      this.reloadData()
    }, error => console.log(error)
    )
  }
  verTeacher(id: number) {
    this.router.navigate(['detalles', id])
  }

}
