// src/app/modules/post/post.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { RouterModule, Routes } from '@angular/router';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { CommentListComponent } from 'src/app/components/comment-list/comment-list.component';
import { PostResolver } from 'src/app/resolvers/post.resolver';
const postRoutes: Routes = [
  { path: '', component: PostListComponent  }, // resolve: { posts: PostResolver } // with resolver data is fethced befor the component is loaded, but this aproach is not  rendering spinner 
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
  ]
})
export class PostModule {}
