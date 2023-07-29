import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../shared/models/task';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl= 'http://localhost/prueba-tecnica/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'getTasks.php');
  }
  addTask(dataTask: Task): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'addTask.php',dataTask);
  }
  deleteTask(id: any): Observable<any>{
    const url = `${this.baseUrl+'deleteTask.php'}?id=${id}`;
    return this.http.delete<any>(url)
  }
  getTask(id: any): Observable<any> {
    const url = `${this.baseUrl+'getTask.php'}?id=${id}`;
    return this.http.get<any>(url)
  }
  editTask(dataTask: Task, id:any): Observable<any> {
    const urlEdit = `${this.baseUrl+'editTask.php'}?id=${id}`;
    return this.http.put<any>(urlEdit,dataTask)
  }



}
