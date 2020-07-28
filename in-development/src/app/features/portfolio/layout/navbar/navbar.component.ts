// angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// animations
import { fade } from 'src/app/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fade]
})
export class NavbarComponent implements OnInit {

  @Input() active: boolean;
  @Output() scroll = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  scrollTo(el: string) {
    this.scroll.emit(el);
  }

}
