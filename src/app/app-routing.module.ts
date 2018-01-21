import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';

const routes: Routes = [
    {path: '', loadChildren: 'app/front-page/front-page.module#FrontPageModule'},
    {path: 'login', component: LoginPageComponent},
    {path: 'admin', loadChildren: 'app/admin-page/admin-page.module#AdminPageModule', canActivate: [AdminGuard]},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}