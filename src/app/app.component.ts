import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';

import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from './services/swipe-scroll-listen.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements SwipeScrollListener {
    public introMarginTop = '0vh';
    public introVisibility = 'visible';

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
        public swipeScrollListener: SwipeScrollListenService
    ) {
        this.initializeApp();
    }

    private initializeApp() {
        this.platform.ready().then(() => {
            this.swipeScrollListener.init('container');
            this.swipeScrollListener.subscribe(this);
            if (AppComponent.isLocal()) {
                console.log('running locally - hiding intro');
                this.introVisibility = 'hidden';
            }
        });
    }

    public dismissIntro() {
        this.introMarginTop = '-100vh';
        setTimeout(() => {
            this.introVisibility = 'hidden';
        }, 500);
    }

    private static isLocal(): boolean {
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
            return false; // todo switch
        return false;
    }

    swipeScrollEvent(direction: SwipeScrollDirection) {
        if (direction == SwipeScrollDirection.Up && this.introVisibility != 'hidden') {
            this.dismissIntro();
        }
    }
}
