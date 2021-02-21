import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherActualizarComponent } from './teacher-actualizar.component';

describe('TeacherActualizarComponent', () => {
  let component: TeacherActualizarComponent;
  let fixture: ComponentFixture<TeacherActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
