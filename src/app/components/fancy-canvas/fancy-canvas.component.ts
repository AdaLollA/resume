import {Component, OnInit, ViewChild} from '@angular/core';
import {Vector, Line, Form, Const, CanvasSpace} from 'ptjs';

@Component({
    selector: 'app-fancy-canvas',
    templateUrl: './fancy-canvas.component.html',
    styleUrls: ['./fancy-canvas.component.scss'],
})
export class FancyCanvasComponent implements OnInit {
    @ViewChild('canvas')
    canvas;

    private colors = ['#FF3F8E', '#04C2C9', '#2E55C1'];
    private space;

    ngOnInit() {
        this.floatySpace();
    }

    private floatySpace() {
        this.space = new CanvasSpace('canvas', '#252934').display();
        const form = new Form(this.space);

        // Elements
        const pts = [];
        const center = this.space.size.$divide(1.8);
        const angle = -(window.innerWidth * 0.5);
        let count = window.innerWidth * 0.05;
        if (count > 150) {
            count = 150;
        }
        const line = new Line(0, angle).to(this.space.size.x, 0);
        const mouse = center.clone();

        const r = Math.min(this.space.size.x, this.space.size.y);
        for (let i = 0; i < count; i++) {
            const p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
            p.moveBy(center).rotate2D(i * Math.PI / count, center);
            p.brightness = 0.1;
            pts.push(p);
        }

        // Canvas
        this.space.add({
            animate: (time, fps, context) => {

                for (let i = 0; i < pts.length; i++) {
                    // rotate the points slowly
                    const pt = pts[i];

                    pt.rotate2D(Const.one_degree / 20, center);
                    form.stroke(false).fill(this.colors[i % 3]).point(pt, 1);

                    // get line from pt to the mouse line
                    const ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

                    // opacity of line derived from distance to the line
                    const opacity = Math.min(0.8, 1 - Math.abs(line.getDistanceFromPoint(pt)) / r);
                    const distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

                    if (distFromMouse < 50) {
                        if (pts[i].brightness < 0.3) {
                            pts[i].brightness += 0.015;
                        }
                    } else {
                        if (pts[i].brightness > 0.1) {
                            pts[i].brightness -= 0.01;
                        }
                    }

                    const color = 'rgba(255,255,255,' + pts[i].brightness + ')';
                    form.stroke(color).fill(true).line(ln);
                }
            },

            onMouseAction: (type, x, y, evt) => {
                if (type === 'move') {
                    mouse.set(x, y);
                }
            },

            onTouchAction: function (type, x, y, evt) {
                this.onMouseAction(type, x, y);
            }
        });

        this.space.bindMouse();
        this.space.play();
    }

    handleResize() {
        this.space.removeAll();
        this.floatySpace();
    }
}
