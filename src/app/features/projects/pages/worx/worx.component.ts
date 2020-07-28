// angular
import { Component, OnInit } from '@angular/core';

// animations
import { heroTextShowHide } from 'src/app/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-worx',
  templateUrl: './worx.component.html',
  styleUrls: ['./worx.component.css'],
  animations: [heroTextShowHide]
})
export class WorxComponent implements OnInit {

  back = false;

  constructor() { }

  ngOnInit(): void {
  }

}
