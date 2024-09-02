import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-section',
  templateUrl: './more-section.component.html',
  styleUrl: './more-section.component.scss'
})
export class MoreSectionComponent {

  @Input() moreText!: string;
  @Input() moreImg!: string;

}
