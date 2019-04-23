import {HostListener, Injectable, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {EventManager} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class MenuStateService {
    public showMenu: boolean;

    constructor(public menuCtrl: MenuController,
                public eventManager: EventManager) {
        this.init();
        this.checkSize();
    }

    public init(): void {
        this.eventManager.addGlobalEventListener('window', 'resize', () => {
            this.checkSize();
        });
    }

    private checkSize() {
        this.menuCtrl.get().then((menu) => {
            menu.isActive().then((active) => {
                this.showMenu = !active;
            });
        });
    }

    public getMenuWidth(): Promise<number> {
        return new Promise<number>((resolve) => {
            this.menuCtrl.get().then((menu) => {
                resolve(menu.clientWidth);
            });
        });
    }
}
