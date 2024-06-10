import { Component, inject } from '@angular/core';
import { Auth, AuthError, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorAuthDialogComponent } from '../dialogs/error-auth-dialog/error-auth-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private auth: Auth = inject(Auth);
  protected hide: boolean = true;
  protected loading: boolean = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  login(form: NgForm): void {
    const values = form.value;
    if(values['email'] && values['password']) {
      this.loading = true;
      signInWithEmailAndPassword(this.auth, values['email'], values['password'])
        .then((_) => {
          this.router.navigate(['/home']).then();
          form.resetForm();
        })
        .catch((error: AuthError) => {
          this.dialog.open(ErrorAuthDialogComponent, { data: error.code });
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  toggleView(event: MouseEvent): void {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
