import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogsComponent} from './blogs/blogs.component';

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: ':post_id', component: BlogComponent}
];
/*this module config route for module*/
/*ng generate module blogs --routing*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {
}
