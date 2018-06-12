import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
@Component({
    selector: 'my-users',
    templateUrl: '/app/users/users.component.html'
})

export class UsersComponent implements OnInit {
    successMsg: string;
    notSuccessMsg: string;
    //
    constructor(private service: UserService) { }

    ngOnInit() { 

        this.service
            .userCreated$
            .subscribe(usr => {
                this.successMsg = `${usr.name} has been created 👍`;
                this.clearMessages();
            });
        //
        this.service
            .userDeleted$
            .subscribe(() => {
                this.notSuccessMsg = 'The user has been deleted 😔';
                this.clearMessages();
            })
    }

    clearMessages() {
        setTimeout(() => {
            this.successMsg = this.notSuccessMsg = '';
        }, 2000);
    }
}