import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../address/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() addressesFormArray:FormArray;
  @Input() address:Address;
  addressFormGroup:FormGroup;

  constructor(public formBuilder:FormBuilder) {
    console.log('inside constructor');
   }

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
        street:this.address.street,
        postcode:this.address.postcode
    });
    this.addressesFormArray.push(this.addressFormGroup);
  }

}
