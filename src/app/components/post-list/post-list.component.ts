// src/app/components/post-list/post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/posts';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;
  currentPage = 1;
  postsPerPage = 5;
  currentPostId: number | null = null;

  constructor(
    private postService: PostService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.isLoading = false;
    });
  }

  getPagedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.postsPerPage;
    const end = this.currentPage * this.postsPerPage;
    return this.posts.slice(start, end);
  }

  editPost(post: Post) {
    const dialogRef = this.dialog.open(EditPostComponent, {
      data: post,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postService.updatePost(result).subscribe(() => {
          this.snackBar.open('Post updated', 'Close', {
            duration: 2000,
          });
          this.loadPosts();
        });
      }
    });
  }

  addPost() {
    const dialogRef = this.dialog.open(EditPostComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postService.addPost(result).subscribe(() => {
          this.snackBar.open('Post added', 'Close', {
            duration: 2000,
          });
          this.loadPosts();
        });
      }
    });
  }
  toggleComments(postId: number) {
    if (this.currentPostId === postId) {
      this.currentPostId = null;
    } else {
      this.currentPostId = postId;
    }
  }
}
