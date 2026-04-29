export interface OpenMeteoCurrentWeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_units: {
    time: string;
    temperature_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
  };
}
