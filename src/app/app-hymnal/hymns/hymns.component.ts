import { Component } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnsService } from '../../shared/services/hymns.service';

@Component({
  selector: 'app-hymns',
  templateUrl: './hymns.component.html',
  styleUrl: './hymns.component.scss'
})
export class HymnsComponent {
  hymns: HymnModel[] = [];
  constructor(protected hymnsService: HymnsService){}

  ngOnInit(): void  {
    this.getHymns();
    console.log("working");
  }

  getHymns(): void {
    this.hymnsService.getHymns()
      .subscribe(hymns => this.hymns = hymns.slice(1, 25));
  }
}
