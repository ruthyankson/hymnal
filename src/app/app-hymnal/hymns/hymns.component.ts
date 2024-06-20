import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnService } from '../../shared/services/hymn.service';

@Component({
  selector: 'app-hymns',
  templateUrl: './hymns.component.html',
  styleUrl: './hymns.component.scss'
})
export class HymnsComponent {
  hymns: HymnModel[] = [];
  isLoading = true;

  constructor(protected hymnService: HymnService){}

  ngOnInit(): void  {
    this.getHymns();
  }

  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(1, 25);
        this.isLoading = false;
    });
  }
}
