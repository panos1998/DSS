// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, BrowserAnimationsModule, ButtonModule, HttpClientModule],
  providers:[HttpClient,HttpClientModule],
  bootstrap: [AppComponent],
})//
export class AppModule {}
