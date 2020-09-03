// angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// animations
import { routerTransition } from './animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {

  constructor() { }

  // allows the use of 'fade' router animation when transitioning between pages
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
