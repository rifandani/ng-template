import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import POSTS from '@modules/posts/mocks/posts.mock';
import { Post } from '@modules/posts/interfaces/Post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css'],
})
export class PostsPageComponent implements OnInit {
  posts = POSTS;
  selectedPost?: Post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  postById(_index: number, post: Post): number {
    return post.id;
  }

  onSelectPost(post: Post): void {
    this.selectedPost = post;
  }

  goToDetailPost(postId: number): void {
    this.router.navigate([postId], {
      relativeTo: this.route,
    });
  }
}
