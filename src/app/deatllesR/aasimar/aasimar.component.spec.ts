import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AasimarComponent } from './aasimar.component';

describe('AasimarComponent', () => {
  let component: AasimarComponent;
  let fixture: ComponentFixture<AasimarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AasimarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AasimarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
