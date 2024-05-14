import { BaseModel } from "./base.model";

export class StanzaModel extends BaseModel {

  verse: string;

  constructor(verse: string) {
    super();
    this.verse = verse;
  }
}
