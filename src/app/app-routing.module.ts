import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule), //example with layz loading
  },
  { path: 'about', component: AboutComponent }, //  example with eager loading
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
