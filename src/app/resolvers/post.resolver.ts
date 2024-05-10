import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]|null> {
  constructor(private postService: PostService,private router: Router) {}  
  resolve(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]|null> {
    return this.postService.getPosts().pipe(
      catchError((error) => {
          console.error(error);
          this.router.navigate(['/error']);
          return of(null);
        })
    );

  }
}
