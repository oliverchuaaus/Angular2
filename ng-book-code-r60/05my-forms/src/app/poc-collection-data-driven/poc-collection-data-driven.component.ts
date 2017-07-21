import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PersonService } from '../poc-collection/person.service';
import { Person } from '../poc-collection/person.model';

@Component({
  selector: 'app-poc-collection-data-driven',
  templateUrl: './poc-collection-data-driven.component.html',
})
export class PocCollectionDataDrivenComponent implements OnInit {
  personForm: FormGroup;
  person: Person;

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
    this.personService.getJson().subscribe(data => {
      console.log(data);
      this.person = data;
      this.personForm.controls['name'].setValue(this.person.name);

    });
  }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      name: ''
    });
  }

  initAddress() {
    return this.formBuilder.group({
      street: ['',],
      postcode: ['']
    });
  }

  submitForm(form: FormGroup) {
    console.log(form.value);
  }
}
