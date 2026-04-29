import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { OpenMeteoCurrentWeatherResponse } from '../models/weather.model';

export interface WeatherViewModel {
  city: string;
  updatedAt: string;
  temperature: number;
  windSpeed: number;
  timezone: string;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly endpoint =
    'https://api.open-meteo.com/v1/forecast?latitude=16.4023&longitude=120.596&current=temperature_2m,wind_speed_10m&timezone=auto';

  getBaguioWeather(): Observable<WeatherViewModel> {
    return this.http.get<OpenMeteoCurrentWeatherResponse>(this.endpoint).pipe(
      map((response) => ({
        city: 'Baguio City',
        updatedAt: response.current.time,
        temperature: response.current.temperature_2m,
        windSpeed: response.current.wind_speed_10m,
        timezone: response.timezone
      })),
      catchError(() =>
        of({
          city: 'Baguio City',
          updatedAt: new Date().toISOString(),
          temperature: 0,
          windSpeed: 0,
          timezone: 'Asia/Manila',
          error: 'Unable to load live weather data right now. Please try again later.'
        })
      )
    );
  }
}
