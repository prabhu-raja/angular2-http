import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { User } from "./shared/models/user";


import { UserService } from "./shared/services/user.service";
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    
      <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a routerLink="/" class="navbar-brand">
              My HTTP App
            </a>
          </div>
        </div>
        <ul class="nav navbar-nav">
          <li><a routerLink="/users">Users</a></li>
        </ul>
      </div>
      
      <router-outlet></router-outlet>
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