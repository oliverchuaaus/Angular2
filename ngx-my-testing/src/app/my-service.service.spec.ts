import { TestBed, inject } from '@angular/core/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { MyServiceService } from './my-service.service';
import { MockBackend } from '@angular/http/testing';

describe('MyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseRequestOptions,
        MockBackend,
        MyServiceService,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  it('should be created', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
