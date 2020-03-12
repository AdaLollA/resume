import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITimelineObject} from '../../components/timeline/timeline.component';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-cms-element',
  templateUrl: './cms-element.component.html',
  styleUrls: ['./cms-element.component.scss'],
})
export class CmsElementComponent implements OnInit {

  @Input()
  title: string = 'Title';

  @Output() add = new EventEmitter<boolean>();

  public mobile: boolean;

  constructor(public platform: Platform) {
    this.mobile = this.platform.is('mobile');
    console.log(this.mobile);
  }

  ngOnInit() {}

}
