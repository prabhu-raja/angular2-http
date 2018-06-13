import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: '/app/login/login.component.html'
})
export class LoginComponent {

    credentials =  { username: '', password: ''};
    successMsg: string = '';
    notSuccessMsg: string = '';

    constructor(private service: AuthService, private router: Router) { }

    login() {
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(
                data => {
                    console.log('🙌', data);
                    this.router.navigate(['']);
                },
                err => {
                    console.log('👊',err);
                }
            );
    }
}