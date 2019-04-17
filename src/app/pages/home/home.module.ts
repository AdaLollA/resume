import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {FancyCanvasComponent} from '../../components/fancy-canvas/fancy-canvas.component';
import {ScrollingMouseComponent} from '../../components/scrolling-mouse/scrolling-mouse.component';
import {HackerConComponent} from '../../components/hacker-con/hacker-con.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, FancyCanvasComponent, ScrollingMouseComponent, HackerConComponent]
})
export class HomePageModule {}
