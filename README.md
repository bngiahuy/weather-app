# Weather App

A modern weather application built with React and TypeScript that allows users to search for weather information by city or country.

## Features

- Search for weather by city or country name
- Display current weather conditions including:
  - Temperature (in both Celsius and Fahrenheit)
  - Weather condition with icon
  - Humidity
  - Wind speed
  - "Feels like" temperature
- Responsive design for desktop and mobile devices
- Error handling for failed API requests

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **API**: [WeatherAPI.com](https://www.weatherapi.com/)
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a free account at [WeatherAPI.com](https://www.weatherapi.com/) and get your API key.

4. Update the API key in `src/services/weatherService.ts`:
   ```typescript
   const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
   ```

### Development

Start the development server:
```
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production

```
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```
npm run preview
```

## Project Structure

```
weather-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Search.tsx
│   │   └── WeatherDisplay.tsx
│   ├── services/
│   │   └── weatherService.ts
│   ├── types/
│   │   └── weather.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing the weather data API
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool
