import { BaseModel } from './base.model'; // Adjust the import path as needed

export class AuthorModel extends BaseModel {
  author_name?: string;
  date_authored?: Date;
  about?: string;

  constructor(author_name?: string, date_authored?: Date, about?: string) {
    super(); // Call the constructor of BaseModel
    this.author_name = author_name;
    this.date_authored = date_authored;
    this.about = about;
  }

}
