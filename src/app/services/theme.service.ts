import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    private addBodyClass(bodyClass) {
        this.renderer.addClass(document.body, bodyClass);
    }

    private removeBodyClass(bodyClass) {
        this.renderer.removeClass(document.body, bodyClass);
    }

    public light() {
        this.removeBodyClass('dark-theme');
        this.addBodyClass('light-theme');
    }

    public dark() {
        this.removeBodyClass('light-theme');
        this.addBodyClass('dark-theme');
    }
}
