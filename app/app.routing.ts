import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserListComponent } from "./users/user-list/user-list.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";

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
        //     {
        //         path: 'create',
        //         component: UserCreateComponent
        //     },
            {
                path: ':userId',
                component: UserSingleComponent
            }
        //     {
        //         path: ':id/edit',
        //         component: UserEditComponent
        //     }
        ]
    }
];

export const appUserRouting: ModuleWithProviders = RouterModule.forRoot(appUserRoutes);