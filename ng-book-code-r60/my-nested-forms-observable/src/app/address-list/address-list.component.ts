import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../address/address.model';
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() personFormGroup: FormGroup;
  @Input() addresses: Array<Address>;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
     this.personFormGroup.addControl('addresses', new FormArray([]));
  }

}
