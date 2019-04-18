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

@NgModule({
    declarations: [AppComponent, PersonalInfoComponent, LinkFooterComponent, HackerConComponent, ScrollingMouseComponent],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HomePageModule,
        FormsModule
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
