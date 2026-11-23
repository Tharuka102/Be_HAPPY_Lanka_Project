import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVerifyCodeComponent } from './m-verify-code.component';

describe('MVerifyCodeComponent', () => {
  let component: MVerifyCodeComponent;
  let fixture: ComponentFixture<MVerifyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MVerifyCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVerifyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
