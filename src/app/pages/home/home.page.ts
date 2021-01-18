import {Component, HostListener} from '@angular/core';
import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from '../../services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {MenuStateService} from '../../services/menu-state.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {SeoService} from '../../services/seo.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(public menu: MenuStateService,
                public seo: SeoService) {
        seo.update('Home', 'Welcome to my home page where I gather information about my portfolio, experiences and skills.');
    }
}
