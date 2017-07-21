import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person.model';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;
  myForm: FormGroup;

  constructor(private service: PersonService, private formBuilder: FormBuilder) {
    this.service.getEmployeeAssessment('').subscribe(data => { this.person = data; console.log(data); });
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }


  initAddress() {
    return this.formBuilder.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  submitForm(model: any) {
    if (model){
    console.log(model);
    }
  }
}
