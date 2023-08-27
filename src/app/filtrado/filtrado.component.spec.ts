import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoComponent } from './filtrado.component';

describe('FiltradoComponent', () => {
  let component: FiltradoComponent;
  let fixture: ComponentFixture<FiltradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltradoComponent]
    });
    fixture = TestBed.createComponent(FiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
