import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalDetailComponent } from './profesional-detail.component';

describe('ProfesionalDetailComponent', () => {
  let component: ProfesionalDetailComponent;
  let fixture: ComponentFixture<ProfesionalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
