// angular
import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

// models
import { technologies } from './technologies';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-technology-link',
  templateUrl: './technology-link.component.html',
  styleUrls: ['./technology-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyLinkComponent implements OnInit {

  @Input() technologyName: string;

  public url: string;
  public imagePath: string;
  public label: string;

  ngOnInit() {
    const { url, imagePath, label } = technologies[this.technologyName];

    this.url = url;
    this.imagePath = imagePath;
    this.label = label;
  }

}
