import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExperiencePage } from './experience.page';
import {WorkTimelineComponent} from '../../components/work-timeline/work-timeline.component';
import {EducationTimelineComponent} from '../../components/education-timeline/education-timeline.component';

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
  declarations: [ExperiencePage, WorkTimelineComponent, EducationTimelineComponent]
})
export class ExperiencePageModule {}
