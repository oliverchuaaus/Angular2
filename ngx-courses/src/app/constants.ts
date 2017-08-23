import { environment } from '../environments/environment';

export const URL:string = environment.production? "/mtap-rest-service/rest/mtap/": "http://localhost:8080/courses-rest-service/rest/courses/";

export const awsURL:string = environment.production? "https://kz2pz9ayf9.execute-api.ap-southeast-2.amazonaws.com/prod/": "https://kz2pz9ayf9.execute-api.ap-southeast-2.amazonaws.com/dev/";
