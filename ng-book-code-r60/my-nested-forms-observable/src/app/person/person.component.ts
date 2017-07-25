import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person.model';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personFormGroup: FormGroup;
  person: Person;

  constructor(private service: PersonService, private formBuilder: FormBuilder) {
    this.service.getEmployeeAssessment('').subscribe(data => {
      this.person = data;
      console.log(data);
      
      this.personFormGroup = this.formBuilder.group({
        name: [this.person.name]
      });
      this.personFormGroup.addControl('addresses', new FormArray([]));
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    if (this.personFormGroup) {
      console.log(this.personFormGroup.value);
    }
  }
}
