import {Component, OnInit} from '@angular/core';
import {TimelineObject} from '../../components/timeline/timeline.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.page.html',
    styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {
    public education: TimelineObject[] = [
        {
            year: '2018+',
            title: 'scondary technical college',
            content: 'informatics and electronics'
        }, {
            year: '2018',
            title: 'BSc: University of Applied Sciences ',
            content: 'Startup | Mobile | Software'
        }, {
            year: '2015',
            title: 'Ing: Secondary Technical College',
            content: 'Informatics | Electronics | Management'
        }
    ];

    public experience: TimelineObject[] = [
        {
            year: '2017+',
            title: 'Kennstwen',
            content: 'Co-Founder'
        }, {
            year: '2014 - 2018',
            title: 'SBS Software Ges.m.b.H',
            content: 'Mobile | Web-App | Prototyping'
        }, {
            year: '2013',
            title: 'PALFINGER Group',
            content: 'Programmer | Mechanic | Paperwork'
        }
    ];

    public awards: TimelineObject[] = [
        {
            year: '2014',
            title: 'Research and Development Talent',
            content: 'Austrian Ministry for Transport, Innovation and Technology'
        }, {
            year: '2017',
            title: '2nd Place',
            content: 'Coding Contest'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
