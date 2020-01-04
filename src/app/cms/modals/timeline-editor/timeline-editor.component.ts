import {Component, Input, OnInit, Output} from '@angular/core';
import {TimelineObject} from '../../../components/timeline/timeline.component';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-timeline-editor',
    templateUrl: './timeline-editor.component.html',
    styleUrls: ['./timeline-editor.component.scss'],
})
export class TimelineEditorComponent {

    @Input() data: TimelineObject;
    public modifiedData: TimelineObject;

    public changes: boolean = false;

    constructor(public nav: NavParams, public modalCtrl: ModalController) {
        console.log(this.data);
        if (this.data) {
            // edit existing data set
            // todo
        } else {
            // create new data set
            this.modifiedData = {
                title: '',
                content: '',
                year: (new Date()).getFullYear().toString(),
                date: new Date()
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
                this.modifiedData != this.data
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
