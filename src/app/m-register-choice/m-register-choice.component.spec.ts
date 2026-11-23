import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegisterChoiceComponent } from './m-register-choice.component';

describe('MRegisterChoiceComponent', () => {
  let component: MRegisterChoiceComponent;
  let fixture: ComponentFixture<MRegisterChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MRegisterChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRegisterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
