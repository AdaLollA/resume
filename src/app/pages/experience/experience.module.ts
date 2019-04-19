import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExperiencePage } from './experience.page';
import {TimelineComponent} from '../../components/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExperiencePage, TimelineComponent]
})
export class ExperiencePageModule {}
