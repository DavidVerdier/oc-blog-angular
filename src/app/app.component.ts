import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.posts;
  }
}
