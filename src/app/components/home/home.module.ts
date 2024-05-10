// src/app/components/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostModule } from '../post-list/post.module'; // Import PostModule
import{MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
const homeRoutes: Routes = [
    { path: '', component: HomeComponent  },  // with resolver data is fethced befor the component is loaded, but this aproach is not  rendering spinner 
  ];
@NgModule({
  declarations: [HomeComponent], // Declare HomeComponent
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(homeRoutes), // Using router module forChild method
  ],
})
export class HomeModule {}
