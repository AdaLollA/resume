import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hacker-con',
  templateUrl: './hacker-con.component.html',
  styleUrls: ['./hacker-con.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HackerConComponent implements OnInit {
  private loaderOpacity = 1;

  constructor() { }

  ngOnInit() {
    const loader = document.getElementById('loader');
    window.addEventListener("load", (event) => {
      this.loaderOpacity = 0;
      setTimeout(() => {
        loader.classList.remove('loading');
        loader.classList.add('loaded');
        document.body.classList.add('imgloaded');
      }, 500);
    });
  }

}
