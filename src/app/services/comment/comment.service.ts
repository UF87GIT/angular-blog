import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comment } from '../../config/types';
import { apiEndpoitsPrefix } from '../../config/config';

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
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message))
      );
  }

  addPostComment (postId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${apiEndpoitsPrefix}posts/${postId}/comments`, comment)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError('An error occurred:', error.error.message))
      );
  }
}