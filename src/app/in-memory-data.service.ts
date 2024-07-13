import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HymnModel } from './shared/models/hymn.model';
import { HYMNS } from './shared/constants/hymns';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // constructor() { }

  createDb() {
    const hymns: HymnModel[] = HYMNS;
    return {hymns};
  }

}
