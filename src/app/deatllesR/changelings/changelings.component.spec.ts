import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelingsComponent } from './changelings.component';

describe('ChangelingsComponent', () => {
  let component: ChangelingsComponent;
  let fixture: ComponentFixture<ChangelingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangelingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
