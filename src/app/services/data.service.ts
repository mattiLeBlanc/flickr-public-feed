import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Image } from '../models/image';
import { environment } from 'src/environments/environment';



@Injectable()
export class DataService {
  constructor( private http: HttpClient ) { }

  getData(): Observable<Image[]> {
    return this.http
      .get<Image[]>( environment.endpoints.flickr )
      .pipe( catchError( ( error: any ) => throwError( error ) ) );
  }
}
