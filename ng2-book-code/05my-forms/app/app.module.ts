import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoFormSku } from './forms/demo_form_sku';
import { DemoFormSkuBuilder } from './forms/demo_form_sku_with_builder';
import { DemoFormWithValidationsShorthand } from './forms/demo_form_with_validations_shorthand';
import { DemoFormWithValidationsExplicit } from './forms/demo_form_with_validations_explicit';
import { DemoFormWithCustomValidations } from './forms/demo_form_with_custom_validations';
import { DemoFormWithEvents } from './forms/demo_form_with_events';
import { DemoFormNgModel } from './forms/demo_form_ng_model';
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, DemoFormSku, DemoFormSkuBuilder, DemoFormWithValidationsShorthand, DemoFormWithValidationsExplicit, DemoFormWithCustomValidations, DemoFormWithEvents, DemoFormNgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }