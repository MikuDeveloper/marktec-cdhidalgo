import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-auth-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './error-auth-dialog.component.html',
  styleUrl: './error-auth-dialog.component.scss'
})
export class ErrorAuthDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public code: String) {}
}
