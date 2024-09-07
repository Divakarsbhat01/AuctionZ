import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdfComponent } from './prdf.component';

describe('PrdfComponent', () => {
  let component: PrdfComponent;
  let fixture: ComponentFixture<PrdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
