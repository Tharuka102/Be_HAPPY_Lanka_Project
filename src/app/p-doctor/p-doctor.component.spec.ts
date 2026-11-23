import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDoctorComponent } from './p-doctor.component';

describe('PDoctorComponent', () => {
  let component: PDoctorComponent;
  let fixture: ComponentFixture<PDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
