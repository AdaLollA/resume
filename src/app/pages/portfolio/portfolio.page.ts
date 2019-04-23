import {Component, OnInit, ViewChild} from '@angular/core';
import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from '../../services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {IonContent} from '@ionic/angular';
import {MenuStateService} from '../../services/menu-state.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {
    @ViewChild('container')
    private container;

    public fabMargin: string = '-100px';

    cards = [
        'a', 'b', 'c', 'd', 'e'
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
