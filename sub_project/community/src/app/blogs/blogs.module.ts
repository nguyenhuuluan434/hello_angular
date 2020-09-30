import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogsComponent} from './blogs/blogs.component';
import {BlogComponent} from './blog/blog.component';

import {BlogsService} from './services/blogs.service';
import {BlogsRoutingModule} from './blogs-routing.module';

/*const blogsRoutes: Routes = [
  {
    path: 'blogs', component: BlogsComponent
  }
];*/

@NgModule({
  imports: [
    CommonModule,
    /*RouterModule.forChild(blogsRoutes),*/
    BlogsRoutingModule
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule {
}
