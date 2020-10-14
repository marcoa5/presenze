import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, MatDatepickerModule, MatMomentDateModule,
    AppRoutingModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'it-IT'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
