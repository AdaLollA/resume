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

    constructor(public sanitizer: DomSanitizer, public modalCtrl: ModalController) {
    }

    ngOnInit(): void {
        // todo iframe refreshes on mouse inputs (movement and click)
        console.log(this.frame);
        this.frame.nativeElement.onload = null;
        this.frame.nativeElement.setAttribute('onload', '');
    }

    dismiss() {
        this.modalCtrl.dismiss({'dismissed': true});
    }
}
