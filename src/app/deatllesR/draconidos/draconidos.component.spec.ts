import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraconidosComponent } from './draconidos.component';

describe('DraconidosComponent', () => {
  let component: DraconidosComponent;
  let fixture: ComponentFixture<DraconidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraconidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraconidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
