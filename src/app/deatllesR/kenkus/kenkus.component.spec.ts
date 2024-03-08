import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenkusComponent } from './kenkus.component';

describe('KenkusComponent', () => {
  let component: KenkusComponent;
  let fixture: ComponentFixture<KenkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenkusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
