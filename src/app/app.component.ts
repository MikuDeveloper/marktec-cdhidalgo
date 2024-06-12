import {Component, inject, OnDestroy} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Auth, user, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'MARKTEC';

  private auth: Auth = inject(Auth);
  $user = user(this.auth)
  userSubscription: Subscription;

  constructor(private router: Router) {
    this.userSubscription = this.$user.subscribe((currentUser: User) => {
      if (!currentUser) this.router.navigate(['/login']).then();
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
