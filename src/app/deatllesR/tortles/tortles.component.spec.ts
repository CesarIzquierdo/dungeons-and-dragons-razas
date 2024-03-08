import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortlesComponent } from './tortles.component';

describe('TortlesComponent', () => {
  let component: TortlesComponent;
  let fixture: ComponentFixture<TortlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
