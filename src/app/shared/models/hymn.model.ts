import { AuthorModel } from "./author.model";
import { BaseModel } from "./base.model";
import { ChorusModel } from "./chorus.model";
import { StanzaModel } from "./stanza.model";

export class HymnModel extends BaseModel{
  // Hymn Model properties
  hymn_number: number;
  title: string;
  stanzas: StanzaModel[];
  keynote?: string;
  chorus?: ChorusModel;
  song_writer?: AuthorModel;

  constructor(hymn_number: number, title: string, stanzas: StanzaModel[], keynote?: string, chorus?: ChorusModel, song_writer?: AuthorModel) {
    super();
    this.hymn_number = hymn_number;
    this.title = title;
    this.keynote = keynote;
    this.chorus = chorus;
    this.stanzas = stanzas;
    this.song_writer = song_writer;
  }

}
