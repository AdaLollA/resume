import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

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
    {path: 'skills', loadChildren: './pages/skills/skills.module#SkillsPageModule'},
    {path: 'team', loadChildren: './pages/team/team.module#TeamPageModule'},
    {path: 'cms', loadChildren: './cms/cms.module#CmsPageModule', canActivate: [AuthGuardService]},
    {path: 'login', loadChildren: './cms/login/login.module#LoginPageModule'},
    {path: 'music', loadChildren: './pages/music/music.module#MusicPageModule'}


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
