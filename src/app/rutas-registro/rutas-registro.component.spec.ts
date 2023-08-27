import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasRegistroComponent } from './rutas-registro.component';

describe('RutasRegistroComponent', () => {
  let component: RutasRegistroComponent;
  let fixture: ComponentFixture<RutasRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutasRegistroComponent]
    });
    fixture = TestBed.createComponent(RutasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
