import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePageComponent {
  private readonly accessService = inject(AccessService);

  readonly accessLabel = computed(() => this.accessService.accessLabel());
  readonly hasAccess = computed(() => this.accessService.hasDashboardAccess());

  enableDashboard(): void {
    this.accessService.grantAccess();
  }

  disableDashboard(): void {
    this.accessService.revokeAccess();
  }
}
