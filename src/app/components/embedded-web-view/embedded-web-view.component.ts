import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-embedded-web-view',
    templateUrl: './embedded-web-view.component.html',
    styleUrls: ['./embedded-web-view.component.scss'],
})
export class EmbeddedWebViewComponent implements OnInit {
    @Input() url: string;

    @ViewChild('embed') frame;

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit(): void {
        this.frame.nativeElement.src = this.url;
    }

    dismiss() {
        this.modalCtrl.dismiss({'dismissed': true});
    }
}
