import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MenuStateService} from '../../services/menu-state.service';
import {IProject} from '../../components/project-card/project-card.component';
import {MatButtonToggleGroup} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
    @ViewChild('container')
    private container;

    @ViewChild('techFilter')
    private techFilter: MatButtonToggleGroup;

    @ViewChild('availabilityFilter')
    private availabilityFilter: MatButtonToggleGroup;

    public fabMargin: string = '-100px';

    private projects: IProject[] = [
        {
            title: 'Project A',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['mobile'],
            liveDemoUrl: 'asdf',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: 'asdf'
        },
        {
            title: 'Project B',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['mobile', 'web'],
            liveDemoUrl: '',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: 'asdf'
        },
        {
            title: 'Project C',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['web'],
            liveDemoUrl: 'asdf',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: ''
        }
    ];

    public visibleProjects: IProject[];

    items: Observable<any[]>;

    constructor(
        public menu: MenuStateService,
        public router: Router,
        public db: AngularFirestore
    ) {
        this.items = db.collection('items').valueChanges();
    }

    ngOnInit(): void {
        this.applyFilter();
    }

    handleScroll(e) {
        if (e.detail.scrollTop < 100) {
            this.fabMargin = '-' + (100 - e.detail.scrollTop) + 'px';
        } else {
            this.fabMargin = '0';
        }
    }

    scrollToTop() {
        this.container.scrollToTop(200);
    }

    applyFilter() {
        // removing previous projects
        this.visibleProjects = [];

        // filters not initialized
        let filter: boolean = this.techFilter.value && this.availabilityFilter.value;

        // no filters selected
        if (filter) {
            filter = this.techFilter.value.length > 0 || this.availabilityFilter.value.length > 0;
        }

        // filter selected
        if (filter) {
            this.projects.forEach((project) => {
                // technology filter
                let technologyPass: boolean = false;
                if (this.techFilter.value.length == 0) {
                    technologyPass = true;
                }
                if (project.technologies.filter(technology => this.techFilter.value.includes(technology)).length > 0) {
                    technologyPass = true;
                }

                // availability filter
                let availabilityPass: boolean = false;
                if (this.availabilityFilter.value.length == 0) {
                    availabilityPass = true;
                } else {
                    this.availabilityFilter.value.forEach((availability) => {
                        if (availability == 'on-request') {
                            availabilityPass = true;
                        } else if (availability == 'public' && project.sourceCodeUrl) {
                            availabilityPass = true;
                        } else if (availability == 'demo' && project.liveDemoUrl) {
                            availabilityPass = true;
                        }
                    });
                }

                console.log(technologyPass, 'tech');
                console.log(availabilityPass, 'avail');

                // update visible projects based on applicability
                if (technologyPass && availabilityPass) {
                    this.visibleProjects.push(project);
                }
            });
        } else {
            this.visibleProjects = this.projects;
        }
    }
}
