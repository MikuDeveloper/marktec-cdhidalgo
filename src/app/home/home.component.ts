import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private auth: Auth = inject(Auth);
  opened: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {}

  toggleSideNav(): void {
    this.opened = !this.opened;
  }

  logout(): void {
    const dialogResult = this.dialog.open(LogoutDialogComponent);
    dialogResult.afterClosed().subscribe(result => {
      if (result === true) {
        signOut(this.auth).then(() => {
          this.router.navigate(['login']).then();
        });
      }
    })
  }

  navigateTo(path: string): void {
    this.router.navigate([`home/${path}`]).then(() => this.opened = false);
  }

}
