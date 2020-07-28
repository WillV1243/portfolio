// angular
import { Component, OnInit } from '@angular/core';

// animations
import { heroTextShowHide } from 'src/app/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-hero-links',
  templateUrl: './hero-links.component.html',
  styleUrls: ['./hero-links.component.css'],
  animations: [heroTextShowHide]
})
export class HeroLinksComponent implements OnInit {

  // toggle text of links - on hover
  github: boolean;
  linkedin: boolean;
  cv: boolean;

  constructor() { }

  ngOnInit() {
  }

}
