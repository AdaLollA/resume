import {Component, OnInit} from '@angular/core';
import {CanvasSpace, Num, Pt} from 'pts';

export interface IFlyer {
    color: string
    position: number[]
    direction?
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
        const count = 150;
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
                color: colors[this.numberBetween(0, 2)],
                position: [0, 0]
            };
            e.push(flyer);
        }

        // animation
        space.add((time, ftime) => {
            const cx = space.center.x;
            const cy = space.center.y;

            if (!this.init) {
                e.forEach((el) => {
                    el.position = [
                        cx + (this.numberBetween(0, cx * spread * 2) - cx * spread),
                        cy + (this.numberBetween(0, cy * spread * 2) - cy * spread)
                    ];
                });
                this.init = true;
            }

            // form.stroke('#42e', 5).fill('#42e').point(space.center, 3, 'circle');

            e.forEach((el) => {
                form.stroke(el.color, 5).fill(el.color).point(el.position, 3, 'circle');
            });

            // space.pointer stores the last mouse or touch position
            let m = space.pointer;

            // drawing
            /*
            form.strokeOnly("#123", 5).line( [new Pt( m.x, 0), m, new Pt( 0, m.y)] );
            form.stroke("#42e").line( [new Pt(0,0), m] );
            form.stroke("#fff", 5).fill("#42e").point( m, 10, "circle");
            form.fill("#123").font(14, "bold").text( m.$add(20, 5), m.toString() );
            */

        });

        // play
        space.play().bindMouse().bindTouch();
    }

    private numberBetween(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

}
