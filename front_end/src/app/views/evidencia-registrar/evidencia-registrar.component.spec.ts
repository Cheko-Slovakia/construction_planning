import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaRegistrarComponent } from './evidencia-registrar.component';

describe('EvidenciaRegistrarComponent', () => {
  let component: EvidenciaRegistrarComponent;
  let fixture: ComponentFixture<EvidenciaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciaRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
