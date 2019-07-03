import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    addBodyClass(bodyClass) {
        this.renderer.addClass(document.body, bodyClass);
    }

    removeBodyClass(bodyClass) {
        this.renderer.removeClass(document.body, bodyClass);
    }
}
