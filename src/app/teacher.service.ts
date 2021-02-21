import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'https://jordanegs.xyz/teacher';
  constructor(private http: HttpClient) { }
  getTeacher(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/find/' + id)
  }
  getListaTeachers(): Observable<any> {
    return this.http.get(this.baseUrl + '/all')
  }
  crearTeacher(teacher: object): Observable<object> {
    return this.http.post(this.baseUrl + '/new', teacher)
  }
  actualizarTeacher(teacher: object): Observable<object> {
    return this.http.put(this.baseUrl + '/edit', teacher)
  }
  eliminarTeacher(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id)
  }
}
