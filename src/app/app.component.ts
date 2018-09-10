import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="app__header">
        <h1 class="app__title">Public Flickr Feed</h1>
      </header>
      <app-list class="app__list"></app-list>
    </div>
  `,
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {


  constructor(

  ) {
  }

  ngOnInit() {

    // this.images$ = combineLatest(
    //   this.dataService.getData(),
    //   this.searchValue.valueChanges.pipe(
    //     startWith( '' ),
    //     debounceTime( 200 ),
    //     distinctUntilChanged(),
    //   )
    // ).pipe(
    //  map( ( [ images, searchValue ] ) => {
    //   const regEx = new RegExp( searchValue, 'i' );
    //   return images;
    //   // return sonnets.filter( sonnet => sonnet.lines.join( ' ' ).search( regEx ) !== -1 );
    //  } )
    // );
  }
}
