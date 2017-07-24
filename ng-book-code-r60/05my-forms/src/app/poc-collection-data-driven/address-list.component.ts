import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PersonService } from '../poc-collection/person.service';
import { Person } from '../poc-collection/person.model';
import { Address } from '../poc-collection/address.model';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html'
})
export class AddressListComponent implements OnInit {
    @Input() addresses:Array<Address>;
    
    @Input() personForm:FormGroup;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.personForm.addControl('addresses', new FormArray([]));
        this.addresses.forEach(address => {
        let newGroup = this.formBuilder.group({
          street: [address.street],
          postcode: [address.postcode]
        });
        const arrayControl = <FormArray>this.personForm.controls['addresses'];
        arrayControl.push(newGroup);
      });

    }

}
