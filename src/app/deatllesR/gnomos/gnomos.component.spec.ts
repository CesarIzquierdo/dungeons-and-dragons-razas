import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomosComponent } from './gnomos.component';

describe('GnomosComponent', () => {
  let component: GnomosComponent;
  let fixture: ComponentFixture<GnomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GnomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
