import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'catalog',
  template: `
  <h1>Product Catalog</h1>
  <product-list [productList]="productList" (onProductSelect)="productSelected($event)"></product-list>
  <selected-products [selectedProducts]="selectedProducts"></selected-products>
  `
})
export class ProductCatalogComponent implements OnInit {
  productList: Product[] = [];
  selectedProducts: Product[] = [];



  constructor() { }

  ngOnInit() {
    this.productList.push(new Product("10101", "Running Shoes", ["Shoes", "Rubber"]));
    this.productList.push(new Product("20202", "Ballet Shoes",  ["Shoes", "Cloth"]));
    this.productList.push(new Product("30303", "Kung Fu Shoes", ["Shoes", "Canvas"]));
  }

  productSelected(product: Product) {
    console.log('Selected '+product.name + ' in catalog');
    this.selectedProducts.push(product);
  }


}