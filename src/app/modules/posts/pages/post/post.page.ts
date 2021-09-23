import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from '@modules/posts/interfaces/post.interface';
import { PostsService } from '@modules/posts/posts.service';

@Component({
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  subs$?: Subscription;
  postId: string = '';
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    const sub1$ = this.route.params.subscribe((params) => {
      /* --------------- example: http:localhost:4200/posts/2?query=abc&query2=zzzzzzzz --------------- */
      // params === {"postId":"2"}
      // paramMap === {"params":{"postId":"2"}}
      // queryParams === {"query":"abc","query2":"zzzzzzzz"}
      // queryParamMap === {"params":{"query":"abc","query2":"zzzzzzzz"}}

      this.postId = params.postId;

      // already unsubsribed by take()
      this.postsService
        .getPostById(+this.postId)
        .subscribe((post) => (this.post = post));
    });

    this.subs$?.add(sub1$);
  }

  ngOnDestroy() {
    // unsubscribe all subscriptions
    this.subs$?.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
