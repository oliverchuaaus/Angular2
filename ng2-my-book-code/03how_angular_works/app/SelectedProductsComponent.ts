import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'selected-products',
  inputs: ['selectedProducts'],
  template: `
  <h1>Selected Products:</h1>
  <ul>
    <li *ngFor="let product of selectedProducts; let index=index">{{index+1}} - {{product.name}} ({{product.code}})</li>
  </ul>
  `
})
export class SelectedProductsComponent{
}