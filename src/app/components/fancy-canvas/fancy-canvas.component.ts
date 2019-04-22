import {Component, OnInit} from '@angular/core';
import {CanvasSpace, Num} from 'pts';

@Component({
    selector: 'app-fancy-canvas',
    templateUrl: './fancy-canvas.component.html',
    styleUrls: ['./fancy-canvas.component.scss'],
})
export class FancyCanvasComponent implements OnInit {

    ngOnInit(): void {
        let space = new CanvasSpace('#beauty');
        space.setup({ bgcolor: "#181818" });
        let form = space.getForm();

        // space.add( () => form.point( space.pointer, 10 ) );

        space.add( (time, ftime) => {
            let radius = Num.cycle( (time%1000)/1000 ) * 20;
            form.fill("#09f").point( space.pointer, radius, "circle" );
        });

        space.play().bindMouse().bindTouch();
    }

}
