import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';

@Component({
    selector: 'app-music',
    templateUrl: './music.page.html',
    styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

    constructor(public menu: MenuStateService) {
    }

    ngOnInit() {
    }

    public goToLink(url: string) {
        window.open(url, '_blank');
    }
}
