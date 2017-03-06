import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { MyFormComponent} from './01form.component';
import { MyFormBuilderComponent} from './02form-builder.component';
import { MyFormValidatorComponent} from './03form-validator.component';
import { MyFormValidatorExplicitComponent} from './04form-validator-explicit.component';
import { MyFormValidatorShorthandComponent} from './05form-validator-shorthand.component';
import { MyFormValidatorNgModelComponent} from './06form-validator-ngModel.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MyFormComponent, MyFormBuilderComponent, MyFormValidatorComponent, 
  MyFormValidatorExplicitComponent ,MyFormValidatorShorthandComponent, MyFormValidatorNgModelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }