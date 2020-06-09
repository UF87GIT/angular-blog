import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, shareReplay, timeout } from 'rxjs/operators';
import { Post } from '../../config/types';
import { apiEndpoitsPrefix, requestTimeout, requestMaxRetry } from '../../config/config';

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
        timeout(requestTimeout),
        retry(requestMaxRetry),
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message)),
        shareReplay()
      );
  }

  getPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${apiEndpoitsPrefix}posts/${id}`)
      .pipe(
        timeout(requestTimeout),
        retry(requestMaxRetry),
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message)),
        shareReplay()
      );
  }

  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(`${apiEndpoitsPrefix}posts`, post)
      .pipe(
        timeout(requestTimeout),
        retry(requestMaxRetry),
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message)),
        shareReplay()
      );
  }
}
