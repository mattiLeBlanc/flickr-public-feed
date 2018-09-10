import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import * as fromServices from './services';
import * as fromComponents from './components';
import { matDesign } from './components/mat-design';
import { FeedImageDialogComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    matDesign,
    FlexLayoutModule,
    LayoutModule
  ],
  entryComponents: [
    FeedImageDialogComponent
   ],
  providers: [
    ...fromServices.services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
