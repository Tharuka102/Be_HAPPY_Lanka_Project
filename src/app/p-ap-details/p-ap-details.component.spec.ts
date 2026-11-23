import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PApDetailsComponent } from './p-ap-details.component';

describe('PApDetailsComponent', () => {
  let component: PApDetailsComponent;
  let fixture: ComponentFixture<PApDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PApDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PApDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
