import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        // { provide: HttpClient, useValue: { get: jest.fn() } },
        DataService
      ]
    });
    http = TestBed.get(HttpClient);
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return a array of Sonnets', () => {
    // http.get = jest.fn(() => response);

    // expect(service.retrieveBook(data.volumeId)).toBeObservable(expected);
    // expect(http.get).toHaveBeenCalledWith(

    // );
  // });
});
