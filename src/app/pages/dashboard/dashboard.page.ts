import { AsyncPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [AsyncPipe, DatePipe, DecimalPipe, TitleCasePipe],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css'
})
export class DashboardPageComponent {
  readonly weather$ = inject(WeatherService).getBaguioWeather();
}
