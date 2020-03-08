import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-embedded-web-view',
  templateUrl: './embedded-web-view.component.html',
  styleUrls: ['./embedded-web-view.component.scss'],
})
export class EmbeddedWebViewComponent {
  @Input() url: string;

  constructor(public sanitizer: DomSanitizer) {
  }

}
