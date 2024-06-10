import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { map } from 'rxjs';

export const employeeGuard: CanActivateFn = () => {
  const auth: Auth = inject(Auth);
  return user(auth).pipe(map(user => !!user));
};
