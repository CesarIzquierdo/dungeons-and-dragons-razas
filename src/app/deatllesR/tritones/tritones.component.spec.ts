import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TritonesComponent } from './tritones.component';

describe('TritonesComponent', () => {
  let component: TritonesComponent;
  let fixture: ComponentFixture<TritonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TritonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TritonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
