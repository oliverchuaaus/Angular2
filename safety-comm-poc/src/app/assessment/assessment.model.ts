import {AssessmentRating} from '../assessment-rating/assessment-rating.model';
import {ManagerEvaluation} from '../manager-evaluation/manager-evaluation.model';

export class Assessment{
    assessmentId: string;
    assessmentDescription: string;
    assessmentRatings: Array<AssessmentRating>;
    references: Array<string>;
    managerEvaluation: ManagerEvaluation;
}