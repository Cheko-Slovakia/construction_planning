import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSolicitarComponent } from './material-solicitar.component';

describe('MaterialSolicitarComponent', () => {
  let component: MaterialSolicitarComponent;
  let fixture: ComponentFixture<MaterialSolicitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSolicitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSolicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
