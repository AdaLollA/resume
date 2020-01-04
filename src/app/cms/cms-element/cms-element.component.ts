import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimelineObject} from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-cms-element',
  templateUrl: './cms-element.component.html',
  styleUrls: ['./cms-element.component.scss'],
})
export class CmsElementComponent implements OnInit {

  @Input()
  title: string = 'Title';

  @Output() add = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

}
