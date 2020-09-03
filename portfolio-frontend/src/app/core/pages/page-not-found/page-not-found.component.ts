// angular
import { Component, OnInit } from '@angular/core';

// services
import { LoaderService } from '../../services';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loader.hideOnImageLoad();
  }

}
