import {HostListener, Injectable} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {EventManager} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class MenuStateService {
    public showMenu: boolean;

    constructor(private menuCtrl: MenuController,
                private eventManager: EventManager) {
        console.log('hello menu service');

        this.eventManager.addGlobalEventListener('window', 'resize', () => {
            this.menuCtrl.get().then((menu) => {
                menu.isActive().then((active) => {
                    this.showMenu = !active;
                });
            });
        });
    }
}
