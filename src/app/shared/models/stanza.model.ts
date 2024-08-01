import { BaseModel } from "./base.model";

export class StanzaModel extends BaseModel {

  verse: string;

  /**
   * Creates a new instance of the StanzaModel class.
   *
   * @param {string} verse - The verse of the stanza.
   */
  constructor(verse: string) {
    super();
    this.verse = verse;
  }
}
