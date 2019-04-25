import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PortfolioPage} from './portfolio.page';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';
import {MatButtonToggleModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: PortfolioPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatButtonToggleModule
    ],
    declarations: [PortfolioPage, ProjectCardComponent]
})
export class PortfolioPageModule {
}
