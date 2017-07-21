import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Analytics, Metric, AnalyticService, SingletonService } from './metric';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers:
  [
    //singleton
    SingletonService,
    //string
    { provide: 'API_URL', useValue: 'http://devserver.com' },
    //factory
    {
      provide: AnalyticService,
      //factory with dependencies
      deps: [Http, 'API_URL'],
      useFactory(http: Http, url: string) {
        const analytics: Analytics = {
          recordEvent(metric: Metric) {
            console.log('metric: ' + metric);
            console.log('http: ' + http);
            console.log('url: ' + url);
          }
        };
        return new AnalyticService(analytics);
      }
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
