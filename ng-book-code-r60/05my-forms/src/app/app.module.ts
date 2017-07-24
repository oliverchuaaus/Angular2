import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { PocCollectionComponent } from './poc-collection/poc-collection.component';
import { AddressComponent } from './poc-collection/address.component';

import { PersonService } from './poc-collection/person.service';
import { PocCollectionDataDrivenComponent } from './poc-collection-data-driven/poc-collection-data-driven.component';
import { PersonDataDrivenService } from './poc-collection-data-driven/person-data-driven.service';

import { AddressListComponent } from './poc-collection-data-driven/address-list.component';

import { ParentChildComponent } from './parent-child/parent-child.component';

import { NestedFormComponent, ParentFormComponent, ChildListComponent, ChildFormComponent } from './parent-child/app';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    PocCollectionComponent,
    AddressComponent,
    PocCollectionDataDrivenComponent,
    ParentChildComponent, AddressListComponent,
    NestedFormComponent, ParentFormComponent, ChildListComponent, ChildFormComponent, 

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule
  ],
  providers: [PersonService, PersonDataDrivenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
