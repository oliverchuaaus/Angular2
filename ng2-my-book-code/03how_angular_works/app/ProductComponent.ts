import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'product',
  inputs : ['product'],
  host: {'class': 'productClass'},
  template: `
  <h3>Product</h3>
  <div>Code: {{product.code}}</div>
  <div>Name: {{product.name}}</div>
  <div>Department: {{product.department}}</div>
  `
})
export class ProductComponent{
}
