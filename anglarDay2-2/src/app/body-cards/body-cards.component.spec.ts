import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardsComponent } from './body-cards.component';

describe('BodyCardsComponent', () => {
  let component: BodyCardsComponent;
  let fixture: ComponentFixture<BodyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
