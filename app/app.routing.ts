import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserCreateComponent } from "./users/user-create/user-create.component";

export const appUserRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: 'create',
                component: UserCreateComponent
            },
            {
                path: ':userId',
                component: UserSingleComponent
            },
            {
                path: ':userId/edit',
                component: UserEditComponent
            }
        ]
    }
];

export const appUserRouting: ModuleWithProviders = RouterModule.forRoot(appUserRoutes);