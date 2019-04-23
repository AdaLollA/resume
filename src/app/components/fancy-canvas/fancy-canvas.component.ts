import {Component, OnInit} from '@angular/core';
import {Bound, CanvasSpace, Const, Line, Num, Pt, Tempo} from 'pts';
import {$} from 'protractor';
import {MenuStateService} from '../../services/menu-state.service';
import {EventManager} from '@angular/platform-browser';

export interface IFlyer {
    color?: string
    offset?: number
    radius?: number
    opacity: number
}

@Component({
    selector: 'app-fancy-canvas',
    templateUrl: './fancy-canvas.component.html',
    styleUrls: ['./fancy-canvas.component.scss'],
})
export class FancyCanvasComponent implements OnInit {
    init: boolean = false;
    menuOffset: number;

    constructor(public menu: MenuStateService,
                public eventManager: EventManager) {
    }

    ngOnInit(): void {
        // init
        this.menu.getMenuWidth().then((width) => {
            // resize initialize bug because of menu offset
            if (this.menu.showMenu) {
                this.menuOffset = width;
                this.eventManager.addGlobalEventListener('window', 'resize', () => {
                    // bug fixes itself when the window is re-sized ~ lol ez
                    this.menuOffset = 0;
                });
            }
        });

        // variables
        const angle: number = Const.two_pi - Const.quarter_pi * 3 / 2;
        const lineOpacity = 0.20;
        const count = 50;
        const colors: string[] = [
            '#1aff1c', '#ff2f31', '#2d75ff'
        ];
        let tempo = new Tempo(10);
        const lineColor: string = 'rgba(141,141,141,';
        const fade: number = 0.03;

        // create
        this.init = false;
        let space = new CanvasSpace('#beauty');
        space.setup({bgcolor: '#252934'});
        space.autoResize = true;
        let form = space.getForm();
        let e: IFlyer[] = [];
        for (let i = 0; i < count; i++) {
            e.push({opacity: lineOpacity});
        }

        // setup
        space.add(() => {
            const cx = space.center.x;
            const cy = space.center.y;
            if (!this.init) {
                // init
                e.forEach((el) => {
                    el.color = colors[FancyCanvasComponent.numberBetween(0, colors.length)];
                    el.offset = FancyCanvasComponent.numberBetween(0, Const.two_pi * 100) / 100;
                    el.radius = FancyCanvasComponent.numberBetween(0, space.width / 2);
                });
                this.init = true;
            }
        });

        // animate
        tempo.every(20).progress((count: number, t: number, ms: number, start: boolean) => {
            e.forEach((el) => {
                // dots
                let dotLn = Line.fromAngle(space.center, Const.two_pi * t - Const.half_pi + el.offset, el.radius);
                form.fillOnly(el.color).point(dotLn.p2, 1, 'circle');

                // opacity
                el.opacity = el.opacity > lineOpacity ? el.opacity - fade : el.opacity;

                // lines
                let ln = Line.fromAngle(dotLn.p2, angle, space.height + space.width);
                form.strokeOnly(lineColor + el.opacity + ')', 1, 'round', 'round').line(ln);

                // hover
                // form.point(space.pointer, 10); // this is cursor debug - seems to be offset by menu
                let perpendicular = Line.perpendicularFromPt(ln, [space.pointer.x - this.menuOffset, space.pointer.y], true);
                let distance: number = perpendicular ? perpendicular.magnitude() : 1000;
                let above: boolean = space.pointer.y < ln.p1.y;
                if (distance < 10 && above) {
                    el.opacity = 1;
                }
            });
        }, 0);
        space.add(tempo as any);

        // play
        space.play().bindMouse().bindTouch();
    }

    private static numberBetween(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }
}
