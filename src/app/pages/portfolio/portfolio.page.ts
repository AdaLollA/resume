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

    public projects: IProject[];
    public visibleProjects: IProject[] = [];
    private collectionListener: Observable<any[]>;

    constructor(
        public menu: MenuStateService,
        public router: Router,
        public db: AngularFirestore
    ) {
        this.collectionListener = db.collection('portfolio').valueChanges();
    }

    ngOnInit(): void {
        this.collectionListener.subscribe(value => {
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
            this.applyFilter();
        });
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
