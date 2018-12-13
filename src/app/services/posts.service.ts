import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  postSubject = new Subject<Post[]>();
  posts: Post[] = [];

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() || [];
        this.emitPosts();
      });
  }

  addLikes(index: number) {
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  addDislike(index: number) {
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }
}
