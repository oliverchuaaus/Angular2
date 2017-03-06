import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './ProductCatalogComponent';
import { ProductListComponent } from './ProductListComponent';
import { ProductComponent } from './ProductComponent';
import { SelectedProductsComponent } from './SelectedProductsComponent';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ProductCatalogComponent, ProductListComponent, SelectedProductsComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }