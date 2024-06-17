import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HymnModel } from '../models/hymn.model';
import { MessageService } from './message.service';
import { UUID } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class HymnsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private hymnsUrl = 'api/hymns';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HymnsService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HymnsService: ${message}`);
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET: Get hymns from the server */
  getHymns(): Observable<HymnModel[]> {
    return this.http.get<HymnModel[]>(this.hymnsUrl)
      .pipe(
        tap(_ => this.log('Fetched hymns')),
        catchError(this.handleError<HymnModel[]>('getHymns', []))
      );
  }

  getHymn(id: UUID): Observable<HymnModel> {
    const url = `${this.hymnsUrl}/{id}`;
    return this.http.get<HymnModel>(url).pipe(
      tap(_ => this.log(`Fetched hymn id=${id}`)),
      catchError(this.handleError<HymnModel>(`getHymn id=${id}`))
    );
  }

  /** PUT: update the hymn on the server */
  // updateHymn(hymn: HymnModel): Observable<any> {
  //   return this.http.put(this.hymnsUrl, hymn, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hymn id=${hymn.id}`)),
  //     catchError(this.handleError<any>('updateHymn'))
  //   );
  // }

  /** POST: add a new hymn to the server */
  // addHymn(hymn: HymnModel): Observable<HymnModel> {
  //   return this.http.post<HymnModel>(this.hymnsUrl, hymn, this.httpOptions).pipe(
  //     tap((newHymn: HymnModel) => this.log(`added hymn w/ id=${newHymn.id}`)),
  //     catchError(this.handleError<HymnModel>('addHymn'))
  //   );
  // }

  /** DELETE: delete the hymn from the server */
  // deleteHymn(id: number): Observable<HymnModel> {
  //   const url = `${this.hymnsUrl}/${id}`;

  //   return this.http.delete<HymnModel>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hymn id=${id}`)),
  //     catchError(this.handleError<HymnModel>('deleteHymn'))
  //   );
  // }

  /* GET hymns whose name contains search term */
  searchHymnes(term: string): Observable<HymnModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hymn array.
      return of([]);
    }
    return this.http.get<HymnModel[]>(`${this.hymnsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found hymnes matching "${term}"`) :
        this.log(`no hymnes matching "${term}"`)),
      catchError(this.handleError<HymnModel[]>('searchHymnes', []))
    );
  }
}
