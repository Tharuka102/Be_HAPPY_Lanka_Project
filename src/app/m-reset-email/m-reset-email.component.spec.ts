import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MResetEmailComponent } from './m-reset-email.component';

describe('MResetEmailComponent', () => {
  let component: MResetEmailComponent;
  let fixture: ComponentFixture<MResetEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MResetEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MResetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
