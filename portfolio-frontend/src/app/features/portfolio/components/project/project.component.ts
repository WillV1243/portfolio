// angular
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {

  @Input() title: string;
  @Input() projectUrl: string;
  @Input() technologies: string[];
  @Input() imagePath: string;

}
