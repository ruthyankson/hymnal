import { Component, Input } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  @Input({required: true}) hymn!: HymnModel;

  /**
   * Constructor to initialize the component with the Angular Router.
   *
   * @param {Router} router - Angular Router for handling navigation.
   */
  constructor(private router: Router) {}


  /**
   * Navigates to the hymn page with the specified hymn number.
   *
   * @param {number} hymnNumber - The number of the hymn to navigate to.
   * @return {void} This function does not return anything.
   */
  navigateToHymn(hymnNumber: number) {
    this.router.navigate(['hymn', hymnNumber]);
  }

}
