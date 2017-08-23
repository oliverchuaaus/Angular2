import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../course/course.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  courseList: Array<Course>;
  constructor(public courseService: CourseService, public authService: AuthService) { }


  ngOnInit() {
    this.courseService.getAllCourseList().subscribe(
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

  studentRegistered(course:Course): boolean {
    let studentId: string = this.authService.getUsername();
    let found = false;
    course.studentList.forEach(student => {
      if (student.studentId==studentId){
        found = true;
      }
    });
    return found;
  }

  register(course:Course){
    let studentId: string = this.authService.getUsername();
    this.courseService.registerCourse(course, studentId).subscribe(
      courseList => {
        this.courseList = courseList;
      },
      err => { this.handleError(err) }
    );
    return false;
  }

  deregister(course:Course){
    let studentId: string = this.authService.getUsername();
    this.courseService.deregisterCourse(course, studentId).subscribe(
      courseList => {
        this.courseList = courseList;
      },
      err => { this.handleError(err) }
    );
    return false;
  }  

}
