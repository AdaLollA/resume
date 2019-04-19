import {Component, OnInit} from '@angular/core';
import {Vector, Line, Form, Const, CanvasSpace} from 'ptjs';

@Component({
    selector: 'app-fancy-canvas',
    templateUrl: './fancy-canvas.component.html',
    styleUrls: ['./fancy-canvas.component.scss'],
})
export class FancyCanvasComponent implements OnInit {
    space;

    ngOnInit(): void {
        this.floatySpace();
    }

    floatySpace() {
        const colors = [
            '#FF3F8E', '#04C2C9', '#2E55C1'
        ];

        this.space = new CanvasSpace('canvas', '#252934').display();
        let form = new Form(this.space);

        // Elements
        const pts = [];
        const center = this.space.size.$divide(1.8);
        const angle = -(window.innerWidth * 0.5);
        let count = window.innerWidth * 0.05;
        if (count > 150) {
            count = 150;
        }
        let line = new Line(0, angle).to(this.space.size.x, 0);
        let mouse = center.clone();

        let r = Math.min(this.space.size.x, this.space.size.y);
        for (let i = 0; i < count; i++) {
            let p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
            p.moveBy(center).rotate2D(i * Math.PI / count, center);
            p.brightness = 0.1;
            pts.push(p);
        }

        // Canvas
        this.space.add({
            animate: () => {

                for (let i = 0; i < pts.length; i++) {
                    // rotate the points slowly
                    let pt = pts[i];

                    pt.rotate2D(Const.one_degree / 20, center);
                    form.stroke(false).fill(colors[i % 3]).point(pt, 1);

                    // get line from pt to the mouse line
                    let ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

                    // opacity of line derived from distance to the line
                    let distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

                    if (distFromMouse < 50) {
                        if (pts[i].brightness < 0.3) {
                            pts[i].brightness += 0.015;
                        }
                    } else {
                        if (pts[i].brightness > 0.1) {
                            pts[i].brightness -= 0.01;
                        }
                    }

                    let color = 'rgba(255,255,255,' + pts[i].brightness + ')';
                    form.stroke(color).fill(true).line(ln);
                }
            },

            /*
            onMouseAction: (type, x, y, evt) => {
                if (type == 'move') {
                    mouse.set(x, y);
                }
            },

            onTouchAction: function (type, x, y, evt) {
                this.onMouseAction(type, x, y);
            }
             */
        });

        this.space.bindMouse();
        this.space.play().then(/*do nothing*/);
    }

    /*
    handleResize() {
        this.space.removeAll();
        this.floatySpace();
    }
     */
}
