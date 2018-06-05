import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { User } from "./shared/models/user";


import { UserService } from "./shared/services/user.service";
@Component({
  selector: 'my-app',
  template: `
    <my-users></my-users>
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <div *ngIf="users">
        <div *ngFor="let usr of users">
          <h2>{{usr.first_name}}</h2>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  users: User[];
  constructor (private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(
        usrs => this.users = usrs,
        err  => {
          console.log('⛽️',err);
        });
  }
}