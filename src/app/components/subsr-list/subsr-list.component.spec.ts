import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsrListComponent } from './subsr-list.component';

describe('SubsrListComponent', () => {
  let component: SubsrListComponent;
  let fixture: ComponentFixture<SubsrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
