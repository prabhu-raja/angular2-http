import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { User } from "../../shared/models/user";

@Component({
    templateUrl: '/app/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
    user: User;

    constructor(
        private actRoute: ActivatedRoute, 
        private service: UserService) { }

    ngOnInit() {
        // Grab the 🧔🆔 from Url 🕸
        let id = this.actRoute.snapshot.params['userId'];

        // Get the 🧔 by 🆔
        this.service
            .getUser(id)
            .subscribe(usr => this.user = usr);
    }
}