import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from 'clarity-angular';

import {ForumComponent} from './forum/forum.component';
import {ForumsComponent} from './forums/forums.component';
import {ThreadComponent} from './thread/thread.component';
import {ThreadsComponent} from './threads/threads.component';

import {ForumsService} from './services/forums.service';
import {RouterModule, Routes} from '@angular/router';

const forumsRoutes: Routes = [
  {
    path: 'forums', component: ForumsComponent
  },
  {
    path: 'forums/:forum_alias', component: ForumComponent,
    children: [
      {path: '', component: ThreadsComponent},
      {path: ':thread_alias', component: ThreadComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ForumComponent,
    ForumsComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // tslint:disable-next-line:max-line-length
    /*Here we use forChild() instead of forRoot() , because we’re declaring routes that belong to an imported module instead of the main App module*/
    RouterModule.forChild(forumsRoutes),
    ClarityModule.forChild(),
  ],
  providers: [
    ForumsService
  ]
})
export class ForumsModule {
}
