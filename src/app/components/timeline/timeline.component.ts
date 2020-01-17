import {Component, Input, OnInit} from '@angular/core';

export interface ITimelineObject {
  year: string
  title: string
  content: string
  date: Date | string
  id?: string
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input('timeline-objects')
  objects: ITimelineObject[];

  @Input('title')
  title: string;

  constructor() { }

  ngOnInit() {}

}
