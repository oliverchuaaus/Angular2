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
      /*
      this.personFormGroup = this.formBuilder.group({
        name: [this.person.name]
      });
      this.personFormGroup.addControl('addresses', new FormArray([]));
      const addressesFormArray = <FormArray>this.personFormGroup.controls['addresses'];

      this.person.addresses.forEach(address => {
        const addressFormGroup = this.formBuilder.group({
          street:address.street,
          postcode:address.postcode
        });
        addressesFormArray.push(addressFormGroup);
        
      });
*/
    });
  }

  ngOnInit() {

    this.person = {
      "id": "09413561",
      "name": "Kris",
      "addresses": [
        {
          "street": "Chandos",
          "postcode": "2131"
        },
        {
          "street": "Hampstead",
          "postcode": "2140"
        }
      ]
    };
    
      this.personFormGroup = this.formBuilder.group({
        name: [this.person.name]
      });


  }


  onSubmit() {
    if (this.personFormGroup) {
      console.log(this.personFormGroup.value);
    }
  }
}
