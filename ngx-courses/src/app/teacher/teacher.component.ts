import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../course/course.service';
import { AuthService } from '../auth/auth.service';
import { AwsRolesService } from '../auth/aws-roles.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  courseList: Array<Course>;
  constructor(public courseService: CourseService, public authService: AuthService, public awsRolesService: AwsRolesService) { }

  ngOnInit() {
    let teacherId: string = this.authService.getUsername();
    this.courseService.getTeacherCourseList(teacherId).subscribe(
      courseList => {
        this.courseList = courseList;
      },
      err => { this.handleError(err) }
    );

    this.awsRolesService.getRoleList();
    return false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
