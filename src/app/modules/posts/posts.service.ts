import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { LoggerService } from '@core/services/logger.service';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private BASE_URL: string = `${environment.apiUrl}/posts`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private logger: LoggerService) {}

  /** POST: add a new post to the server */
  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL, post, this.httpOptions).pipe(
      tap((newPost: Post) => this.logger.info(`added post id=${newPost.id}`)), // Used to perform side-effects for notifications from the source observable
      catchError(this.handleError<Post>('postPost'))
    );
  }

  /** GET posts */
  getPosts(): Observable<Post[]> {
    const GET_POSTS_URL = `${this.BASE_URL}?_limit=10`;

    return this.http.get<Post[]>(GET_POSTS_URL).pipe(
      tap((_) => this.logger.info('fetched posts')),
      catchError(this.handleError<Post[]>('getPosts', []))
    );
  }

  /** GET post by id. Will 404 if id not found */
  getPostById(postId: number): Observable<Post> {
    const GET_POST_BY_ID_URL = `${this.BASE_URL}/${postId}`;

    return this.http.get<Post>(GET_POST_BY_ID_URL).pipe(
      take(1), // will auto unsubscribe
      tap((_) => this.logger.info(`fetched post id=${postId}`)),
      catchError(this.handleError<Post>(`getHero id=${postId}`))
    );
  }

  /** PUT post by id */
  putPost(post: Post): Observable<any> {
    const postId = post.id;
    const PUT_POST_URL = `${this.BASE_URL}/${postId}`;

    return this.http.put(PUT_POST_URL, post, this.httpOptions).pipe(
      tap((_) => this.logger.info(`updated post id=${postId}`)),
      catchError(this.handleError<any>(`putPost id=${postId}`))
    );
  }

  /** DELETE: delete the post by id from the server */
  deletePostById(postId: number): Observable<Post> {
    const DELETE_POST_BY_ID = `${this.BASE_URL}/${postId}`;

    return this.http.delete<Post>(DELETE_POST_BY_ID, this.httpOptions).pipe(
      tap((_) => this.logger.info(`deleted post id=${postId}`)),
      catchError(this.handleError<Post>(`deletePostById id=${postId}`))
    );
  }

  /**
   * Intercepts an Observable that failed. The operator then passes the error to the error handling function.
   * Reports the error and then returns an innocuous result so that the application keeps working.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send the error to remote logging infrastructure. In this case just local
      this.logger.error(`${operation} failed: `, error.message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
