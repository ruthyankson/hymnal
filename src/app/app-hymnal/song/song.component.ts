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

  constructor(private router: Router) {}

  // Link to hymn
  navigateToHymn(hymnNumber: number) {
    this.router.navigate(['hymn', hymnNumber]);
  }

}
