import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DArticlesComponent } from './d-articles.component';

describe('DArticlesComponent', () => {
  let component: DArticlesComponent;
  let fixture: ComponentFixture<DArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
