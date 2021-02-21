import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetallesComponent } from './teacher-detalles.component';

describe('TeacherDetallesComponent', () => {
  let component: TeacherDetallesComponent;
  let fixture: ComponentFixture<TeacherDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
