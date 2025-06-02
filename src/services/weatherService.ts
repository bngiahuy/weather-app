import axios from 'axios';
import type { WeatherData, WeatherError } from '../types/weather';

// Weather API key - using a free tier API key for WeatherAPI.com
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "Your_API_Key_Here";
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherByLocation = async (
	location: string
): Promise<WeatherData> => {
	try {
		// You can use the free tier with limited calls per month
		const response = await axios.get<WeatherData | WeatherError>(
			`${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(
				location
			)}&aqi=no`
		);

		const data = response.data;

		// Check if the response is an error
		if ('error' in data) {
			throw new Error(data.error.message);
		}

		return data as WeatherData;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw new Error(
				`Failed to fetch weather data: ${
					error.response.data?.error?.message || error.message
				}`
			);
		}
		throw new Error('Failed to fetch weather data');
	}
};
