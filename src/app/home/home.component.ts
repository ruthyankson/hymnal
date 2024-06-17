import { Component } from '@angular/core';
import { HymnModel } from '../shared/models/hymn.model';
import { HymnsService } from '../shared/services/hymns.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  hymns: HymnModel[] = [];
  constructor(protected hymnsService: HymnsService){}

  ngOnInit(): void  {
    this.getHymns()
  }

  getHymns(): void {
    this.hymnsService.getHymns()
      .subscribe(hymns => this.hymns = hymns.slice(1, 25));
  }
}
