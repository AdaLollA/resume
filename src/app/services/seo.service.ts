import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(private title: Title, private meta: Meta) {
    }

    update(title: string, description: string) {
        this.updateTitle(title);
        this.updateDescription(description);
    }

    updateTitle(title: string) {
        this.title.setTitle('Lorenz Graf | ' + title);
    }

    updateDescription(desc: string) {
        this.meta.updateTag({name: 'description', content: desc});
    }
}
