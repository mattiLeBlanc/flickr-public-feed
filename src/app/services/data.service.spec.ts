import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe( 'Service: DataService', () => {
  let http: HttpClient;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    } );
    http = TestBed.get( HttpClient );
  } );

  it( 'should be created', inject( [ DataService ], ( service: DataService ) => {
    expect( service ).toBeTruthy();
  } ) );

  it( 'expects service to fetch data with and image',
    inject( [ HttpTestingController, DataService ],
      ( httpMock: HttpTestingController, service: DataService ) => {

        const mockFeed = [ {
          title: 'test image',
          img: 'http://www.testimage.com/123',
          published: new Date(),
          author: {
            name: 'Test Author',
            uri: 'Author URI',
            'flickr:nsid': 123,
            'flickr:buddyicon': 'test',
          },
          category: [ 'cat1', 'cat2' ]
        },
        {
          title: 'test image2',
          img: 'http://www.testimage.com/4554',
          published: new Date(),
          author: {
            name: 'Test Author',
            uri: 'Author URI',
            'flickr:nsid': 3424,
            'flickr:buddyicon': 'test',
          },
          category: [ 'cat3', 'cat4' ]
        }
        ];

        // We call the service
        //
        service.getData().subscribe( data => {
          expect(data).toEqual(mockFeed);
        } );

        // We set the expectations for the HttpClient mock
        //
        const req = httpMock.expectOne( environment.endpoints.flickr );
        expect( req.request.method ).toEqual( 'GET' );
        expect( req.request.responseType ).toEqual( 'json' );
        req.flush( mockFeed );

        httpMock.verify();
      } )
  );
} );
