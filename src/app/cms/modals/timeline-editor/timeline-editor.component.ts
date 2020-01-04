import {Component, Input, OnInit, Output} from '@angular/core';
import {TimelineObject} from '../../../components/timeline/timeline.component';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService, CmsType} from '../../../services/auth.service';

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

    constructor(public nav: NavParams, public modalCtrl: ModalController, private auth: AuthService) {
    }

    ngOnInit(): void {
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

    save() {
        if (this.data) {
            // update existing data set
        } else {
            // create new data set
            this.auth.createTimeLineObject(this.modifiedData, this.type).then((res) => {
                console.log(res);
            });
        }
    }

    checkChanges() {
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
