import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {TeacherService} from '../teacher.service'
import {Teacher} from '../teacher'

@Component({
  selector: 'app-teacher-crear',
  templateUrl: './teacher-crear.component.html',
  styleUrls: ['./teacher-crear.component.css']
})
export class TeacherCrearComponent implements OnInit {
  teacher: Teacher = new Teacher()
  enviado=false
  constructor(
    private teacherService: TeacherService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  nuevoTeacher():void{
    this.enviado=false
    this.teacher= new Teacher();
  }
  verListado(){
    this.router.navigate(['/teachers'])
  }
  onSubmit(){
    this.enviado=true
    this.guardarTeacher()
  }
  guardarTeacher(){
    this.teacherService.crearTeacher(this.teacher).subscribe(
      data=>{
        console.log(data)
        this.teacher=new Teacher()
        this.verListado()
      },
      error => console.log(error)
    )
  }

}
