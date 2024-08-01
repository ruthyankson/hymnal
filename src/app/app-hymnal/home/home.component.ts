import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnService } from '../../shared/services/hymn.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

  // Hymns list
  hymns: HymnModel[] = [];
  // Loading state
  isLoading = true;

  /**
   * Constructs a new instance of the HomeComponent class.
   *
   * @param {HymnService} hymnService - The injected HymnService.
   * @param {Router} router - The injected Router.
   */
  constructor(
    protected hymnService: HymnService,
    private router: Router
  ){}

  /**
   * Initializes the component after Angular has initialized all data-bound properties.
   * Calls the `getHymns` method to fetch hymns data.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void  {
    this.getHymns();
  }

  /**
   * Retrieves the first six hymns from the hymn service and updates the component's hymns array.
   * Also sets the isLoading flag to false and logs the title of the 160th hymn in lowercase.
   *
   * @return {void} This function does not return anything.
   */
  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(0, 6);
        this.isLoading = false;
        console.log(hymns[159].title.toLowerCase());
    });
  }

  /**
   * Navigates to the 'hymns' route using the Angular Router.
   *
   * @return {void} This function does not return anything.
   */
  moreHymns(): void {
    this.router.navigate(['hymns']);
  }
}
