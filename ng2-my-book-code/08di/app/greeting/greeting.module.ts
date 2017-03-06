import { NgModule } from '@angular/core';
import { GreetingComponent, SalutationComponent } from './greeting.component';

@NgModule({
  declarations: [GreetingComponent, SalutationComponent],
  exports: [GreetingComponent],
})
export class GreetingModule { }