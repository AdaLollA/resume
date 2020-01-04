import {Component, Input, OnInit, Output} from '@angular/core';
import {TimelineObject} from '../../../components/timeline/timeline.component';
import {ModalController, NavParams} from '@ionic/angular';
import {CmsType} from '../../cms.page';

@Component({
    selector: 'app-timeline-editor',
    templateUrl: './timeline-editor.component.html',
    styleUrls: ['./timeline-editor.component.scss'],
})
export class TimelineEditorComponent implements OnInit {

    @Input() data: TimelineObject;
    public modifiedData: TimelineObject;

    @Input() type: CmsType;

    public changes: boolean = false;
    public now: Date;

    constructor(public nav: NavParams, public modalCtrl: ModalController) {
    }

    ngOnInit(): void {
      console.log(this.type.toString());
        this.now = new Date();
        if (this.data) {
            // edit existing data set
            // todo
        } else {
            // create new data set
            this.modifiedData = {
                title: '',
                content: '',
                year: this.now.getFullYear().toString(),
                date: this.now.toISOString()
            };
        }
    }

    save(timeline: TimelineObject) {
        // todo
    }

    checkChanges() {
        console.log(this.modifiedData);
        if (this.modifiedData.title != '' && this.modifiedData.content != '' && this.modifiedData.year != '') {
            // all fields contain data
            if (
                this.modifiedData != this.data // todo test if this works, else use solution below
                /*
                this.modifiedData.title != this.data.title &&
                this.modifiedData.content != this.data.content &&
                this.modifiedData.year != this.data.year &&
                this.modifiedData.date != this.data.date
                */
            ) {
                // fields have changed from previous data
                this.changes = true;
                return;
            }
        }
        this.changes = false;
    }

    cancel() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}
