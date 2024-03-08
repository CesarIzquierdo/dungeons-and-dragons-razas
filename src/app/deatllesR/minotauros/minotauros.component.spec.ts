import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinotaurosComponent } from './minotauros.component';

describe('MinotaurosComponent', () => {
  let component: MinotaurosComponent;
  let fixture: ComponentFixture<MinotaurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinotaurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinotaurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
