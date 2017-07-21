import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PersonService } from '../poc-collection/person.service';
import { Person } from '../poc-collection/person.model';

@Component({
  selector: 'app-poc-collection',
  templateUrl: './poc-collection.component.html',
  styleUrls: ['./poc-collection.component.css']
})
export class PocCollectionComponent implements OnInit {
  myForm: FormGroup;
  person: Person;

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
    this.personService.getJson().subscribe(data => {
      console.log(data);
      this.person = data;
      this.myForm.controls['sku'].setValue(this.person.name);

      const arrayControl = <FormArray>this.myForm.controls['addresses'];
      this.person.addresses.forEach(address => {
        let newGroup = this.formBuilder.group({
          street: [address.street],
          postcode: [address.postcode]
        });
        arrayControl.push(newGroup);
      });

    });
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      sku: '',
      addresses: this.formBuilder.array([])
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
