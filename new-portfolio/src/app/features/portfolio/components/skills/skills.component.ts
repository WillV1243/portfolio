// angular
import { Component, ChangeDetectionStrategy } from '@angular/core';

// models
import { languages, libraries, technologies } from '../../models';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  public languages: string[] = languages;
  public libraries: string[] = libraries;
  public technologies: string[] = technologies;

}
