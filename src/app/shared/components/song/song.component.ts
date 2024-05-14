import { Component } from '@angular/core';
import { HYMNS } from '../../constants/hymns';
import { HymnModel } from '../../models/hymn.model';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  hymns: HymnModel[] = HYMNS;

  song_chorus: string | undefined = this.hymns[0].chorus;;
  verse1: string = this.hymns[0].stanzas[0].verse;
  ngOnInit() {
    console.log(this.hymns[0]);
    // this.song_chorus = this.hymns[0].chorus;
  }

  formatText(text: string | undefined): string | undefined {
    return text?.replace(/\n/g, '<br>');
  }
}
