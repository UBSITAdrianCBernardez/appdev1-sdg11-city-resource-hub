import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessService } from '../services/access.service';

export const accessGuard: CanActivateFn = () => {
  const accessService = inject(AccessService);
  const router = inject(Router);

  return accessService.hasDashboardAccess()
    ? true
    : router.createUrlTree(['/'], {
        queryParams: { returnUrl: '/dashboard' }
      });
};
