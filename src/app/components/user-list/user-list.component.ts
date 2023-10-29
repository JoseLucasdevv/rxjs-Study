import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/persons-interface';
import { PersonsGETService } from 'src/app/services/persons-get.service';
import { Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  showDiv: boolean = false;

  result!: Observable<Person[]>;

  constructor(private _getUser: PersonsGETService) {}
  ngOnInit(): void {
    this.result = this._getUser.result$;

    this._getUser.loadPersons();
  }

  onClick() {
    this.showDiv = true;
  }
}
