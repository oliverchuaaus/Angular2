import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';

import { SpotifyService } from './spotify.service';


describe('SpotifyService', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        SpotifyService,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
      ]
    });
  }));

  // sets up an expectation that the correct URL will being requested
  function expectURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      const response = new ResponseOptions({ body: '{"name": "felipe"}' });
      c.mockRespond(new Response(response));
    });
  }

  describe('getTrack', () => {
    it('retrieves using the track ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        let res;
        expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');
        svc.getTrack('TRACK_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe('felipe');
      }))
    );
  });

});
