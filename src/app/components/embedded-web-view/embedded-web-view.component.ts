import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-embedded-web-view',
  templateUrl: './embedded-web-view.component.html',
  styleUrls: ['./embedded-web-view.component.scss'],
})
export class EmbeddedWebViewComponent {
  url = 'https://dronify-5949c.firebaseapp.com/';

  constructor(public sanitizer: DomSanitizer) { }

  /**
   * Loads the provided url into the embedded web view.
   *
   * @param url The url that is to be loaded.
   */
  public load(url: string) {
    this.url = url;
  }

}
