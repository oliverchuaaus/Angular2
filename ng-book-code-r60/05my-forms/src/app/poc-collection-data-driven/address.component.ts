import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PersonService } from '../poc-collection/person.service';
import { Person } from '../poc-collection/person.model';
import { Address } from '../poc-collection/address.model';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {
    @Input() address: Address;
    @Input() addressesControl: FormGroup;

    constructor() { }

    ngOnInit() {

    }

}
