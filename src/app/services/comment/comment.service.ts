import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, shareReplay, timeout } from 'rxjs/operators';
import { Comment } from '../../config/types';
import { apiEndpoitsPrefix, requestTimeout, requestMaxRetry } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${apiEndpoitsPrefix}posts/${postId}/comments`)
      .pipe(
        timeout(requestTimeout),
        retry(requestMaxRetry),
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message)),
        shareReplay()
      );
  }

  addPostComment (postId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${apiEndpoitsPrefix}posts/${postId}/comments`, comment)
      .pipe(
        timeout(requestTimeout),
        retry(requestMaxRetry),
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message)),
        shareReplay()
      );
  }
}