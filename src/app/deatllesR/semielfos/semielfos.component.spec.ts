import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemielfosComponent } from './semielfos.component';

describe('SemielfosComponent', () => {
  let component: SemielfosComponent;
  let fixture: ComponentFixture<SemielfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemielfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemielfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
