import {Component, OnInit, ViewChild} from '@angular/core';
import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from '../../services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {IonContent} from '@ionic/angular';
import {MenuStateService} from '../../services/menu-state.service';
import {IProject} from '../../components/project-card/project-card.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {
    @ViewChild('container')
    private container;

    public fabMargin: string = '-100px';

    public projects: IProject[] = [
        {
            title: 'Project A',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['mobile', 'desktop', 'web', 'hardware'],
            liveDemoUrl: 'asdf',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: 'asdf'
        },
        {
            title: 'Project B',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['mobile', 'desktop', 'web', 'hardware'],
            liveDemoUrl: 'asdf',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: 'asdf'
        },
        {
            title: 'Project C',
            description: 'Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.',
            technologies: ['mobile', 'desktop', 'web', 'hardware'],
            liveDemoUrl: 'asdf',
            moreInfoUrl: 'https://www.google.com',
            sourceCodeUrl: 'asdf'
        },

    ];

    constructor(
        public menu: MenuStateService,
        public router: Router) {
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
}
