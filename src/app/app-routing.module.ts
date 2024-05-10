import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'posts',
    loadChildren: () => import('./components/post-list/post.module').then(m => m.PostModule), //example with layz loading
  },
  { path: 'about', component: AboutComponent }, //  example with eager loading
  { path:'home', loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
