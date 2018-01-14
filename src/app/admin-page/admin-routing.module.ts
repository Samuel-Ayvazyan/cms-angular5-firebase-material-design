import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    { 
        path: "",
        component: AdminPageComponent,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent
            },
            {
                path: "menus",
                component: MenusComponent
            },
            {
                path: "posts",
                component: PostsComponent
            },
            {
                path: "",
                redirectTo: "dashboard"
            },
            {
                path: "**",
                redirectTo: "dashboard"
            }
        ]
    }
]

export const AdminRoutingModule = RouterModule.forChild(routes);