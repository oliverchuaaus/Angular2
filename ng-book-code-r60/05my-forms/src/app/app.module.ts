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

import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentFormComponent, } from './parent-child/parent-form.component';
import { ChildListComponent } from './parent-child/child-list.component';
import { ChildFormComponent } from './parent-child/child-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    PocCollectionComponent,
    AddressComponent,
    ParentChildComponent,
    ParentFormComponent, ChildListComponent, ChildFormComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
