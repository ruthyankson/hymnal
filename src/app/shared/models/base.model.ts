import {v4 as uuidv4 } from 'uuid';

export abstract class BaseModel {

  id: string;

  /**
   * Initializes a new instance of the class.
   *
   * @return {void} No return value.
   */
  constructor() {
    this.id =uuidv4().toString();
  }

}
