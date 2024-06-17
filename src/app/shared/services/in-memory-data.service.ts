import { Injectable } from '@angular/core';
import { HymnModel } from '../models/hymn.model';
import { HYMNS } from '../constants/hymns';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createHymnsDb() {
    const hymns: HymnModel[] = HYMNS;
    return {hymns};
  }
}
