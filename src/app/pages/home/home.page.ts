import {Component, HostListener} from '@angular/core';
import {SwipeScrollDirection, SwipeScrollListener, SwipeScrollListenService} from '../../services/swipe-scroll-listen.service';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public showMenu: boolean;

    constructor(public menuCtrl: MenuController) {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.menuCtrl.get().then((menu) => {
            menu.isActive().then((active) => {
                this.showMenu = active;
                console.log(this.showMenu);
            });
        });
    }
}
