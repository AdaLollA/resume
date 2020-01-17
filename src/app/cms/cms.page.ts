import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ITimelineObject} from '../components/timeline/timeline.component';
import {IProject} from '../components/project-card/project-card.component';
import {ITeamMember} from '../pages/team/team.page';
import {AuthService, CmsType} from '../services/auth.service';
import {AlertController, ModalController} from '@ionic/angular';
import {TimelineEditorComponent} from './modals/timeline-editor/timeline-editor.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-cms',
    templateUrl: './cms.page.html',
    styleUrls: ['./cms.page.scss'],
})
export class CmsPage implements OnInit {
    public education: ITimelineObject[] = [];
    public experience: ITimelineObject[] = [];
    public awards: ITimelineObject[] = [];
    public projects: IProject[];
    public team: ITeamMember[] = [];
    public skills;

    private readonly collectionListenerEducation: AngularFirestoreCollection<ITimelineObject>;
    private readonly collectionListenerExperience: AngularFirestoreCollection<ITimelineObject>;
    private readonly collectionListenerAwards: AngularFirestoreCollection<ITimelineObject>;
    private collectionListenerProjects: AngularFirestoreCollection<IProject>;
    private collectionListenerSkills: Observable<any[]>;
    private collectionListenerTeam: AngularFirestoreCollection<any>;

    public cmsType = CmsType;

    constructor(public db: AngularFirestore,
                public auth: AuthService,
                public alertController: AlertController,
                public modalController: ModalController) {
        this.collectionListenerEducation = db.collection<ITimelineObject>(auth.typeToCollection(CmsType.EDUCATION));
        this.collectionListenerExperience = db.collection(auth.typeToCollection(CmsType.EXPERIENCE));
        this.collectionListenerAwards = db.collection(auth.typeToCollection(CmsType.AWARD));
        this.collectionListenerProjects = db.collection(auth.typeToCollection(CmsType.PORTFOLIO));
        this.collectionListenerTeam = db.collection(auth.typeToCollection(CmsType.TEAM));
        this.collectionListenerSkills = db.collection('skills').valueChanges();
    }

    getSnapShotData<T extends ITimelineObject | ITeamMember | IProject>(listener: AngularFirestoreCollection<T>, dataObject: T[], compareFn: (a, b) => number) {
        listener.snapshotChanges().pipe(
            map((actions) => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as T;
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        ).subscribe((values) => {
            // sort results
            values = values.sort(compareFn);

            // clear previous data
            while(dataObject.length > 0) {
                dataObject.pop();
            }
            // push new data
            values.forEach(val => {
                dataObject.push(val);
            });
        });
    }

    ngOnInit(): void {
        this.getSnapShotData(this.collectionListenerEducation, this.education, this.compare);
        this.getSnapShotData(this.collectionListenerExperience, this.experience, this.compare);
        this.getSnapShotData(this.collectionListenerAwards, this.awards, this.compare);

        /*
        this.collectionListenerProjects.subscribe(value => {
            this.projects = value;
            this.projects = this.projects.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                } else if (a.date > b.date) {
                    return -1;
                } else {
                    return 0;
                }
            });
        });
        */

        /*
        this.collectionListenerProjects.subscribe(value => {
            this.projects = value;
            this.projects = this.projects.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                } else if (a.date > b.date) {
                    return -1;
                } else {
                    return 0;
                }
            });
        });

        this.collectionListenerTeam.subscribe(value => {
            this.team = value;
            this.team = this.team.sort((a, b) => {
                if (a.index > b.index) {
                    return 1;
                } else if (a.index < b.index) {
                    return -1;
                } else {
                    return 0;
                }
            });
        });
         */

        this.collectionListenerSkills.subscribe(value => {
            this.skills = value;
        });
    }

    compare(a: ITimelineObject | ITeamMember | IProject, b: ITimelineObject | ITeamMember | IProject): number {
        if ((<ITimelineObject>a).year !== undefined) {
            // comparison of ITimelineObjects
            a = a as ITimelineObject;
            b = b as ITimelineObject;
            if (a.date < b.date) {
                return 1;
            } else if (a.date > b.date) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    isTimelineObject(data: ITimelineObject | ITeamMember | IProject): data is ITimelineObject {
        return (<ITimelineObject>data).title !== undefined;
    }

    async signOutConfirm() {
        const alert = await this.alertController.create({
            header: 'Sign Out',
            message: 'Are you sure you want to sign out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'safe'
                }, {
                    text: 'Sign Out',
                    cssClass: 'warning',
                    handler: () => {
                        this.auth.signOut();
                    }
                }
            ]
        });

        await alert.present();
    }

    async editTimeLineObject(data: ITimelineObject, type: CmsType) {
        const modal = await this.modalController.create({
            component: TimelineEditorComponent,
            componentProps: {
                data,
                type
            }
        });
        return await modal.present();
    }

}
