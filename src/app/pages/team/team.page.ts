import { Component, OnInit } from '@angular/core';
import {MenuStateService} from '../../services/menu-state.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(public menu: MenuStateService) { }

  ngOnInit() {
  }

}
