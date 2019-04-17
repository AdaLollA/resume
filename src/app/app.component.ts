import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Skills',
      url: '/skills',
      icon: 'fitness'
    },
    {
      title: 'Portfolio',
      url: '/portfolio',
      icon: 'filing'
    },
    {
      title: 'Experience',
      url: '/experience',
      icon: 'flask'
    },
    {
      title: 'Team',
      url: '/team',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // ready
    });
  }
}
