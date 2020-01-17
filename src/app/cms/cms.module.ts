import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CmsPage } from './cms.page';
import {CmsElementComponent} from './cms-element/cms-element.component';
import {TimelineVisualizerComponent} from './timeline-visualizer/timeline-visualizer.component';
import {TimelineEditorComponent} from './modals/timeline-editor/timeline-editor.component';
import {TeamEditorComponent} from './modals/team-editor/team-editor.component';

const routes: Routes = [
  {
    path: '',
    component: CmsPage
  }
];

@NgModule({
  entryComponents:[
    TimelineEditorComponent,
    TeamEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CmsPage, CmsElementComponent, TimelineVisualizerComponent, TimelineEditorComponent, TeamEditorComponent]
})
export class CmsPageModule {}
