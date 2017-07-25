import { BrowserModule } from '@angular/platform-browser';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildData } from './interfaces';

@Component({
    selector: 'app-child-list',
    templateUrl: './child-list.component.html',
})
export class ChildListComponent implements OnInit {
    @Input('parentForm')
    public parentForm: FormGroup;

    @Input('children')
    public children: ChildData[];

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
        console.log('Initializing child list', this.children);
        this.parentForm.addControl('children', new FormArray([]));
    }

    addChild() {
        const child: ChildData = {
            id: Math.floor(Math.random() * 100),
            childField1: '',
            childField2: '',
            childHiddenField1: ''
        };

        this.children.push(child);
        this.cd.detectChanges();
        return false;
    }

    removeChild(idx: number) {
        if (this.children.length > 1) {
            this.children.splice(idx, 1);
            (<FormArray>this.parentForm.get('children')).removeAt(idx);
        }
        return false;
    }
}