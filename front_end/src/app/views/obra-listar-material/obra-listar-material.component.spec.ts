import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraListarMaterialComponent } from './obra-listar-material.component';

describe('ObraListarMaterialComponent', () => {
  let component: ObraListarMaterialComponent;
  let fixture: ComponentFixture<ObraListarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraListarMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraListarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
