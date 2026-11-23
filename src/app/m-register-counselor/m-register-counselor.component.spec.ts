import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegisterCounselorComponent } from './m-register-counselor.component';

describe('MRegisterCounselorComponent', () => {
  let component: MRegisterCounselorComponent;
  let fixture: ComponentFixture<MRegisterCounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MRegisterCounselorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRegisterCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
