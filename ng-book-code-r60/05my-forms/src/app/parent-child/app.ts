import {
    BrowserModule 
} from '@angular/platform-browser';
import { 
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    NgModule 
} from '@angular/core';
import { 
    CommonModule
} from '@angular/common';
import { 
    FormArray,
    FormBuilder,
    FormGroup,
    FormsModule, 
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import * as _ from 'lodash';


export interface ParentData {
    parentField1: string;
    parentField2: string;
    parentHiddenField1: string;
    children: ChildData[];
};

export interface ChildData {
    id: number;
    childField1: string;
    childField2: string;
    childHiddenField1: string;
};


@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html'
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
    selector: 'app-parent-form',
    templateUrl: './parent-form.component.html',
})
export class ParentFormComponent implements OnInit, AfterViewInit {
    public initialState: ParentData;
    public parentData: ParentData;
    public parentForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initialState = this.getParentData();
        this.parentData = _.cloneDeep(this.initialState);
        this.parentForm = this.toFormGroup(this.parentData);
        console.log('Initial parentData', this.parentData);
    }

    ngAfterViewInit() {
        this.parentForm.valueChanges
            .subscribe(value => {
                console.log('Parent Form changed', value);
                this.parentData = _.mergeWith(this.parentData,
                                              value,
                                              this.mergeCustomizer);

            });
    }

    private getParentData(): ParentData {
        return {
            parentField1: 'Parent Field 1 Value',
            parentField2: 'Parent Field 2 Value',
            parentHiddenField1: 'Parent Hidden Field 1 Value',
            children: [{
                id: 1,
                childField1: 'Child 1 - Child Field 1 Value',
                childField2: 'Child 1 - Child Field 2 Value',
                childHiddenField1: 'Child 1 - Child Hidden Field 1 Value',
            }, {
                id: 2,
                childField1: 'Child 2 - Child Field 1 Value',
                childField2: 'Child 2 - Child Field 2 Value',
                childHiddenField1: 'Child 2 - Child Hidden Field 1 Value',
            }]
        };
    }

    private toFormGroup(data: ParentData): FormGroup {
        const formGroup = this.fb.group({
            parentField1: [ data.parentField1, Validators.required ],
            parentField2: [ data.parentField2, Validators.required ],
            parentHiddenField1: [ data.parentHiddenField1 ]
        });

        return formGroup;
    }

    // _.mergeWith customizer to avoid merging primitive arrays, and only
    // merge object arrays
    private mergeCustomizer = (objValue, srcValue) => {
        if (_.isArray(objValue)) {
            if (_.isPlainObject(objValue[0]) || _.isPlainObject(srcValue[0])) {
                return srcValue.map(src => {
                    const obj = _.find(objValue, { id: src.id });
                    return _.mergeWith(obj || {}, src, this.mergeCustomizer);
                });
            }
            return srcValue;
        }
    }

    onSubmit() {
        if (!this.parentForm.valid) {
            console.error('Parent Form invalid, preventing submission');
            return false;
        }

        const updatedParentData = _.mergeWith(this.parentData,
                                              this.parentForm.value,
                                              this.mergeCustomizer);

        console.log('Submitting...');
        console.log('Original parentData', this.initialState);
        console.log('Updated parentData', updatedParentData);

        return false;
    }

}


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

