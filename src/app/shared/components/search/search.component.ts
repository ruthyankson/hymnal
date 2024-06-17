import { Component } from '@angular/core';
import { HymnModel } from '../../models/hymn.model';
import { HYMNS } from '../../constants/hymns';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HymnsService } from '../../services/hymns.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  hymns: HymnModel[] = HYMNS;

  searchLabel: string = "Search for a hymn"

  hymns$!: Observable<HymnModel[]>;
  private searchTerms = new Subject<string>();

  constructor(private hymnsService: HymnsService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.hymns$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hymnsService.searchHymns(term)),
    );
  }
}
