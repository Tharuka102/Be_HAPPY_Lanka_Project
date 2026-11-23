import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRequestComponent } from './p-request.component';

describe('PRequestComponent', () => {
  let component: PRequestComponent;
  let fixture: ComponentFixture<PRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
