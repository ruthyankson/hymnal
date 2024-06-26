import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HymnModel } from '../../models/hymn.model';
import { HYMNS } from '../../constants/hymns';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HymnService } from '../../services/hymn.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          animate('5s ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class SearchComponent {
  hymns: HymnModel[] = HYMNS;
  hymnNumber?: string;
  id?: string;

  searchLabel: string = "Search for a hymn"

  hymns$!: Observable<HymnModel[]>;
  private searchTerms = new Subject<string>();

  constructor(private hymnService: HymnService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // navigateToHymn(hymn_number: number, id: string) {
  //   this.router.navigate(['hymnal/hymn', hymn_number], { queryParams: { id: id } });
  // }

  ngOnInit(): void {
    this.hymns$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hymnService.searchHymns(term)),
    );
  }

  /* Clear search button */
  clearSearch(searchBox: HTMLInputElement) {
    searchBox.value = ''; // Empty input
    this.search(''); // Trigger the search with an empty string to clear results
  }
}
