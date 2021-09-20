import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsPageComponent } from './pages/posts/posts.page';
import { PostPageComponent } from './pages/post/post.page';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [PostsPageComponent, PostPageComponent, PostItemComponent],
  // keep importing FormsModule (ngModel) / ReactiveFormsModule (formControl) again if using lazy-loading
  imports: [PostsRoutingModule, CoreModule, SharedModule],
})
export class PostsModule {}
