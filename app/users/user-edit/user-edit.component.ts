import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Component({
    templateUrl: '/app/users/user-edit/user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    user: User;
    successMsg: string = '';
    notSuccessMsg: string = '';

    constructor(
        private service: UserService,
        private actRoute: ActivatedRoute) { }

    ngOnInit() {
        // Grab the 🧔🆔 from Url 🕸
        let id = this.actRoute.snapshot.params['userId'];
        this.service
            .getUser(id)
            .subscribe(usr => this.user = usr);
    }

    // Update the 🧔
    updateUser() {
        this.successMsg = '';
        this.notSuccessMsg = '';
        //
        this.service
            .updateUser(this.user)
            .subscribe(
                updUser => {
                    console.log('🧔🏽 -> 👨🏻', updUser);
                    this.successMsg = 'User was updated. 🧔🏽 -> 👨🏻';
                },
                err => {
                    this.notSuccessMsg = 'User could not updated 😡';
                    console.error(err);
                }
            );
    }
}