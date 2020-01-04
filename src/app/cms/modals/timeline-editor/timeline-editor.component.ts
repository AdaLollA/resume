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

            // clone of data to not temper with original data
            this.data = Object.assign({}, this.data);

            // fix date DB<>UI
            try {
                let date: any = this.data.date;
                console.log(date, 'DATE');
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
            console.log('fields contain data');
            console.log(this.modifiedData.title != this.data.title, 'title change');
            console.log(this.data.title, 'title original');
            if (this.modifiedData != this.data) {
                // fields have changed from previous data
                console.log('fields have changed');
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
