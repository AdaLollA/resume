import {Component, ViewChild} from '@angular/core';

import {Platform} from '@ionic/angular';

import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from './services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {ThemeService} from './services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements SwipeScrollListener {
    public introMarginTop = '0vh';
    public introVisibility = 'visible';
    public brightMode = false;

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Skills',
            url: '/skills',
            icon: 'fitness'
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            icon: 'book'
        },
        {
            title: 'Experience',
            url: '/experience',
            icon: 'flask'
        },
        {
            title: 'Team',
            url: '/team',
            icon: 'people'
        }
    ];

    constructor(
        private platform: Platform,
        public swipeScrollListener: SwipeScrollListenService,
        public router: Router,
        public theme: ThemeService
    ) {
        this.initializeApp();
    }

    private initializeApp() {
        this.platform.ready().then(() => {
            this.swipeScrollListener.init('container');
            this.swipeScrollListener.subscribe(this);
            if (this.isLocal()) {
                console.log('running locally - hiding intro');
                this.introVisibility = 'hidden';
            }
            this.theme.dark();
        });
    }

    public toggleMode(event: CustomEvent) {
        this.brightMode = event.detail.checked;
        if (this.brightMode) {
            this.theme.light();
        } else {
            this.theme.dark();
        }
    }

    private dismissIntro() {
        this.introMarginTop = '-100vh';
        setTimeout(() => {
            this.introVisibility = 'hidden';
        }, 500);
    }

    private showIntro() {
        this.introVisibility = 'visible';
        this.introMarginTop = '0vh';
    }

    private isLocal(): boolean {
        if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            this.introMarginTop = '-100vh';
            return true;
        }
        return false;
    }

    swipeScrollEvent(direction: SwipeScrollDirection) {
        if (direction == SwipeScrollDirection.Up && this.introVisibility != 'hidden') {
            this.dismissIntro();
        } else if (direction == SwipeScrollDirection.Down && this.introVisibility == 'hidden' && this.router.url == '/home') {
            this.showIntro();
        }
    }
}
