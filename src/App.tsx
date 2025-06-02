import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeatherByLocation } from './services/weatherService';
import type { WeatherData } from './types/weather';

function App() {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async (location: string) => {
		setIsLoading(true);
		setError(null);

		try {
			const data = await fetchWeatherByLocation(location);
			setWeather(data);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Failed to fetch weather data'
			);
			setWeather(null);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="app-container">
			<header className="app-header">
				<h1>Weather App</h1>
			</header>

			<main className="app-main">
				<Search onSearch={handleSearch} isLoading={isLoading} />
				{isLoading ? (
					<div className="loading">Loading weather data...</div>
				) : (
					<WeatherDisplay weather={weather} error={error} />
				)}
			</main>

			<footer className="app-footer">
				<p>Created with React and TypeScript</p>
			</footer>
		</div>
	);
}

export default App;
