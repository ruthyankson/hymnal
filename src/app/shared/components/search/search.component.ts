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
  /**
   * Indicates whether the search is performed from the page.
   * This input is optional.
   */
  @Input({required: false}) page_search: boolean = false;

  /**
   * Reference to the modal component, used for displaying the modal.
   * This input is optional.
   */
  @Input({required: false}) modal?: ModalComponent;

  /**
   * ViewChild reference to the chorus checkbox element.
   */
  @ViewChild('chorusCheckbox') chorusCheckbox!: ElementRef<HTMLInputElement>;

  /**
   * ViewChild reference to the verse checkbox element.
   */
  @ViewChild('verseCheckbox') verseCheckbox!: ElementRef<HTMLInputElement>;

  /**
   * ViewChild reference to the all checkbox element.
   */
  @ViewChild('allCheckbox') allCheckbox!: ElementRef<HTMLInputElement>;

  /**
   * ViewChild reference to the search box input element.
   */
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;

  /**
   * Indicates whether the chorus checkbox is checked.
   */
  checkedChorus: boolean = false;

  /**
   * Indicates whether the verse checkbox is checked.
   */
  checkedVerse: boolean = false;

  /**
   * Indicates whether the all checkbox is checked.
   */
  checkedAll: boolean = false;

  /**
   * List of hymns available in the application.
   */
  hymns: HymnModel[] = HYMNS;

  /**
   * Indicates whether the information message should be shown.
   */
  showInfo: boolean = false;

  /**
   * Indicates whether there is a search term present.
   */
  yesTerm: boolean = false;

  /**
   * Label for the search box.
   */
  searchLabel: string = "Hymn search";

  /**
   * Observable stream of hymns resulting from the search.
   */
  hymns$!: Observable<HymnModel[]>;

  /**
   * Subject to manage the search terms entered by the user.
   */
  private searchTerms = new Subject<string>();

  /**
   * Constructor to initialize the search component with necessary services.
   *
   * @param {HymnService} hymnService - Service to handle hymn data.
   * @param {Router} router - Angular Router for navigation.
   */
  constructor(private hymnService: HymnService, private router: Router) {}


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    // Set yesTerm to true if there is a term to be searched for or false otherwise
    this.yesTerm = term === '';
  }

  /**
   * Initializes the component and calls the `searchTerm` method.
   *
   * This method is called automatically by Angular when the component is initialized.
   * It is responsible for setting up the initial state of the component and performing any necessary initialization tasks.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void {
    this.searchTerm();
  }

  /**
   * Sets up an observable stream to search for hymns based on the user's input.
   * The stream waits 300ms after each keystroke before considering the term.
   * The stream switches to a new search observable each time the term changes.
   * If there are no results, shows a message indicating that no hymns were found.
   *
   * @return {void} This function does not return anything.
   */
  searchTerm (): void {
    this.hymns$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term - commented to ensure checkboxes work when checked with the same term
      // distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hymnService.searchHymns(term, this.checkedChorus, this.checkedVerse, this.checkedAll))
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

  /**
   * Updates the value of `checkedChorus` based on the checked state of `chorusCheckbox`
   * and triggers a search with the given `currentTerm`.
   *
   * @param {string} currentTerm - The term to search for.
   * @return {void} This function does not return anything.
   */
  getChorusCheckedValue(currentTerm: string): void {
    this.checkedChorus = this.chorusCheckbox.nativeElement.checked;
    this.search(currentTerm);
  }

  /**
   * Updates the value of `checkedVerse` based on the checked state of `verseCheckbox`
   * and triggers a search with the given `currentTerm`.
   *
   * @param {string} currentTerm - The term to search for.
   * @return {void} This function does not return anything.
   */
  getVerseCheckedValue(currentTerm: string): void {
    this.checkedVerse = this.verseCheckbox.nativeElement.checked;
    this.search(currentTerm);
  }

  /**
   * Updates the value of `checkedAll` based on the checked state of `allCheckbox`
   * and triggers a search with the given `currentTerm`.
   *
   * @param {string} currentTerm - The term to search for.
   * @return {void} This function does not return anything.
   */
  getAllCheckedValue(currentTerm: string) {
    this.checkedAll = this.allCheckbox.nativeElement.checked;
    this.search(currentTerm);
  }

  /**
   * Closes the information by setting the `showInfo` property to `false`.
   */
  closeInfo() {
    this.showInfo = false;
  }

  /**
   * Navigates to the hymn page and force reloads the current page.
   *
   * @param {number} hymnNumber - The number of the hymn to navigate to.
   * @return {void} This function does not return anything.
   */
  navigateToHymn(hymnNumber: number) {
    // this.router.navigate(['hymnal/hymn', hymn_number], { queryParams: { id: id } });

    // Navigate to the hymn page and force reload
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`hymn`, hymnNumber]);
      this.modal?.close();
    });
  }
}
