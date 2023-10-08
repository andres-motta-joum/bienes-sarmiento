import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEgresoComponent } from './nuevo-egreso.component';

describe('NuevoEgresoComponent', () => {
  let component: NuevoEgresoComponent;
  let fixture: ComponentFixture<NuevoEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEgresoComponent]
    });
    fixture = TestBed.createComponent(NuevoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
