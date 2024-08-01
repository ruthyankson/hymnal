import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Transforms a given string or any value by capitalizing the first letter of each word,
   * and converting the letter after an apostrophe to lowercase.
   *
   * @param {string | any} value - The value to be transformed.
   * @return {string} The transformed string with capitalized first letters and lowercase letters after apostrophes.
   */
  transform(value: string | any): string {
    if (!value) {
      return value;
    }
    return value.replace(/\b\w+([’']\w*)?/g, (match: string) => {
      // Check if the match contains an apostrophe followed by a letter
      const apostropheIndex = match.search(/[’']/);
      if (apostropheIndex !== -1 && apostropheIndex < match.length - 1) {
        // Capitalize the first letter and convert the letter after the apostrophe to lowercase
        return match.charAt(0).toUpperCase() + match.slice(1, apostropheIndex + 1).toLowerCase() + match.charAt(apostropheIndex + 1).toLowerCase() + match.slice(apostropheIndex + 2).toLowerCase();
      } else {
        // Otherwise, capitalize the first letter of the word
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
      }
    });
  }

}
