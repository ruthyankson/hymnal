import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear: number = 2024;

  /**
   * Initializes the component by setting the current year.
   *
   * This function is called when the component is initialized. It sets the `currentYear`
   * property to the current year by creating a new `Date` object and retrieving the year
   * using the `getFullYear()` method.
   *
   * @return {void} This function does not return a value.
   */
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
