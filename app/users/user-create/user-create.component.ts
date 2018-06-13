import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Component({
    templateUrl: '/app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit {
    successMsg: string = '';
    notSuccessMsg: string = '';
    user: User;

    constructor(
        private service: UserService,
        private router: Router) { }

    ngOnInit() {
        this.user = {
            avatar: 'url of avatar',
            id: 8,
            name: 'Testy',
            username: 'User Testy'
        }
    }

    createUser() {
        this.successMsg = '',
        this.notSuccessMsg = '';
        //
        this.service
            .createUser(this.user)
            .subscribe (usr => {
                this.successMsg = '👨🏻User was Created!';
                console.log('👨🏻User was Created!', usr);
                this.router.navigate(['/users']);
            })
    }
}