import { Component } from '@angular/core';
import { HymnModel } from '../../models/hymn.model';
import { HYMNS } from '../../constants/hymns';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  hymns: HymnModel[] = HYMNS;

  // heroes$!: Observable<Hero[]>;
  // private searchTerms = new Subject<string>();

  // constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    // this.searchTerms.next(term);
  }

  // ngOnInit(): void {
  //   this.heroes$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),

  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),

  //     // switch to new search observable each time the term changes
  //     switchMap((term: string) => this.heroService.searchHeroes(term)),
  //   );
  // }
}
