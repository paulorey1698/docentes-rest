import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCrearComponent } from './teacher-crear.component';

describe('TeacherCrearComponent', () => {
  let component: TeacherCrearComponent;
  let fixture: ComponentFixture<TeacherCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
