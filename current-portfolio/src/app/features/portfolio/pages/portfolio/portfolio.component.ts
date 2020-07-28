// angular
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// animations
import { fade } from 'src/app/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [fade]
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  @ViewChild('top') top: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('project1') project1: ElementRef;

  private elements: any = { };
  
  public navbar = true;

  // Project Worx
  public clickHereMessage = false;
  public hoverOverMessage = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elements = {
      top: this.top,
      about: this.about,
      project1: this.project1
    }
  }

  public scroll(el: string): void {
    this.elements[el].nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
