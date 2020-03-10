import {Injectable} from '@angular/core';

declare let gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {
    /**
     * Emits an event to the google analytics platform.
     *
     * @param eventName name - eg 'add_to_cart'
     * @param eventCategory category - eg 'shop'
     * @param eventAction action - eg 'cart'
     * @param eventLabel label - eg 'click'
     * @param eventValue - eg 10
     */
    public eventEmitter(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null) {
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    }
}
