import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListarComponent } from './teacher-listar.component';

describe('TeacherListarComponent', () => {
  let component: TeacherListarComponent;
  let fixture: ComponentFixture<TeacherListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
