import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { matDesign } from './../mat-design';
import { ListDisplayToggleComponent } from './list-display-toggle.component';

describe( 'ListDisplayToggleComponent', () => {
  let component: ListDisplayToggleComponent;
  let fixture: ComponentFixture<ListDisplayToggleComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ ListDisplayToggleComponent ],
      imports: [
        matDesign,
      ],

    } )
      .compileComponents().then( () => {
        fixture = TestBed.createComponent( ListDisplayToggleComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
      } );
  } ) );


  it( 'should create the component', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should set the correct view toggle when clicked', () => {
    const listIcon = fixture.debugElement.nativeElement.querySelectorAll( '.icon' )[ 0 ];
    const gridIcon = fixture.debugElement.nativeElement.querySelectorAll( '.icon' )[ 1 ];
    listIcon.click();
    fixture.detectChanges();
    expect( component.activeToggle ).toBe( 'list' );
    gridIcon.click();
    fixture.detectChanges();
    expect( component.activeToggle ).toBe( 'grid' );
  } );

} );
