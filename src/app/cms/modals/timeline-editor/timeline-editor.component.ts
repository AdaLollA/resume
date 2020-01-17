import {Component, Input, OnInit, Output} from '@angular/core';
import {ITimelineObject} from '../../../components/timeline/timeline.component';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService, CmsType} from '../../../services/auth.service';

@Component({
    selector: 'app-timeline-editor',
    templateUrl: './timeline-editor.component.html',
    styleUrls: ['./timeline-editor.component.scss'],
})
export class TimelineEditorComponent implements OnInit {

    @Input() data: ITimelineObject;
    public modifiedData: ITimelineObject;

    @Input() type: CmsType;

    public changes: boolean = false;
    public now: Date;

    constructor(public nav: NavParams, public modalCtrl: ModalController, private auth: AuthService) {
    }

    ngOnInit(): void {
        this.now = new Date();
        if (this.data) {
            // edit existing data set

            // clone of data to not temper with original data
            this.data = Object.assign({}, this.data);

            // fix date DB<>UI
            try {
                let date: any = this.data.date;
                this.data.date = this.toDateTime(date.seconds).toISOString();
            } catch (e) {

            }

            // clone modifiable data so we can react to changes
            this.modifiedData = Object.assign({}, this.data);
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

    private toDateTime(secs) {
        let t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    save() {
        if (this.data) {
            // update existing data set
            this.auth.updateTimeLineObject(this.modifiedData, this.type).then(
                (res) => {
                    // no errors
                },
                (err) => {
                    console.error(err);
                });
        } else {
            // create new data set
            this.auth.createTimeLineObject(this.modifiedData, this.type);
        }
        this.dismiss();
    }

    checkChanges() {
        if (this.modifiedData.title != '' && this.modifiedData.content != '' && this.modifiedData.year != '') {
            // all fields contain data
            if (this.modifiedData != this.data) {
                // fields have changed from previous data
                this.changes = true;
                return;
            }
        }
        this.changes = false;
    }

    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

    delete() {
        this.auth.deleteTimeLineObject(this.data.id, this.type);
        this.dismiss();
    }
}
