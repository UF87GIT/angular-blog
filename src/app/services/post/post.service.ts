import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../../config/types';
import { apiEndpoitsPrefix } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${apiEndpoitsPrefix}posts`)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message))
      );
  }

  getPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${apiEndpoitsPrefix}posts/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message))
      );
  }

  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(`${apiEndpoitsPrefix}posts`, post)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message))
      );
  }
}
