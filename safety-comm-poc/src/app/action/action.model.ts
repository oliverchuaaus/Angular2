import {ActionDetail} from '../action-detail/action-detail.model';

export class Action{
    actionId: string;
    actionDescription: string;
    actionDetails: Array<ActionDetail>; 
}
