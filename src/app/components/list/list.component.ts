import {
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material';


import { Image } from '../../models/image';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { DataService } from 'src/app/services';
import { startWith, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FeedImageDialogComponent } from '../feed-image-dialog/feed-image-dialog.component';

export type gridView = 'list' | 'grid';


@Component( {
  selector: 'app-list',
  styleUrls: [ './list.component.scss' ],
  template: `
    <div *ngIf="feedItems$ | async as feedItems">

      <div fxLayout="row" fxLayoutAlign="space-between center">
        <div fxFlex>
          <mat-form-field  appearance="outline" color="primary" fxFlex="100" fxFlex.gt-sm="50">
          <mat-label>Search titles or tags</mat-label>
          <input matInput placeholder="Search titles or tags" name="searchValue" [formControl]="searchValue">
          </mat-form-field>
        </div>

        <app-list-display-toggle
          (toggle)="onToggle($event)"
          [activeToggle]="gridView"
          *ngIf="showGridViewToggle && feedItems.length">
        </app-list-display-toggle>
      </div>

      <div *ngIf="!feedItems.length" class="episode-loading">Couldn't find anything matching "{{searchValue.value}}"</div>

      <mat-grid-list [cols]="gridCols" [rowHeight]="gridRatio" gutterSize="20">
        <mat-grid-tile *ngFor="let image of feedItems">

          <mat-grid-tile-header>
            <div mat-line>{{image.title}}</div>
            <mat-icon class="open-dialog-icon" (click)="openDialog( image )" title="Open image full screen">open_with</mat-icon>
          </mat-grid-tile-header>

          <div
            class="grid-tile-body"
            ngClass="{{gridView}}"
            fxLayout="row"
            [style.background-image]="'url(' + image.img + ')'">
          </div>

          <mat-grid-tile-footer *ngIf="image.category">
            <mat-chip-list>
              <mat-chip  *ngFor="let cat of image.category">{{cat}}</mat-chip>
            </mat-chip-list>
          </mat-grid-tile-footer>

        </mat-grid-tile>
      </mat-grid-list>



    </div>
  `,
} )
export class ListComponent implements OnInit {

  searchValue: FormControl = new FormControl();
  feedItems$: Observable<Image[]>;
  gridView: gridView = 'grid';
  gridCols = 1;
  gridRatio: '7:1' | '1:1' = '7:1';
  showGridViewToggle = true;



  constructor(
    private dataService: DataService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {

    // Handle the grid layout for responsive switches
    //
    this.breakpointObserver.observe( [
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait,
    ] ).subscribe( result => {

      if ( result.matches ) {
        this.onToggle( 'grid' );
        this.gridCols = 1;
        this.showGridViewToggle = false;
      } else {
        this.showGridViewToggle = true;
        this.onToggle( this.gridView );
      }
    } );

    // Construct Feeds observable by filtering it with the search string
    //
    this.feedItems$ = combineLatest(
      this.dataService.getData(),
      this.searchValue.valueChanges.pipe(
        startWith( '' ),
        debounceTime( 200 ),
        distinctUntilChanged(),
      )
    ).pipe(
      map( ( [ images, searchValue ] ) => {
        const regEx = new RegExp( searchValue, 'i' );

        return images.filter( image => {
          const src = `${ image.category.join( ' ' ) } ${ image.title }`;
          return src.search( regEx ) !== -1;
        } );
      } )
    );
  }

  onToggle( event: gridView ) {
    this.gridView = event;
    this.gridCols = this.gridView === 'list' ? 1 : 2;
    this.gridRatio = this.gridView === 'list' ? '7:1' : '1:1';

  }

  openDialog( image: Image ) {
    const dialogRef = this.dialog.open( FeedImageDialogComponent, {
      width: '800px',
      height: '800px',
      data: {
        url: image.img
      }
    } );

    dialogRef.afterClosed().subscribe( result => {
      console.log( 'The dialog was closed' );

    } );
  }

}
