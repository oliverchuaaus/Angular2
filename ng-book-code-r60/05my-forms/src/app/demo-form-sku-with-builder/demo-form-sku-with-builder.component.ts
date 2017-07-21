import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm:FormGroup;
  sku:FormControl;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({sku:''});
  }

  submitForm(form: FormGroup) {
    console.log(form.value);
    console.log(form.controls['sku'].value);
  }

}
