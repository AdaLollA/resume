import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(private router: Router, private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.auth.user$.subscribe((user) => {
            if (!user) {
                this.router.navigate(['login']);
                return false;
            }
        });
        return true;
    }
}
