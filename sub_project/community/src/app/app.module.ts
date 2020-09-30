import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ForumsModule} from './forums/forums.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {ChatListComponent} from './chat-list/chat-list.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {UserService} from './services/user.service';
import {RouterModule, Routes} from '@angular/router';
import {ClarityModule} from 'clarity-angular';
import {AuthGuardService} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  /*for secondary route*/
  /*This will show a list of user who you can chat with*/
  /*I also  placed these routes before the redirect and wildcard routes, because those are meant to
  act like fallback routes*/
  {path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuardService]},
  /*This will be the chat experience with another user*/
  {path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuardService]},
  /*for lazy load module*/
  {path: 'blogs', loadChildren: 'app/blogs/blogs.module#BlogsModule'},
  /*fallback route*/
  {path: '', redirectTo: '/forums', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    /*define root of routes*/
    RouterModule.forRoot(appRoutes),
    ForumsModule,
    ClarityModule.forRoot(),
  ],
  providers: [
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
