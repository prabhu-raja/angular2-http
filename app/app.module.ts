import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { appUserRouting } from "./app.routing";

import { UsersComponent } from "./users/users.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";
import { UserService } from "./shared/services/user.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    appUserRouting
  ],
  declarations: [ 
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}