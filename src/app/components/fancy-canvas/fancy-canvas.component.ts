import {Component, OnInit} from '@angular/core';
import {CanvasSpace, Num, Pt, Tempo} from 'pts';

export interface IFlyer {
    color: string
    position?: number[]
    radius?: number
    progress?: number
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
        const spread = 0.8;
        const colors: string[] = [
            '#1aff1c', '#ff2f31', '#2d75ff'
        ];

        // create
        let space = new CanvasSpace('#beauty');
        space.setup({bgcolor: '#181818'});
        let form = space.getForm();
        let e: IFlyer[] = [];

        for (let i = 0; i < count; i++) {
            const flyer: IFlyer = {
                color: colors[this.numberBetween(0, colors.length)]
            };
            e.push(flyer);
        }

        // animation
        space.add((time, ftime) => {
            const cx = space.center.x;
            const cy = space.center.y;

            if (!this.init) {
                // init
                e.forEach((el) => {
                    el.position = [
                        cx + (this.numberBetween(0, cx * 2) - cx) * spread,
                        0
                    ];
                    el.radius = Math.abs(cx - el.position[0]);
                    el.progress = this.numberBetween(0, 360);
                });
                this.init = true;
            } else {
                // animation
                // todo let ln = Line.fromAngle( space.center, Const.two_pi*t - Const.half_pi, space.size.y/3 );
                e.forEach((el) => {
                    el.position = [
                        el.position[0] + 1,
                        el.position[1] + 1
                    ];
                });
            }

            e.forEach((el) => {
                form.stroke(el.color, 5).fill(el.color).point(el.position, 3, 'circle');
            });

            // space.pointer stores the last mouse or touch position
            let m = space.pointer;
        });

        // play
        space.play().bindMouse().bindTouch();
    }

    private numberBetween(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

    private distanceBetweenPoints(pointA: number[], pointB: number[]) : number {
        return Math.sqrt(Math.pow((pointA[0] - pointB[0]), 2) + Math.pow((pointA[1] - pointB[1]), 2));
    }

}
