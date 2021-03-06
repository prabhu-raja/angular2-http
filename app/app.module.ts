import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { appUserRouting } from "./app.routing";

import { UsersComponent } from "./users/users.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserCreateComponent } from "./users/user-create/user-create.component";
import { UserService } from "./shared/services/user.service";

import { LoginComponent } from "./login/login.component";
import { AuthService } from './shared/services/auth.service';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

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
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent,
    LoginComponent
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}