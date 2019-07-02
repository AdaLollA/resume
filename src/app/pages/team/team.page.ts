import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface ITeamMember {
    img: string
    name: string
    profession: string
    index: number
}

@Component({
    selector: 'app-team',
    templateUrl: './team.page.html',
    styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
    public team: ITeamMember[] = [];

    private collectionListener: Observable<any[]>;

    constructor(public menu: MenuStateService,
                public db: AngularFirestore) {
        this.collectionListener = db.collection('team').valueChanges();
    }

    ngOnInit(): void {
        this.collectionListener.subscribe(value => {
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
    }

}
