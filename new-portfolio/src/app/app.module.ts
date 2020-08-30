// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

// routes
import { routeConfig } from './app.routes';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig, { anchorScrolling: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
