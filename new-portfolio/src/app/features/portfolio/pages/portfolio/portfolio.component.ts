// angular
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// components
import { LandingComponent } from '../../components';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  @ViewChild('top') top: LandingComponent;
  @ViewChild('projects') projects: ElementRef;

  private elements: any = { };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elements = {
      top: this.top,
      projects: this.projects
    }
  }

  public scroll(el: string): void {
    console.log(this.elements[el]);
    this.elements[el].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
