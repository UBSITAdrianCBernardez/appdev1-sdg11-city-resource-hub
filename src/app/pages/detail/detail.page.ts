import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css'
})
export class DetailPageComponent {
  readonly sampleId = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
