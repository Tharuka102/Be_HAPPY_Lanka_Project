import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MContactComponent } from './m-contact.component';

describe('MContactComponent', () => {
  let component: MContactComponent;
  let fixture: ComponentFixture<MContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
