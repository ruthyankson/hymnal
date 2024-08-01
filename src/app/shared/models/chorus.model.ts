import { BaseModel } from "./base.model";


export class ChorusModel extends BaseModel {
  refrain: string;

  /**
   * Creates a new instance of ChorusModel with the specified refrain.
   *
   * @param {string} refrain - The refrain for the chorus model.
   */
  constructor(refrain: string) {
    super();
    this.refrain = refrain;
  }
}
