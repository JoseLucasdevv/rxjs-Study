import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredAdressNullComponent } from './filtered-adress-null.component';

describe('FilteredAdressNullComponent', () => {
  let component: FilteredAdressNullComponent;
  let fixture: ComponentFixture<FilteredAdressNullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredAdressNullComponent]
    });
    fixture = TestBed.createComponent(FilteredAdressNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
