import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { TeacherService } from '../teacher.service'
import { Teacher } from '../teacher'

@Component({
  selector: 'app-teacher-detalles',
  templateUrl: './teacher-detalles.component.html',
  styleUrls: ['./teacher-detalles.component.css']
})
export class TeacherDetallesComponent implements OnInit {
  id: number
  teacher: Teacher
  constructor(private route:ActivatedRoute,
    private router:Router,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.teacher=new Teacher()
    this.id=this.route.snapshot.params['id']
    this.teacherService.getTeacher(this.id).subscribe(
      data=>{
        console.log(data)
        this.teacher=data.message;
      },error=>console.log(error)
    )
  }
  verListado(){
    this.router.navigate(['/teachers'])
  }

}
