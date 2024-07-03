import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear: number = 2024;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
