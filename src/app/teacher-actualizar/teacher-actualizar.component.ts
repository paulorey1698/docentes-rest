import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Teacher } from '../teacher'
import { TeacherService } from '../teacher.service'

@Component({
  selector: 'app-teacher-actualizar',
  templateUrl: './teacher-actualizar.component.html',
  styleUrls: ['./teacher-actualizar.component.css']
})
export class TeacherActualizarComponent implements OnInit {
  id: number
  teacher: Teacher
  enviado = false
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.teacher = new Teacher()
    this.id = this.route.snapshot.params['id']
    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
        console.log(data)
        this.teacher = data.message;
      }, error => console.log(error))
  }
  onSubmit() {
    this.enviado = true
    this.updateTeacher()
  }
  updateTeacher() {
    this.teacherService.actualizarTeacher(this.teacher)
      .subscribe(data => {
        console.log(data)
        this.teacher = new Teacher()
        this.verListado()

      }, error => console.log(error))
  }
  verListado() {
    this.router.navigate(['/teachers'])
  }

}
