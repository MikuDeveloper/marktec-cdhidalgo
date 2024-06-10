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
  errorMessage: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) code: string) {
    this.setErrorMessage(code);
  }

  setErrorMessage(code: string) {
    switch (code) {
      case 'auth/invalid-credential':
        this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
        break;
      case 'auth/too-many-requests':
        this.errorMessage = 'Demasiados intentos fallidos, espere unos minutos e inténtelo de nuevo.';
        break;
      case 'auth/invalid-email':
        this.errorMessage = 'El email proporcionado no es válido.';
        break;
      case 'auth/invalid-password':
        this.errorMessage = 'Contraseña inválida. La contraseña debe tener al menos 6 caracteres.';
        break;
      default:
        this.errorMessage = code;
    }
  }
}
