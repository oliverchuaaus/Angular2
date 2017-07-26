import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { WindowService } from '../window-service';
import { Action } from '../action/action.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() action: Action;
  @Input() actionsFormArray: FormArray;
  actionFormGroup: FormGroup;

  constructor(private windowService: WindowService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.actionFormGroup = this.formBuilder.group({
      actionId: this.action.actionId,
    });
    this.actionsFormArray.push(this.actionFormGroup);

    this.actionFormGroup.addControl('actionDetails', new FormArray([]));

  }

}
