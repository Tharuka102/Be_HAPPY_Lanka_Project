import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAboutComponent } from './m-about.component';

describe('MAboutComponent', () => {
  let component: MAboutComponent;
  let fixture: ComponentFixture<MAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
