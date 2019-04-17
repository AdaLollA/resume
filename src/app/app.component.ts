import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';

import SwipeListener from 'swipe-listener';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    private introMarginTop = '0vh';
    private introVisibility = 'visible';

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
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.initMouseWheelListener();
            this.initSwipeListener();
        });
    }

    dismissIntro() {
        this.introMarginTop = '-100vh';
        setTimeout(() => {
            this.introVisibility = 'hidden';
        }, 500);
    }

    initMouseWheelListener() {
        // IE9, Chrome, Safari, Opera
        document.body.addEventListener('mousewheel', () => this.dismissIntro(), false);
        // Firefox
        document.body.addEventListener('DOMMouseScroll', () => this.dismissIntro(), false);
    }

    initSwipeListener() {
        var container = document.getElementById('container');
        var listener = SwipeListener(container);
        container.addEventListener('swipe', (e: any) => {
            var directions = e.detail.directions;
            var x = e.detail.x;
            var y = e.detail.y;
            if (directions.top) {
                this.dismissIntro();
            }
        });
    }
}
