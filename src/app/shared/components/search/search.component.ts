import { Component } from '@angular/core';
import { HymnModel } from '../../models/hymn.model';
import { HYMNS } from '../../constants/hymns';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HymnService } from '../../services/hymn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  hymns: HymnModel[] = HYMNS;
  hymnNumber?: string;
  id?: string;

  searchLabel: string = "Search for a hymn"

  hymns$!: Observable<HymnModel[]>;
  private searchTerms = new Subject<string>();

  constructor(private hymnService: HymnService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  navigateToHymn(hymn_number: number, id: string) {
    this.router.navigate(['hymnal/hymn', hymn_number], { queryParams: { id: id } });
  }

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
}
