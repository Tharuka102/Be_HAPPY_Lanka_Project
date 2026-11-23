import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegisterPatientComponent } from './m-register-patient.component';

describe('MRegisterPatientComponent', () => {
  let component: MRegisterPatientComponent;
  let fixture: ComponentFixture<MRegisterPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MRegisterPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRegisterPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
