import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  postSubject = new Subject<Post[]>();
  posts: Post[] = [
    {
      title:      'First',
      content:    'In tincidunt nisl eget ligula.',
      loveIts:    1,
      created_at: new Date()
    },
    {
      title:      'Second',
      content:    'In tincidunt nisl eget ligula.',
      loveIts:    0,
      created_at: new Date()
    },
    {
      title:      'Third',
      content:    'In tincidunt nisl eget ligula.',
      loveIts:    -1,
      created_at: new Date()
    }
  ];

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addLikes(index: number) {
    this.posts[index].loveIts++;
  }

  addDislike(index: number) {
    this.posts[index].loveIts--;
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPosts();
  }
}
