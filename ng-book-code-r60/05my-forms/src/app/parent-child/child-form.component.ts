import { BrowserModule } from '@angular/platform-browser';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildData } from './interfaces';

@Component({
    selector: 'app-child-form',
    templateUrl: './child-form.component.html',
})
export class ChildFormComponent implements OnInit {
    @Input('children')
    public children: FormArray;

    @Input('child')
    public child: ChildData;

    public childForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        console.log('Initializing child form', this.child);
        this.childForm = this.toFormGroup(this.child);
        this.children.push(this.childForm);
    }

    private toFormGroup(data: ChildData) {
        const formGroup = this.fb.group({
            id: [ data.id ],
            childField1: [ data.childField1 || '', Validators.required ],
            childField2: [ data.childField2 || '', Validators.required ],
            childHiddenField1: [ data.childHiddenField1 ]
        });

        return formGroup;
    }

}

