import { v4 as uuidv4 } from 'uuid';


export abstract class BaseModel {
  // Abstract method, must be implemented by any subclass
  abstract loadData(): void;

  id: UUID;

  constructor() {
    this.id =uuidv4();
  }

}
