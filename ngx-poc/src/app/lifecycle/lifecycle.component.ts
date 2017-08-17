import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-lifecycle-a',
  template: `
    <br>
    <div>LifecycleAComponent</div>
    <br>
    <app-lifecycle-b></app-lifecycle-b>
    `
})
export class LifecycleAComponent {
  component = 'LifecycleAComponent';
  ngOnChanges(values) {
    console.log(this.component + ' ngOnChanges()');
  }
  ngOnInit() {
    console.log(this.component + ' ngOnInit()');
  }
  ngDoCheck() {
    console.log(this.component + ' ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log(this.component + ' ngAfterContentInit()');
  }
  ngAfterContentChecked() {
    console.log(this.component + ' ngAfterContentChecked()');
  }
  ngAfterViewInit() {
    console.log(this.component + ' ngAfterViewInit()');
  }
  ngAfterViewChecked() {
    console.log(this.component + ' ngAfterViewChecked()');
  }
  ngOnDestroy() {
    console.log(this.component + ' ngOnDestroy()');
  }
}
@Component({
  selector: 'app-lifecycle-b',
  template: `LifecycleBComponent Message:
  <button (click)="toggle()">Toggle</button>
  <div *ngIf="flag">On</div>
  `
})
export class LifecycleBComponent {
  component = 'LifecycleBComponent';
  flag: boolean = true;

  toggle() {
    console.log(this.component + ' toggled');
    this.flag = !this.flag;
  }

  ngOnChanges(values) {
    console.log(this.component + ' ngOnChanges()');
  }
  ngOnInit() {
    console.log(this.component + ' ngOnInit()');
  }
  ngDoCheck() {
    console.log(this.component + ' ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log(this.component + ' ngAfterContentInit()');
  }
  ngAfterContentChecked() {
    console.log(this.component + ' ngAfterContentChecked()');
  }
  ngAfterViewInit() {
    console.log(this.component + ' ngAfterViewInit()');
  }
  ngAfterViewChecked() {
    console.log(this.component + ' ngAfterViewChecked()');
  }
  ngOnDestroy() {
    console.log(this.component + ' ngOnDestroy()');
  }

}