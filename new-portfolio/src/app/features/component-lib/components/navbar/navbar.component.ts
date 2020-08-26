// angular
import { Component, Output, EventEmitter } from '@angular/core';

// animations
import { fade } from 'src/app/shared/animations';

// version
import { version } from '../../../../../../package.json';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'drk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fade]
})
export class NavbarComponent {

  @Output() scroll = new EventEmitter<string>();

  version: string = version;

  scrollTo(el: string) {
    this.scroll.emit(el);
  }

}
