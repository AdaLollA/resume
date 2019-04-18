import {Component, OnInit, ViewChild} from '@angular/core';
import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from '../../services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
    @ViewChild('container')
    private container;
    private scrollElement;

    cards = [
        'a', 'b', 'c', 'd', 'e'
    ];

    constructor(
        private swipeScrollListener: SwipeScrollListenService,
        public router: Router) {
        // this.swipeScrollListener.subscribe(this);
    }

    ngOnInit(): void {

    }

    /*
    swipeScrollEvent(direction: SwipeScrollDirection) {
        (this.container.el.getScrollElement() as any).then((el) => {
            this.scrollElement = el;
            if (direction == SwipeScrollDirection.Down && this.getScrollProgress() < 1) {
                this.router.navigateByUrl('/skills');
            } else if ((direction == SwipeScrollDirection.Up) && this.getScrollProgress() > 99) {
                this.router.navigateByUrl('/experience');
            }
        });
    }

    private getScrollProgress(): number {
        console.log(this.scrollElement);
        const winScroll = this.scrollElement.scrollTop;
        const height = this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        return scrolled;
    }
    */
}
