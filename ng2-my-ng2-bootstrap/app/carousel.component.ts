import { Component } from '@angular/core';

@Component({
  selector: 'my-carousel',
  template: `
<div style="width: 450px; margin: 0 auto" >    
<carousel style="margin: 0 auto" >
  <slide>
    <img src="assets/images/greece/1.jpg" alt="First slide">
  </slide>
  <slide>
    <img src="assets/images/greece/2.jpg" alt="Second slide">
  </slide>
  <slide>
    <img src="assets/images/greece/3.jpg" alt="Third slide">
  </slide>
</carousel>
</div>
 `
})
export class CarouselComponent {

}
