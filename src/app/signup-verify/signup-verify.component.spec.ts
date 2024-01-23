import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupVerifyComponent } from './signup-verify.component';

describe('SignupVerifyComponent', () => {
  let component: SignupVerifyComponent;
  let fixture: ComponentFixture<SignupVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupVerifyComponent]
    });
    fixture = TestBed.createComponent(SignupVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
