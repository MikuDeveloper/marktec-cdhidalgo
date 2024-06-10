import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAuthDialogComponent } from './error-auth-dialog.component';

describe('ErrorAuthDialogComponent', () => {
  let component: ErrorAuthDialogComponent;
  let fixture: ComponentFixture<ErrorAuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorAuthDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorAuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
