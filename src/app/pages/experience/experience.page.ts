import {Component, OnInit} from '@angular/core';
import {ITimelineObject} from '../../components/timeline/timeline.component';
import {MenuStateService} from '../../services/menu-state.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.page.html',
    styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
    public education: ITimelineObject[] = [];
    public experience: ITimelineObject[] = [];
    public awards: ITimelineObject[] = [];

    private collectionListenerEducation: Observable<any[]>;
    private collectionListenerExperience: Observable<any[]>;
    private collectionListenerAwards: Observable<any[]>;

    constructor(public menu: MenuStateService,
                public db: AngularFirestore) {
        this.collectionListenerEducation = db.collection('education').valueChanges();
        this.collectionListenerExperience = db.collection('experience').valueChanges();
        this.collectionListenerAwards = db.collection('awards').valueChanges();
    }

    ngOnInit(): void {
        this.collectionListenerEducation.subscribe(value => {
            this.education = value;
            this.education = this.education.sort((a, b) => {return this.dateCompare(a, b)});
        });
        this.collectionListenerExperience.subscribe(value => {
            this.experience = value;
            this.experience = this.experience.sort((a, b) => {return this.dateCompare(a, b)});
        });
        this.collectionListenerAwards.subscribe(value => {
            this.awards = value;
            this.awards = this.awards.sort((a, b) => {return this.dateCompare(a, b)});
        });
    }

    dateCompare(a: ITimelineObject, b: ITimelineObject): number {
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    }

}
