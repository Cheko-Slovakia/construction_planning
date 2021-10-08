import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaListarComponent } from './evidencia-listar.component';

describe('EvidenciaListarComponent', () => {
  let component: EvidenciaListarComponent;
  let fixture: ComponentFixture<EvidenciaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
