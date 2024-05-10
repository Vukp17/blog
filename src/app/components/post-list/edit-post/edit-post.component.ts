// src/app/components/edit-post/edit-post.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  postForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {
    this.postForm = new FormGroup({
      id: new FormControl(data?.id ?? null),
      post_title: new FormControl(data?.post_title ?? '', Validators.required),
      author: new FormControl(data?.author ?? '', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.postForm.valid) {
      const post = this.postForm.value;
      this.dialogRef.close(post);
    } else {
      console.error('Form is invalid');
    }
  }
}
