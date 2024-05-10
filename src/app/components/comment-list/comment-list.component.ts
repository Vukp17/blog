// src/app/components/comment-list/comment-list.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Comment } from '../../models/commnet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() postId!: number;
  comments: Comment[] = [];

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.postService.getComments(this.postId).subscribe((data) => {
      this.comments = data;
    });
  }

  editComment(comment: Comment) {
    const dialogRef = this.dialog.open(EditCommentComponent, {
      data: comment,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.post_id = this.postId;  
        this.postService.updateComment(result).subscribe(() => {
          this.snackBar.open('Comment updated', 'Close', {
            duration: 2000,
          });
          this.loadComments();
        });
      }
    });
  }

  addComment(postId: number) {
    const dialogRef = this.dialog.open(EditCommentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.post_id = postId;  
        this.postService.addComment(result).subscribe(() => {
          this.snackBar.open('Comment added', 'Close', {
            duration: 2000,
          });
          this.loadComments();
        });
      }
    });
  }
}
