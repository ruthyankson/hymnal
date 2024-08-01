import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnService } from '../../shared/services/hymn.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hymns',
  templateUrl: './hymns.component.html',
  styleUrl: './hymns.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HymnsComponent {

  // Page title
  title = "Hymns";
  // Hymns list
  hymns: HymnModel[] = [];
  // Loading state
  isLoading = true;
  // Scrolling effect
  isScrolling = false;

  /**
   * Constructor to initialize the component with the necessary hymn service.
   *
   * @param {HymnService} hymnService - Service to handle hymn data operations.
   */
  constructor(protected hymnService: HymnService) {}


  /**
   * Initializes the component and calls the `getHymns` method.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void  {
    this.getHymns();
  }

  /**
   * Retrieves the first 25 hymns from the hymn service and updates the component's hymns array.
   * Sets the isLoading flag to false once the hymns have been retrieved.
   *
   * @return {void} This function does not return anything.
   */
  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(0, 25);
        this.isLoading = false;
    });
  }

  /**
   * Loads more hymns asynchronously and updates the component's hymns array.
   *
   * @return {void} This function does not return anything.
   */
  loadMore(): void {
    let hymnsHere: HymnModel[] = [];
    this.isLoading = true;
    this.isScrolling = true;
    // Simulate loading more hymns
    this.hymnService.getHymns()
    .subscribe( (hymns) => {
      hymnsHere = hymns.slice(25, hymns.length);
      setTimeout(() => {
        this.hymns = [...this.hymns, ...hymnsHere];
        // Reset the scrolling effect after a short delay
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      }, 100);
      this.isLoading = false;
    });
  }

  /**
   * Loads fewer hymns asynchronously and updates the component's hymns array.
   *
   * @return {void} This function does not return anything.
   */
  loadLess(): void {
    let hymnsHere: HymnModel[] = [];
    this.isLoading = true;
    this.isScrolling = true;
    // Simulate loading more hymns
    this.hymnService.getHymns()
    .subscribe( (hymns) => {
      hymnsHere = hymns.slice(0, 25);
      setTimeout(() => {
        this.hymns = hymnsHere;
        // Reset the scrolling effect after a short delay
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      }, 100);
      this.isLoading = false;
    });
  }

}
