import {Component, Input, OnInit} from '@angular/core';

export interface IProject {
  title: string
  description: string
  technologies: string[]
  image?: string
  liveDemoUrl?: string
  moreInfoUrl?: string
  sourceCodeUrl?: string
  date: Date
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input('project')
  public project: IProject;

  public loading = true;

  constructor() { }

  ngOnInit() {
  }

  openUrl(url: string) {
    Object.assign(document.createElement('a'), { target: '_blank', href: url}).click();
  }

  finishedLoading() {
    this.loading = false;
    console.log(this.project.title)
  }
}
