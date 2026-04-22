import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/pending-changes.guard';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css'
})
export class DetailPageComponent implements CanComponentDeactivate {
  readonly sampleId = inject(ActivatedRoute).snapshot.paramMap.get('id');

  resourceName = 'Session Hall';
  notes = 'Evacuation supplies available here.';
  hasUnsavedChanges = false;

  updateName(value: string): void {
    this.resourceName = value;
    this.hasUnsavedChanges = true;
  }

  updateNotes(value: string): void {
    this.notes = value;
    this.hasUnsavedChanges = true;
  }

  saveChanges(): void {
    this.hasUnsavedChanges = false;
  }

  canDeactivate(): boolean {
    return this.hasUnsavedChanges
      ? window.confirm('You have unsaved changes. Do you want to leave this page?')
      : true;
  }
}
