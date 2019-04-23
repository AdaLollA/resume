import {Component, OnInit} from '@angular/core';
import {CanvasSpace, Const, Line, Num, Pt, Tempo} from 'pts';

export interface IFlyer {
    color?: string
    offset?: number
    radius?: number
}

@Component({
    selector: 'app-fancy-canvas',
    templateUrl: './fancy-canvas.component.html',
    styleUrls: ['./fancy-canvas.component.scss'],
})
export class FancyCanvasComponent implements OnInit {
    init: boolean = false;

    ngOnInit(): void {
        // variables
        const count = 100;
        const lineColor: string = 'rgba(141,141,141,0.51)';
        const colors: string[] = [
            '#1aff1c', '#ff2f31', '#2d75ff'
        ];
        let tempo = new Tempo(10);

        // create
        let space = new CanvasSpace('#beauty');
        space.setup({bgcolor: '#181818'});
        let form = space.getForm();
        let e: IFlyer[] = [];
        for (let i = 0; i < count; i++) {
            e.push({});
        }

        // setup
        space.add(() => {
            const cx = space.center.x;
            const cy = space.center.y;
            if (!this.init) {
                // init
                e.forEach((el) => {
                    el.color = colors[this.numberBetween(0, colors.length)];
                    el.offset = this.numberBetween(0, Const.two_pi*100) / 100;
                    el.radius = this.numberBetween(0, this.pythagorasC(space.height, space.width) / 2);
                });
                this.init = true;
            }
        });

        // animate
        // todo tempo
        tempo.every(20).progress((count: number, t: number, ms: number, start: boolean) => {
            e.forEach((el) => {
                // dots
                let dotLn = Line.fromAngle(space.center, Const.two_pi * t - Const.half_pi + el.offset, el.radius);
                form.fillOnly(el.color).point(dotLn.p2, 1, 'circle');

                // lines
                let ln = Line.fromAngle(dotLn.p2, Const.two_pi - Const.quarter_pi * 3 / 2, this.pythagorasC(space.height, space.width) * 2);
                form.strokeOnly( lineColor, 1, "round", "round" ).line( ln );
            });
        }, 0);
        space.add(tempo as any);

        // play
        space.play().bindMouse().bindTouch();
    }

    private numberBetween(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

    private distanceBetweenPoints(pointA: number[], pointB: number[]): number {
        return Math.sqrt(Math.pow((pointA[0] - pointB[0]), 2) + Math.pow((pointA[1] - pointB[1]), 2));
    }

    private pythagorasC(a: number, b: number): number {
        return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    }

}
