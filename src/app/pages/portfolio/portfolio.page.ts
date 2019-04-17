import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  cards = [
      'a', 'b', 'c', 'd', 'e'
  ];

  constructor() { }

  ngOnInit() {
  }

}
