import { Component, Inject } from '@angular/core';
import { Metric, AnalyticService, SingletonService } from './metric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:AnalyticService, private singletonService:SingletonService, @Inject('API_URL') private apiurl:string) {
    this.singletonService.something();
    console.log(apiurl);
    this.myTest();
  }

  title = 'app';

  myTest(){
    let metric:Metric = {eventName: 'loggedIn', scope: 'nate'};
    this.service.record(metric);
  }

  
}
