import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/persons-interface';
import { Observable } from 'rxjs';
import { FilterAdressNullService } from 'src/app/services/filter-adress-null.service';

@Component({
  selector: 'app-filtered-adress-null',
  templateUrl: './filtered-adress-null.component.html',
  styleUrls: ['./filtered-adress-null.component.scss'],
})
export class FilteredAdressNullComponent implements OnInit {
  public resultFiltered!: Person[];
  @Input() persons!: Observable<Person[]>;
  constructor(private _filterResults: FilterAdressNullService) {}

  ngOnInit(): void {
    this._filterResults.filteredResults(this.persons);
    this.resultFiltered = this._filterResults.resultFilter;
  }
}
