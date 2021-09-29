import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorLayoutComponent } from './trabajador-layout.component';

describe('TrabajadorLayoutComponent', () => {
  let component: TrabajadorLayoutComponent;
  let fixture: ComponentFixture<TrabajadorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
