import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Person } from '../interfaces/persons-interface';

@Injectable({
  providedIn: 'root',
})
export class PersonsGETService {
  readonly url: string = '../../assets/persons.json';
  personsSubject = new BehaviorSubject<Person[]>([]);
  result$ = this.personsSubject.asObservable();

  constructor(private _http: HttpClient) {}

  loadPersons() {
    this._http.get<Person[]>(this.url).subscribe((data) => {
      this.personsSubject.next(data);
    });
  }
}
