import { AuthorModel } from "./author.model";
import { ChorusModel } from "./chorus.model";
import { StanzaModel } from "./stanza.model";

export class HymnModel {
  // Hymn Model properties
  id: number;
  hymn_number: number;
  title: string;
  stanzas: StanzaModel[];
  keynote?: string;
  chorus?: ChorusModel;
  song_writer?: AuthorModel;

  constructor(hymn_number: number, title: string, stanzas: StanzaModel[], keynote?: string, chorus?: ChorusModel, song_writer?: AuthorModel, id?: number) {
    this.id = id ? id : hymn_number; // Set unique id if not provided
    this.hymn_number = hymn_number;
    this.title = title;
    this.keynote = keynote;
    this.chorus = chorus;
    this.stanzas = stanzas;
    this.song_writer = song_writer;
  }
}
