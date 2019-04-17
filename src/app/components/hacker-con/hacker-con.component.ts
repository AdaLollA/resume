import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-con',
  templateUrl: './hacker-con.component.html',
  styleUrls: ['./hacker-con.component.scss'],
})
export class HackerConComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const loader = document.getElementById('loader');
    window.addEventListener("load", function(event) {
      loader.classList.remove('loading');
      loader.classList.add('loaded');
      document.body.classList.add('imgloaded');
    });
  }

}
