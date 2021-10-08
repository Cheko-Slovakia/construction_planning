import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSolicitudesComponent } from './material-solicitudes.component';

describe('MaterialSolicitudesComponent', () => {
  let component: MaterialSolicitudesComponent;
  let fixture: ComponentFixture<MaterialSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
