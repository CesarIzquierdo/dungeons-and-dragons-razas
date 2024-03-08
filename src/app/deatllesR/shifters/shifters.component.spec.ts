import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftersComponent } from './shifters.component';

describe('ShiftersComponent', () => {
  let component: ShiftersComponent;
  let fixture: ComponentFixture<ShiftersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
