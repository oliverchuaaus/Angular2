import { environment } from '../environments/environment';

export const URL:string = environment.production? "/mtap-rest-service/rest/mtap/": "http://localhost:8080/courses-rest-service/rest/courses/";

