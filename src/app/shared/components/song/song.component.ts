import { Component } from '@angular/core';
import { HYMNS } from '../../constants/hymns';
import { HymnModel } from '../../models/hymn.model';
import { ChorusModel } from '../../models/chorus.model';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  hymns: HymnModel[] = HYMNS;
  // string_text:
  song_chorus: ChorusModel | undefined = this.hymns[0].chorus;
  // verse1: string = this.hymns[0].stanzas[0].verse;
  ngOnInit() {
    // console.log("................",this.hymns[0]);
    // this.song_chorus = this.hymns[0].chorus;
  }

  formatUndefinedPossibleText(text: string | undefined): string {
    // let string_text: string | undefined;
    if (text) {
      this.formatText(text);
    }
    return "";
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }


}
