import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelect'],
  template: `
  <product *ngFor="let product of productList" [product]="product" (click)="productSelected(product)" [class.selected]="isSelected(product)"></product>
  `
})
export class ProductListComponent {
  onProductSelect:EventEmitter<Product> = new EventEmitter();
  selectedProduct:Product;

  productSelected(product: Product) {
    console.log('Selected '+product.name + ' in list');
    this.onProductSelect.emit(product);
    this.selectedProduct = product;
  }

  isSelected(product: Product){
    return product == this.selectedProduct;
  }

}