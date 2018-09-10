import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Image } from '../../models/image';
import { gridView } from '../list/list.component';



@Component( {
  selector: 'app-list-display-toggle',
  styleUrls: [ './list-display-toggle.component.scss' ],
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <div class="icon" [ngClass]="{ 'active': isActive( 'list' ) }" fxLayout="column" (click)="setActive( 'list' )">
        <mat-icon [color]="getColor( 'list' )">list</mat-icon>
      </div>
      <div class="icon" [ngClass]="{ 'active': activeToggle === 'grid'}" fxLayout="column"  (click)="setActive( 'grid' )">
        <mat-icon [color]="getColor( 'grid' )">grid_on</mat-icon>
      </div>
    </div>
  `,
} )

export class ListDisplayToggleComponent implements OnInit {
  @Input() activeToggle: string;
  @Output() toggle = new EventEmitter<gridView>();

  constructor(
  ) {
  }

  ngOnInit() {
  }

  isActive( toggle ): boolean {
    return this.activeToggle === toggle;
  }

  getColor( toggle ): string {
    return this.isActive( toggle ) ? 'accent' : 'primary';
  }

  setActive( toggle ) {
    this.activeToggle = toggle;
    this.toggle.emit( toggle );
  }

}
