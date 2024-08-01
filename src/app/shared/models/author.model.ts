import { BaseModel } from './base.model'; // Adjust the import path as needed

export class AuthorModel extends BaseModel {
  author_name?: string;
  date_authored?: Date;
  about?: string;

  /**
   * Constructs a new instance of the AuthorModel class.
   *
   * @param {string} author_name - The name of the author.
   * @param {Date} date_authored - The date the author was born.
   * @param {string} about - A brief description of the author.
   */
  constructor(author_name?: string, date_authored?: Date, about?: string) {
    super(); // Call the constructor of BaseModel
    this.author_name = author_name;
    this.date_authored = date_authored;
    this.about = about;
  }

}
