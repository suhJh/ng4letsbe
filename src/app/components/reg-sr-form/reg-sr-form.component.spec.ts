import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSrFormComponent } from './reg-sr-form.component';

describe('RegSrFormComponent', () => {
  let component: RegSrFormComponent;
  let fixture: ComponentFixture<RegSrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
