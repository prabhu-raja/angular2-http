import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { User } from "./shared/models/user";
@Component({
  selector: 'my-app',
  template: `
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
  constructor (private http: Http) {

  }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users')
      .subscribe(data => {
        this.users = data.json().data;
      });
  }
}