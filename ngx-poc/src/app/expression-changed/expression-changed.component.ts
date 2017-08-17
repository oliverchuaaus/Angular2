import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ExpressionService } from './expression.service';

@Component({
  selector: 'app-expression-changed',
  templateUrl: './expression-changed.component.html',
  styleUrls: ['./expression-changed.component.css']
})
export class ExpressionChangedComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}

@Component({
  selector: 'a-comp',
  template: `
        <br>
        <span>{{name}}</span>
        <b-comp [text]="text"></b-comp>
    `
})
export class AComponent {
  name = 'I am A component';
  text = 'A message for the child component';
}

@Component({
  selector: 'b-comp',
  template: `
        <div>{{text}}</div>
    `
})
export class BComponent {
  @Input() text;

  constructor(private parent: AComponent, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    //this.parent.name = 'updated parent in ngOnInit';
    //this.text='updated text';
  }

  ngAfterViewInit() {
    //this.parent.name = 'updated parent in ngAfterViewInit';

    //workaround 1: not working
    this.parent.name = 'updated parent in ngAfterViewInit';
    this.cd.detectChanges();

    //workaround 2
    /*
    setTimeout(() => {
      this.parent.name = 'updated parent in ngAfterViewInit async';
    });
    */

  }


}



@Component({
  selector: 'app-toggle',
  template: `
      <app-toggler></app-toggler> 
      <div *ngIf="loggedIn()">Logged In</div>
      <div *ngIf="!loggedIn()">Logged Out</div>
    `
})
export class ToggleComponent {
  constructor(public service: ExpressionService) { }

  loggedIn() {
    return this.service.isLoggedIn();
  }


}

@Component({
  selector: 'app-toggler',
  template: `
      <button (click)="toggle()">toggle</button> 
    `
})
export class TogglerComponent {
  constructor(public service: ExpressionService) { }

  toggle() {
    this.service.toggle();
  }
}