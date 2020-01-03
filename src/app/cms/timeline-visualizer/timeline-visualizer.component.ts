import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimelineObject} from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-timeline-visualizer',
  templateUrl: './timeline-visualizer.component.html',
  styleUrls: ['./timeline-visualizer.component.scss'],
})
export class TimelineVisualizerComponent implements OnInit {

  @Input() data: TimelineObject;

  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

}
