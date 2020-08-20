// angular
import { Component, OnInit } from '@angular/core';

// animations
import { fade } from 'src/app/shared/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'drk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fade]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
