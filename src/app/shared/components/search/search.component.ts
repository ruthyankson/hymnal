import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HymnModel } from '../../models/hymn.model';
import { HYMNS } from '../../constants/hymns';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HymnService } from '../../services/hymn.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

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
  // @Input({required: false}) advanced:boolean = false;
  @Input({required: false}) page_search:boolean = false;
  @Input({required: false}) modal?: ModalComponent;

  @ViewChild('chorusCheckbox') chorusCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('verseCheckbox') verseCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;

  checkedChorus: boolean = false;
  checkedVerse: boolean = false;

  // close_modal: boolean = false;

  hymns: HymnModel[] = HYMNS;
  showInfo: boolean = false;
  yesTerm: boolean = false;

  searchLabel: string = "Hymn search";

  hymns$!: Observable<HymnModel[]>;
  private searchTerms = new Subject<string>();

  constructor(private hymnService: HymnService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    // Set yesTerm to true if there is a term to be searched for or false otherwise
    this.yesTerm = term === '';
  }

  ngOnInit(): void {
    this.searchTerm();
  }

  searchTerm (): void {
    this.hymns$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term - commented to ensure checkboxes work when checked with the same term
      // distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hymnService.searchHymns(term, this.checkedChorus, this.checkedVerse))
    );

    // Show the no such hymns message if there are no results
    this.hymns$.subscribe((h) => {
      this.hymns = h;
      this.showInfo = this.hymns.length === 0 && !this.yesTerm;
    });
  }

  /* Clear search button */
  clearSearch(searchBox: HTMLInputElement) {
    searchBox.value = ''; // Empty input
    this.search(''); // Trigger the search with an empty string to clear results
    this.closeInfo();
  }

  getChorusCheckedValue(currentTerm: string): void {
    this.checkedChorus = this.chorusCheckbox.nativeElement.checked;
    this.search(currentTerm);
  }

  getVerseCheckedValue(currentTerm: string): void {
    this.checkedVerse = this.verseCheckbox.nativeElement.checked;
    this.search(currentTerm);
  }

  closeInfo() {
    this.showInfo = false;
  }

  navigateToHymn(hymnNumber: number) {
    // this.router.navigate(['hymnal/hymn', hymn_number], { queryParams: { id: id } });

    // Navigate to the hymn page and force reload
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`hymnal/hymn`, hymnNumber]);
      this.modal?.close();
    });
  }
}
