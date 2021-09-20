import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import POSTS from '@modules/posts/mocks/posts.mock';
import { Post } from '@modules/posts/interfaces/post.interface';
import { PostsService } from '@modules/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css'],
})
export class PostsPageComponent implements OnInit {
  posts$?: Observable<Post[]>;
  selectedPost?: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    const posts$ = this.postsService.getPosts();
    this.posts$ = posts$;
  }

  // trackBy like React key
  postById(_index: number, post: Post): number {
    return post.id;
  }

  onSelectPost(post: Post): void {
    this.selectedPost = post;
  }
}
