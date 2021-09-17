import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService } from '@core/services/logger.service';
import { Post } from '@modules/posts/interfaces/Post.interface';
import POSTS from '@modules/posts/mocks/posts.mock';

@Component({
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.css'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  postId: string = '';
  post?: Post;

  constructor(
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* --------------- example: http:localhost:4200/posts/2?query=abc&query2=zzzzzzzz --------------- */
    this.route.params.subscribe((params) => {
      // params === {"postId":"2"}
      this.logger.info('params: ', params);

      this.postId = params.postId;
      this.post = POSTS.find((post) => post.id === +params.postId);
    });

    this.route.paramMap.subscribe((paramMap) => {
      // paramMap === {"params":{"postId":"2"}}
      this.logger.info('paramMap: ', paramMap);
    });

    this.route.queryParams.subscribe((queryParams) => {
      // queryParams === {"query":"abc","query2":"zzzzzzzz"}
      this.logger.info('queryParams: ', queryParams);
    });

    this.route.queryParamMap.subscribe((queryParamMap) => {
      // queryParamMap === {"params":{"query":"abc","query2":"zzzzzzzz"}}
      this.logger.info('queryParamMap: ', queryParamMap);
    });
  }

  ngOnDestroy() {
    // unsubscribe
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
