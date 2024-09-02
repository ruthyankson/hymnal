import { AuthorModel } from "./author.model";
import { ChorusModel } from "./chorus.model";
import { StanzaModel } from "./stanza.model";

export class HymnModel {
  // Hymn Model properties
  id: number;
  hymn_number: number;
  title: string;
  stanzas: StanzaModel[];
  hymn_url?: string;
  keynote?: string;
  chorus?: ChorusModel;
  song_writer?: AuthorModel;

  /**
   * Creates a new instance of the HymnModel class.
   *
   * @param {number} hymn_number - The number of the hymn.
   * @param {string} title - The title of the hymn.
   * @param {StanzaModel[]} stanzas - An array of stanzas for the hymn.
   * @param {string} [keynote] - The keynote of the hymn (optional).
   * @param {ChorusModel} [chorus] - The chorus of the hymn (optional).
   * @param {AuthorModel} [song_writer] - The author of the hymn (optional).
   * @param {number} [id] - The unique id of the hymn (optional).
   * @param {string} [hymn_url] - The url of the hymn (optional).
   */
  constructor(hymn_number: number, title: string, stanzas: StanzaModel[], hymn_url?: string, keynote?: string, chorus?: ChorusModel, song_writer?: AuthorModel, id?: number) {
    this.id = id ? id : hymn_number; // Set unique id if not provided
    this.hymn_number = hymn_number;
    this.title = title;
    this.stanzas = stanzas;
    this.hymn_url = hymn_url;
    this.keynote = keynote;
    this.chorus = chorus;
    this.song_writer = song_writer;
  }
}
