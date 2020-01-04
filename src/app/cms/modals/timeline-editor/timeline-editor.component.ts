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

    checkChanges(): boolean {
        console.log(this.modifiedData);
        if (this.modifiedData.title != '' && this.modifiedData.content != '' && this.modifiedData.year != '') {
            // all fields contain data
            if (this.modifiedData != this.data) {
                // fields have changed from previous data
                return true;
            }
        }
        return false;
    }

    cancel() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
}
