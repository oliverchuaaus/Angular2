import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService, Course, Teacher } from '../course/course.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterContentChecked {
  @Input() course: Course;
  @Input() teacherList: Array<Teacher>;
  updateCourseFG: FormGroup;

  constructor(public courseService: CourseService, public authService: AuthService, public fb: FormBuilder) {
  }


  ngOnInit() {
    if (!this.course || !this.teacherList) {
      this.updateCourseFG = this.fb.group({
        courseName: null,
        active: null,
        teacher: null
      });
    }

    if (this.course && this.teacherList) {
      let teacherId: string = this.course.teacher ? this.course.teacher.teacherId : null;
      let teacher = null;

      if (this.teacherList) {
        teacher = this.teacherList.find(teacher => teacher.teacherId == teacherId);
      }
      console.log("teacher: " + teacher);

      this.updateCourseFG = this.fb.group({
        courseId: this.course.courseId,
        courseName: this.course.courseName,
        active:  this.course.active,
        teacher: teacher
      });
    }
  }

  ngAfterContentChecked() {

  }


  updateCourse(updateCourseFG: string) {
    //convert to course
    console.log(updateCourseFG);
    return false;
    //let course: Course = JSON.parse(updateCourseFG);
    //this.courseService.updateCourse(course);
  }

}
