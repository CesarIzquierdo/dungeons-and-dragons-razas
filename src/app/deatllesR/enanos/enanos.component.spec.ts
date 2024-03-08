import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnanosComponent } from './enanos.component';

describe('EnanosComponent', () => {
  let component: EnanosComponent;
  let fixture: ComponentFixture<EnanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
