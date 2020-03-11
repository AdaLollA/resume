import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        this.router.navigate(['cms']);
      }
    })
  }

  ngOnInit() {
  }

}
