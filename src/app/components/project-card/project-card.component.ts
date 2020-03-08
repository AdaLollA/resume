import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {EmbeddedWebViewComponent} from '../embedded-web-view/embedded-web-view.component';

export interface IProject {
    title: string
    description: string
    technologies: string[]
    image?: string
    liveDemoUrl?: string
    moreInfoUrl?: string
    sourceCodeUrl?: string
    date: Date
    liveDemoInModal: boolean
}

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
    @Input('project')
    public project: IProject;

    public loading = true;

    constructor(public modalCtrl: ModalController) {
    }

    /**
     * Opens a url either by browser (default) or in a modal if defined in the projects settings.
     *
     * @param url The url that is to be loaded.
     */
    openUrl(url: string, isDemo = false) {
        if (this.project.liveDemoInModal && isDemo) {
            this.presentEmbedModal(url);
        } else {
            Object.assign(document.createElement('a'), {target: '_blank', href: url}).click();
        }
    }

    /**
     * Called when the projects image has finished loading. It is used to replace the loading image with the actual
     * requested image.
     */
    finishedLoading() {
        this.loading = false;
        console.log(this.project.title);
    }

    /**
     *  Presents a modal that loads the content of a provided url
     *
     *  @param url The url that is to be loaded.
     */
    async presentEmbedModal(url: string) {
        const modal = await this.modalCtrl.create({
            component: EmbeddedWebViewComponent,
            componentProps: {
                'url': url
            }
        });
        return await modal.present();
    }
}
