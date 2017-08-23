import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../course/course.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  courseList: Array<Course>;
  constructor(public courseService: CourseService, public authService: AuthService) { }

  ngOnInit() {
    let studentId: string = this.authService.getAuthenticatedUser().getUsername();
    this.courseService.getStudentCourseList(studentId).subscribe(
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
