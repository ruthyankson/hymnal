import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnService } from '../../shared/services/hymn.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('homeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  hymns: HymnModel[] = [];
  isLoading = true;

  constructor(protected hymnService: HymnService, private messageService: MessageService){}

  ngOnInit(): void  {
    this.getHymns();
  }

  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(0, 6);
        this.isLoading = false;
    });

  }
}
