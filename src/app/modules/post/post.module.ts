// src/app/modules/post/post.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { CommentListComponent } from 'src/app/components/comment-list/comment-list.component';
const postRoutes: Routes = [
  { path: '', component: PostListComponent }, 
];

@NgModule({
  declarations: [
    PostListComponent, 
    CommentListComponent,

  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(postRoutes), // Using router module forChild method
  ],
})
export class PostModule {}
