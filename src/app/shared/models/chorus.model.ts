import { BaseModel } from "./base.model";


export class ChorusModel extends BaseModel {
  refrain: string;

  constructor(refrain: string) {
    super();
    this.refrain = refrain;
  }
}
