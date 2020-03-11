import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CmsPage} from './cms.page';
import {CmsElementComponent} from './cms-element/cms-element.component';
import {TimelineVisualizerComponent} from './timeline-visualizer/timeline-visualizer.component';
import {TimelineEditorComponent} from './modals/timeline-editor/timeline-editor.component';
import {TeamEditorComponent} from './modals/team-editor/team-editor.component';
import {NgxFileHelpersModule} from 'ngx-file-helpers';
import {ProjectEditorComponent} from './modals/project-editor/project-editor.component';
import {MatButtonToggleModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: CmsPage
    }
];

@NgModule({
    entryComponents: [
        TimelineEditorComponent,
        TeamEditorComponent,
        ProjectEditorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgxFileHelpersModule,
        MatButtonToggleModule
    ],
    declarations: [CmsPage, CmsElementComponent, TimelineVisualizerComponent, TimelineEditorComponent, TeamEditorComponent, ProjectEditorComponent]
})
export class CmsPageModule {
}
