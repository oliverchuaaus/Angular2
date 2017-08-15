import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../course.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  courseList: Array<Course>;
  constructor(public courseService: CourseService, public loginService: LoginService) { }

  ngOnInit() {
    let teacherId: string = this.loginService.getUsername();
    this.courseService.getTeacherCourseList(teacherId).subscribe(
      courseList => {
        this.courseList = courseList;
      },
      err => { this.handleError(err) }
    );
    return false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
