import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '@modules/posts/interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItemComponent implements OnInit {
  @Input() post!: Post;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToDetailPost(postId: number): void {
    this.router.navigate([postId], {
      relativeTo: this.route,
    });
  }
}
