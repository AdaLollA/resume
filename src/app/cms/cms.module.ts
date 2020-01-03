import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CmsPage } from './cms.page';
import {CmsElementComponent} from './cms-element/cms-element.component';
import {TimelineVisualizerComponent} from './timeline-visualizer/timeline-visualizer.component';

const routes: Routes = [
  {
    path: '',
    component: CmsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CmsPage, CmsElementComponent, TimelineVisualizerComponent]
})
export class CmsPageModule {}
