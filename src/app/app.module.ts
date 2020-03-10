import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {LinkFooterComponent} from './components/link-footer/link-footer.component';
import {HomePageModule} from './pages/home/home.module';
import {HackerConComponent} from './components/hacker-con/hacker-con.component';
import {ScrollingMouseComponent} from './components/scrolling-mouse/scrolling-mouse.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {EmbeddedWebViewComponent} from './components/embedded-web-view/embedded-web-view.component';
import {GoogleAnalyticsService} from './services/google-analytics.service';

@NgModule({
    declarations: [AppComponent, PersonalInfoComponent, LinkFooterComponent, HackerConComponent, ScrollingMouseComponent, EmbeddedWebViewComponent],
  entryComponents: [EmbeddedWebViewComponent],
    imports: [
        BrowserModule,
        AngularFireAuthModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HomePageModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
