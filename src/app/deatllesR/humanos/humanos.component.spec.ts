import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanosComponent } from './humanos.component';

describe('HumanosComponent', () => {
  let component: HumanosComponent;
  let fixture: ComponentFixture<HumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
