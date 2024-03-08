import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LizardfolkComponent } from './lizardfolk.component';

describe('LizardfolkComponent', () => {
  let component: LizardfolkComponent;
  let fixture: ComponentFixture<LizardfolkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LizardfolkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LizardfolkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
