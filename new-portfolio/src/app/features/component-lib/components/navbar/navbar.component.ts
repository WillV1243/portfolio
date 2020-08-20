// angular
import { Component, OnInit } from '@angular/core';

// animations
import { fade } from 'src/app/shared/animations';

// version
// version
import { version } from '../../../../../../package.json';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'drk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fade]
})
export class NavbarComponent implements OnInit {

  version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
