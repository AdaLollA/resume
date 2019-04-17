import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {path: 'experience', loadChildren: './pages/experience/experience.module#ExperiencePageModule'},
    {path: 'portfolio', loadChildren: './pages/portfolio/portfolio.module#PortfolioPageModule'},
  { path: 'skills', loadChildren: './pages/skills/skills.module#SkillsPageModule' },
  { path: 'team', loadChildren: './pages/team/team.module#TeamPageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
