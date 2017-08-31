import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { awsURL } from '../constants';
import 'rxjs/add/operator/map';

@Injectable()
export class AwsCourseService {
  private url: string = awsURL;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private router: Router) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getStudentCourseList(studentId: string): Observable<Array<Course>> {
    return this.http.get(this.url + "student/" + studentId).map((res: any) => res.json());
  }

  public getTeacherCourseList(teacherId: string): Observable<Array<Course>> {
    return this.http.get(this.url + "teacher/" + teacherId).map((res: any) => res.json());
  }

  public registerCourse(course: Course, studentId: string): Observable<Array<Course>> {
    return this.http.put(this.url + "register/" + studentId, JSON.stringify(course)).map((res: any) => res.json());
  }

  public deregisterCourse(course: Course, studentId: string): Observable<Array<Course>> {
    return this.http.put(this.url + "deregister/" + studentId, JSON.stringify(course)).map((res: any) => res.json());
  }  

  public getAllCourseList(): Observable<Array<Course>> {
    return this.http.get(this.url + "courses").map((res: any) => res.json());
  }

  public getTeacherList(): Observable<Array<Teacher>> {
    return this.http.get(this.url + "teachers").map((res: any) => res.json());
  }

  public addCourse(course: Course): Observable<Course> {
    return this.http.post(this.url + "course", JSON.stringify(course)).map((res: any) => res.json());
  }

  public updateCourse(course: Course): Observable<Course> {
    return this.http.put(this.url + "course", JSON.stringify(course)).map((res: any) => res.json());
  }
}

export class Course {
  courseId: string;
  courseName: string;
  active: boolean;
  teacher: Teacher;
  studentList: Array<Student> = [];
}

export class Teacher {
  teacherId: string;
  teacherName: string;
}

export class Student {
  studentId: string;
  studentName: string;
}