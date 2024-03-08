import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenasiComponent } from './genasi.component';

describe('GenasiComponent', () => {
  let component: GenasiComponent;
  let fixture: ComponentFixture<GenasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
