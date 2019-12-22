import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.page.html',
  styleUrls: ['./cms.page.scss'],
})
export class CmsPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
