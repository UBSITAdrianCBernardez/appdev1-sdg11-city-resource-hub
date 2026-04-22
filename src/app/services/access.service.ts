import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessService {
  private readonly storageKey = 'city-resource-dashboard-access';
  readonly hasDashboardAccess = signal<boolean>(this.readInitialValue());
  readonly accessLabel = computed(() =>
    this.hasDashboardAccess() ? 'Dashboard access enabled' : 'Dashboard access locked'
  );

  constructor() {
    effect(() => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, String(this.hasDashboardAccess()));
      }
    });
  }

  grantAccess(): void {
    this.hasDashboardAccess.set(true);
  }

  revokeAccess(): void {
    this.hasDashboardAccess.set(false);
  }

  toggleAccess(): void {
    this.hasDashboardAccess.update((value) => !value);
  }

  private readInitialValue(): boolean {
    if (typeof localStorage === 'undefined') {
      return false;
    }

    return localStorage.getItem(this.storageKey) === 'true';
  }
}
