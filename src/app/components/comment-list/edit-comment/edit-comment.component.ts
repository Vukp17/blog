// src/app/components/edit-comment/edit-comment.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Comment } from '../../../models/commnet';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent {
  commentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Comment
  ) {
    this.commentForm = new FormGroup({
      id: new FormControl(data?.id ?? null),
      content: new FormControl(data?.content ?? '', Validators.required),
      author: new FormControl(data?.author ?? '', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.commentForm.valid) {
      const comment = this.commentForm.value;
      this.dialogRef.close(comment);
    } else {
      console.error('Form is invalid');
    }
  }
}
