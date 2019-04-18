import {Injectable} from '@angular/core';
import SwipeListener from 'swipe-listener';

export enum SwipeScrollDirection {
    Up,
    Down
}

export interface SwipeScrollListener {
    swipeScrollEvent(SwipeScrollDirection);
}

@Injectable({
    providedIn: 'root'
})
export class SwipeScrollListenService {
    private listeners: SwipeScrollListener[] = [];

    public init(container: string) {
        this.initMouseWheelListener();
        this.initSwipeListener(container);
    }

    private initMouseWheelListener() {
        // IE9, Chrome, Safari, Opera
        document.body.addEventListener('mousewheel', (data: WheelEvent) => this.handleWheelEvent(data), false);
        // Firefox
        document.body.addEventListener('DOMMouseScroll', (data: WheelEvent) => this.handleWheelEvent(data), false);
    }

    private handleWheelEvent(event: WheelEvent) {
        if (event.deltaY > 0) {
            this.notify(SwipeScrollDirection.Up)
        } else {
            this.notify(SwipeScrollDirection.Down)
        }
    }

    private initSwipeListener(elementId: string) {
        const container = document.getElementById(elementId);
        const listener = SwipeListener(container);
        container.addEventListener('swipe', (e: any) => {
            const directions = e.detail.directions;
            const x = e.detail.x;
            const y = e.detail.y;
            if (directions.top) {
                this.notify(SwipeScrollDirection.Up)
            } else if (directions.bottom) {
                this.notify(SwipeScrollDirection.Down)
            }
        });
    }

    public subscribe(listener: SwipeScrollListener) {
        this.listeners.push(listener);
    }

    public unsubscribe(listener: SwipeScrollListener) {
        SwipeScrollListenService.removeFromArray(this.listeners, listener);
    }

    public notify(direction: SwipeScrollDirection) {
        this.listeners.forEach((listener) => {
            listener.swipeScrollEvent(direction);
        })
    }

    private static removeFromArray(array: any[], key: any) {
        const index = array.indexOf(key, 0);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}
