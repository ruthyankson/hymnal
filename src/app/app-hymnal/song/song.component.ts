import { Component, Input } from '@angular/core';
import { HymnModel } from '../../shared/models/hymn.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  @Input({required: true}) hymn!: HymnModel;

}
