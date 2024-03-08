import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiorcosComponent } from './semiorcos.component';

describe('SemiorcosComponent', () => {
  let component: SemiorcosComponent;
  let fixture: ComponentFixture<SemiorcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiorcosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiorcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
