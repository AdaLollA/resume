import {Component, OnInit} from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';
import {SeoService} from '../../services/seo.service';

@Component({
    selector: 'app-music',
    templateUrl: './music.page.html',
    styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

    constructor(public menu: MenuStateService,
                public seo: SeoService) {
        seo.update('Music', 'Find guitar chords for many easy to play classics and indie songs that your friends can sing along to.');
    }

    ngOnInit() {
    }

    public goToLink(url: string) {
        window.open(url, '_blank');
    }
}
