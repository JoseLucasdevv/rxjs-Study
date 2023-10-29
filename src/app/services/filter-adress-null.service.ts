import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/persons-interface';

@Injectable({
  providedIn: 'root',
})
export class FilterAdressNullService {
  resultFilter!: Person[];
  constructor() {}

  filteredResults(value: Observable<Person[]>) {
    value.subscribe((data) => {
      this.resultFilter = data.filter((person) => person.address === '');
    });
  }
}
