import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComprarComponent } from './material-comprar.component';

describe('MaterialComprarComponent', () => {
  let component: MaterialComprarComponent;
  let fixture: ComponentFixture<MaterialComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
