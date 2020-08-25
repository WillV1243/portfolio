// angular
import { Component, OnInit } from '@angular/core';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public languages: string[] = [
    'angular',
    'react',
    'typescript',
    'node'
  ];

  public libraries: string[] = [
    'material',
    'redux',
    'i18n'
  ];

  public technologies: string[] = [
    'git',
    'npm',
    'jira',
    'figma',
    'wordpress',
    'elementor'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
