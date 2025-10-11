import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsExample } from './signals-example';

describe('SignalsExample', () => {
  let component: SignalsExample;
  let fixture: ComponentFixture<SignalsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
