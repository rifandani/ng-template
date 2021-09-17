import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './pages/posts/posts.page';
import { PostPageComponent } from './pages/post/post.page';

const routes: Routes = [
  { path: '', component: PostsPageComponent },
  { path: ':postId', component: PostPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
