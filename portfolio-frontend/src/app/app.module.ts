// angular
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

// routes
import { routeConfig } from './app.routes';

// services
import { AppInitService } from './core/services';

// app config loader
export function AppConfigFactory(service: AppInitService) {
  return () => service.initialize();
}
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
  providers: [
    { provide: APP_INITIALIZER, useFactory: AppConfigFactory, multi: true, deps: [AppInitService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
