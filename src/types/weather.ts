export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
    feelslike_f: number;
    last_updated: string;
  };
}

export interface WeatherError {
  error: {
    code: number;
    message: string;
  };
}
