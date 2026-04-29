import { AsyncPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { AccessService } from '../../services/access.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePageComponent {
  private readonly accessService = inject(AccessService);
  private readonly apiService = inject(ApiService);

  readonly accessLabel = computed(() => this.accessService.accessLabel());
  readonly hasAccess = computed(() => this.accessService.hasDashboardAccess());
  readonly posts$ = this.apiService.getPosts();

  enableDashboard(): void {
    this.accessService.grantAccess();
  }

  disableDashboard(): void {
    this.accessService.revokeAccess();
  }
}
