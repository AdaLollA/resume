import { Component, OnInit } from '@angular/core';

export interface IProject {
  title: string
  description: string
  technologies: string[]
  liveDemoUrl?: string
  moreInfoUrl?: string
  sourceCodeUrl?: string
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  private project: IProject;

  constructor() { }

  ngOnInit() {
    this.project = {
      title: 'Project Title',
      description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
      technologies: ['web', 'android', 'ios', 'pwa', 'xamarin'],
      liveDemoUrl: 'asdf',
      moreInfoUrl: 'https://www.google.com',
      sourceCodeUrl: 'asdf'
    }
  }

  openUrl(url: string) {
    Object.assign(document.createElement('a'), { target: '_blank', href: url}).click();
  }

}
