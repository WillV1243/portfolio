// angular
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// components
import { LandingComponent } from '../../components';

// services
import { LoaderService } from 'src/app/core/services';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  @ViewChild('top') private top: LandingComponent;
  @ViewChild('projects') private projects: ElementRef;
  @ViewChild('skills') private skills: ElementRef;
  @ViewChild('about') private about: ElementRef;

  private elements: any = { };

  constructor(private loader: LoaderService) { }

  ngAfterViewInit() {
    this.elements = {
      top: this.top,
      projects: this.projects,
      skills: this.skills,
      about: this.about
    }

    this.loader.hideOnImageLoad();
  }

  // smoothly scrolls to element on page
  public scroll(el: string): void {
    this.elements[el].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
