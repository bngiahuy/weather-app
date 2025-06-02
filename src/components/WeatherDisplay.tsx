import type { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
	weather: WeatherData | null;
	error: string | null;
}

export default function WeatherDisplay({
	weather,
	error,
}: WeatherDisplayProps) {
	if (error) {
		return (
			<div className="weather-error">
				<p>{error}</p>
			</div>
		);
	}

	if (!weather) {
		return (
			<div className="weather-empty">
				<p>Search for a location to see the weather</p>
			</div>
		);
	}

	return (
		<div className="weather-container">
			<div className="weather-header">
				<h2>
					{weather.location.name}, {weather.location.country}
				</h2>
				<p className="last-updated">
					Last updated: {weather.current.last_updated}
				</p>
			</div>

			<div className="weather-body">
				<div className="weather-main">
					<img
						src={weather.current.condition.icon}
						alt={weather.current.condition.text}
						className="weather-icon"
					/>
					<div className="weather-temp">
						<span className="temp">{weather.current.temp_c}°C</span>
						<span className="temp-f">({weather.current.temp_f}°F)</span>
					</div>
					<p className="condition">{weather.current.condition.text}</p>
				</div>

				<div className="weather-details">
					<div className="detail">
						<span className="label">Feels like:</span>
						<span className="value">
							{weather.current.feelslike_c}°C ({weather.current.feelslike_f}°F)
						</span>
					</div>
					<div className="detail">
						<span className="label">Humidity:</span>
						<span className="value">{weather.current.humidity}%</span>
					</div>
					<div className="detail">
						<span className="label">Wind:</span>
						<span className="value">{weather.current.wind_kph} km/h</span>
					</div>
				</div>
			</div>
		</div>
	);
}
