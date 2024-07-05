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
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HymnsComponent {
  title = "Hymns";
  hymns: HymnModel[] = [];
  isLoading = true;
  isScrolling = false;

  constructor(protected hymnService: HymnService){}

  ngOnInit(): void  {
    this.getHymns();
  }

  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(0, 25);
        this.isLoading = false;
    });
  }

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
