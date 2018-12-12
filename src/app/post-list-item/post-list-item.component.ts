import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated: Date;
  @Input() indexOfPost: number;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onLike() {
    this.postsService.addLikes(this.indexOfPost);
  }

  onDislike() {
    this.postsService.addDislike(this.indexOfPost);
  }


  onRemove() {
    this.postsService.removePost(this.indexOfPost);
  }
}
