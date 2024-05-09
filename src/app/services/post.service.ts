// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { faker } from '@faker-js/faker';

import { Post } from '../models/posts';
import { Comment } from '../models/commnet';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private comments: Comment[] = [];

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    for (let i = 0; i < 10; i++) {
      this.posts.push({
        id: i,
        post_title: faker.lorem.sentence(),
        author: faker.person.fullName(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    this.posts.forEach((post) => {
      for (let j = 0; j < 3; j++) {
        this.comments.push({
          id: j + 1,
          post_id: post.id,
          content: faker.lorem.sentence(),
          author: faker.person.fullName(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }
    });
  }

  getPosts(): Observable<Post[]> {
    return of(this.posts).pipe(delay(1000));
  }

  getComments(postId: number): Observable<Comment[]> {
    return of(this.comments.filter(c => c.post_id === postId));
  }

  updatePost(post: Post): Observable<void> {
    const index = this.posts.findIndex(p => p.id === post.id);
    if (index !== -1) {
      this.posts[index] = post;
    }
    return of(undefined);
  }

  addPost(post: Post): Observable<void> {
    this.posts.push(post);
    return of(undefined);
  }

  updateComment(comment: Comment): Observable<void> {
    const index = this.comments.findIndex(c => c.id === comment.id);
    if (index !== -1) {
      this.comments[index] = comment;
    }
    return of(undefined);
  }

  addComment(comment: Comment): Observable<void> {
    this.comments.push(comment);
    return of(undefined);
  }
}
