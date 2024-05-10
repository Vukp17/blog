// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './components/about/about.component';
import {MatCardModule} from '@angular/material/card';
import { HomeModule } from './components/home/home.module';
import { PostModule } from './components/post-list/post.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        EditPostComponent,
        EditCommentComponent,
        NavbarComponent,
        AboutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [EditPostComponent, EditCommentComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatToolbarModule,
        AppRoutingModule,
        MatInputModule,
        MatCardModule,
        HomeModule,
        PostModule,
        MatIconModule
        ]
})
export class AppModule {}
