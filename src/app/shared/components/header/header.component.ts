import { Component } from '@angular/core';
import { APP_NAME } from '../../constants/global-vars';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  app_name: string = APP_NAME;
}
