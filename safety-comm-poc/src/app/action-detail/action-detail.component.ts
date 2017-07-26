import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { WindowService } from '../window-service';
import { ActionDetail } from '../action-detail/action-detail.model';
@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {
  @Input() actionDetail: ActionDetail;
  @Input() actionDetailsFormArray: FormArray;
  @Input() actionIndex: number;

  actionDetailFormGroup: FormGroup;

  constructor(private windowService: WindowService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.actionDetailFormGroup = this.formBuilder.group({
      actionDetailId: this.actionDetail.actionDetailId,
      choice: this.actionDetail.choice,
      comment: this.actionDetail.comment,
    });
    this.actionDetailsFormArray.push(this.actionDetailFormGroup);
  }

  getLetter(index: number): String {
    if (index == -1) return "";
    return String.fromCharCode(  (97+Number.parseInt(""+index)) ) + ")";
  }

}
