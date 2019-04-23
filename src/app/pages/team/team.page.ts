import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';

export interface ITeamMember {
    img: string
    name: string
    profession: string
}

@Component({
    selector: 'app-team',
    templateUrl: './team.page.html',
    styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
    public team: ITeamMember[] = [{
        img: '../../../assets/img/team/1.jpg',
        name: 'Lorenz Graf',
        profession: 'Developer'
    }, {
        img: '../../../assets/img/team/2.jpeg',
        name: 'Lord Graf Lorenz',
        profession: 'Leader'
    }, {
        img: '../../../assets/img/team/3.jpg',
        name: 'Gustav Götz',
        profession: 'Designer'
    }, {
        img: '../../../assets/img/team/4.jpg',
        name: 'Graf Gläubig',
        profession: 'Religious and Serious'
    },];

    constructor(public menu: MenuStateService) {
    }

    ngOnInit() {
    }

}
