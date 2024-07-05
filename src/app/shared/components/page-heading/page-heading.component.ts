import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss'
})
export class PageHeadingComponent {
  // Page title from parent component
  @Input({required: true}) pageTitle: string | any;
}
