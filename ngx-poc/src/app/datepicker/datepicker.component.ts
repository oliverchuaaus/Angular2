import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
        this.formGroup = this.formBuilder.group({birthday: [ new Date("june 20, 1977"),]});
  }

}
