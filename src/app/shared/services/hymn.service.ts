import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HymnModel } from '../models/hymn.model';
import { MessageService } from './message.service';
import { UUID } from 'crypto';
import { HYMNS } from '../constants/hymns';

@Injectable({
  providedIn: 'root'
})
export class HymnService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private hymnsUrl = 'api/hymns'; // URL to web api
  hymns: HymnModel[] = HYMNS;

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
      // console.error(error);

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

  // getHymn(hymn_number: number): Observable<HymnModel> {
  //   const url = `${this.hymnsUrl}/${hymn_number}`;
  //   return this.http.get<HymnModel>(url).pipe(
  //     tap(_ => this.log(`Fetched hymn hymn_number=${hymn_number}`)),
  //     catchError(this.handleError<HymnModel>(`getHymn hymn_number=${hymn_number}`))
  //   );
  // }

  // Get hymn from inmemory data
  getHymn(id: number): Observable<HymnModel> {
    const url = `${this.hymnsUrl}/${id}`;
    return this.http.get<HymnModel>(url).pipe(
      tap(_ => this.log(`Fetched hymn id = ${id}`)),
      catchError(this.handleError<HymnModel>(`getHymn id = ${id}`))
    );
  }

  /** GET: Get a specific hymn by id from the hardcoded array */
  // getHymn(id: number): Observable<HymnModel | undefined> {
  //   const hymn = this.hymns.find(h => h.id === id);
  //   return of(hymn).pipe(
  //     tap(foundHymn => foundHymn ?
  //       this.log(`Fetched hymn id=${id}`) :
  //       this.log(`Hymn id=${id} not found`)
  //     ),
  //     catchError(this.handleError<HymnModel>(`getHymn id=${id}`))
  //   );
  // }


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

  /** Helper function to normalize apostrophes */
  private normalizeApostrophes(input: string): string {
    return input.replace(/’/g, "'").replace(/‘/g, "'");
  }

  /* GET hymns whose name contains search term */
 searchHymns(term: string, chorus?:boolean, verse?:boolean): Observable<HymnModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hymn array.
      return of([]);
    }

    const normalizedTerm = this.normalizeApostrophes(term.toLowerCase());

    if (chorus && !verse) {
      return this.searchChorus(normalizedTerm);
    } else if (verse && !chorus) {
      return this.searchStanzas(normalizedTerm);
    } else if (chorus && verse) {
      return this.searchCombinedChorusAndStanzas(normalizedTerm);
    } else {
      return this.getHymns().pipe(
        map(hymns => hymns.filter(hymn => this.normalizeApostrophes(hymn.title.toLowerCase()).includes(normalizedTerm))),
        tap(x => x.length ?
          this.log(`Found hymns matching "${term}"`) :
          this.log(`No such hymn "${term}"`)),
        catchError(this.handleError<HymnModel[]>('searchHymns', []))
      );
    }
  }

  searchChorus(term: string): Observable<HymnModel[]> {
    return this.http.get<HymnModel[]>(this.hymnsUrl).pipe(
      map(hymns => hymns.filter(hymn =>
        hymn.chorus && this.normalizeApostrophes(hymn.chorus.refrain.toLowerCase()).includes(term)
      )),
      tap(x => x.length ?
        this.log(`Found hymns containing the term "${term}" in the chorus`) :
        this.log(`No hymn contains the term "${term}" in the chorus`)),
      catchError(this.handleError<HymnModel[]>('searchHymns', []))
    );
  }

  searchStanzas(term: string): Observable<HymnModel[]> {
    return this.http.get<HymnModel[]>(this.hymnsUrl).pipe(
      map(hymns => hymns.filter(hymn =>
        hymn.stanzas.some(stanza => this.normalizeApostrophes(stanza.verse.toLowerCase()).includes(term))
      )),
      tap(x => x.length ?
        this.log(`Found hymns containing the term "${term}"`) :
        this.log(`No hymn contains the term "${term}"`)),
      catchError(this.handleError<HymnModel[]>('searchHymns', []))
    );
  }

  searchCombinedChorusAndStanzas(term: string): Observable<HymnModel[]> {
    return forkJoin([this.searchChorus(term), this.searchStanzas(term)]).pipe(
      map(([chorusResults, stanzaResults]) => {
        const combinedResults = [...chorusResults, ...stanzaResults];
        const uniqueResults = combinedResults.filter((hymn, index, self) =>
          index === self.findIndex(h => h.id === hymn.id)
        );
        return uniqueResults;
      }),
      tap(x => x.length ?
        this.log(`Found hymns containing the term "${term}" in the chorus or stanzas`) :
        this.log(`No hymn contains the term "${term}" in the chorus or stanzas`)),
      catchError(this.handleError<HymnModel[]>('searchHymns', []))
    );
  }
}
