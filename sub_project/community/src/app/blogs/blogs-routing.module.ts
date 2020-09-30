import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogsComponent} from './blogs/blogs.component';

/*Notice that these paths don’t contain a prefix of blogs,
  because we already defined that prefix in our lazy load route definition.
  These routes are simple in that they map to a component to render.*/
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
