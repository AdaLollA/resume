import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITimelineObject} from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-timeline-visualizer',
  templateUrl: './timeline-visualizer.component.html',
  styleUrls: ['./timeline-visualizer.component.scss'],
})
export class TimelineVisualizerComponent implements OnInit {

  @Input() data: ITimelineObject;

  @Output() edit = new EventEmitter<ITimelineObject>();

  constructor() { }

  ngOnInit() {}

}
