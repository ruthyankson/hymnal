import { Component, ElementRef, ViewChild } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';
import { HymnService } from '../../shared/services/hymn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('chorusCheckbox') chorusCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('verseCheckbox') verseCheckbox!: ElementRef<HTMLInputElement>;
  checkedChorus: boolean = false;
  checkedVerse: boolean = false;

  hymns: HymnModel[] = [];

  constructor(protected hymnService: HymnService){}

  ngOnInit(): void  {
    this.getHymns();
  }

  getHymns(): void {
    this.hymnService.getHymns()
      .subscribe( (hymns) => {
        this.hymns = hymns.slice(1, 7);
    });
  }

  getChorusCheckedValue(): void {
    this.checkedChorus = this.chorusCheckbox.nativeElement.checked;
    console.log(this.checkedChorus);
  }

  getVerseCheckedValue(): void {
    this.checkedVerse = this.verseCheckbox.nativeElement.checked;
    console.log(this.checkedVerse, "verse");
  }


}
