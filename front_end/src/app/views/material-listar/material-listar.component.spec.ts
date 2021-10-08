import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListarComponent } from './material-listar.component';

describe('MaterialListarComponent', () => {
  let component: MaterialListarComponent;
  let fixture: ComponentFixture<MaterialListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
