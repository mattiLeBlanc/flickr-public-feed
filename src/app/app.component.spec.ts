import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';
import * as fromServices from './services';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ...fromComponents.components,
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        ...fromServices.services,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Jolly Sonnets');
  // }));
});
