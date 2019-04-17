import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-scrolling-mouse',
    templateUrl: './scrolling-mouse.component.html',
    styleUrls: ['./scrolling-mouse.component.scss'],
})
export class ScrollingMouseComponent {
    @Output('scroll')
    scrollEmitter: EventEmitter<void> = new EventEmitter();

    emitScrollEvent() {
        this.scrollEmitter.emit();
    }

}
