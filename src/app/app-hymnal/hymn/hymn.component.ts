import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HymnService } from '../../shared/services/hymn.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { StanzaModel } from '../../shared/models/stanza.model';

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.component.html',
  styleUrl: './hymn.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HymnComponent {

  // Single hymn
  hymnHere?: HymnModel;
  // Loading state
  isLoading = true;

  /**
   * Constructs a new instance of the class.
   *
   * @param {ActivatedRoute} route - The injected ActivatedRoute.
   * @param {HymnService} hymnService - The injected HymnService.
   * @param {Router} router - The injected Router.
   */
  constructor(
    private route: ActivatedRoute,
    private hymnService: HymnService,
    private router: Router,
  ) {}

  /**
   * Initializes the component and calls the `getHymn` method.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void {
    this.getHymn();
  }

  /**
   * Fetches a hymn from the server based on the hymn number provided in the route parameters.
   *
   * @return {void} This function does not return anything.
   */
  getHymn(): void {
    const hymnNumber = Number(this.route.snapshot.paramMap.get('hymn_number'));
    if (hymnNumber) {
      this.hymnService.getHymn(hymnNumber).subscribe((hymn) => {
        this.hymnHere = hymn;
        this.isLoading = false;
      });
    }
  }

  /**
   * Formats the given text by calling the `formatText` method if the text is not undefined.
   *
   * @param {string | undefined} text - The text to be formatted.
   * @return {string} The formatted text, or an empty string if the text is undefined.
   */
  formatUndefinedPossibleText(text: string | undefined): string {
    if (text) {
      return this.formatText(text);
    }
    return "";
  }

  /**
   * Replaces all newline characters in the given text with HTML line break tags.
   *
   * @param {string} text - The text to format.
   * @return {string} The formatted text with line breaks replaced by HTML line break tags.
   */
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  stanzasWithoutCurrent(stanza_id: string): StanzaModel[] | undefined {
    let otherStanzas: StanzaModel[] | undefined;
    otherStanzas = this.hymnHere?.stanzas.filter(stanza => stanza.id === (stanza_id));
    console.log(otherStanzas);
    return otherStanzas;
  }

  // stanzasWithoutCurrent(stanza_id: string): StanzaModel[] | undefined {
  //   return this.hymnHere?.stanzas.filter(stanza => stanza.id !== stanza_id);
  // }


  /**
   * Navigates back to the 'hymns' route using the Angular Router.
   *
   * @return {void} This function does not return anything.
   */
  goBack(): void {
    this.router.navigate(['hymns']);
  }

}
