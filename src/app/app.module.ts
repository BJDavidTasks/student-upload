import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentUploadCompenent } from './student-upload/student-upload.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
@NgModule({
  declarations: [
    AppComponent,
    StudentUploadCompenent,
  ],
  imports: [
    BrowserModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
