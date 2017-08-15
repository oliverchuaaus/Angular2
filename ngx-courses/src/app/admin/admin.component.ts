import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService, Course, Teacher } from '../course.service';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courseList: Array<Course>;
  addCourseFG: FormGroup;
  teacherList: Array<Teacher>;
  constructor(public courseService: CourseService, public loginService: LoginService, public fb: FormBuilder) {
    this.addCourseFG = fb.group({ courseName: '' });
  }

  ngOnInit() {
    this.getCourseList();
    this.courseService.getTeacherList().subscribe(
      list => {
        this.teacherList = list;
      }
    );
  }


  private getCourseList() {
    this.courseService.getAllCourseList().subscribe(
      courseList => {
        this.courseList = courseList;

      },
      err => { this.handleError(err) }
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addCourse(addCourseFG: any) {
    let course = new Course();
    course.courseName = addCourseFG.courseName;
    this.courseService.addCourse(course).subscribe(course => { });
    this.getCourseList();
  }


}