import { useState, type FormEvent } from 'react';

interface SearchProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

export default function Search({ onSearch, isLoading }: SearchProps) {
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };
  
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or country"
            className="search-input"
            disabled={isLoading}
          />
          <button 
            type="submit"
            className="search-button"
            disabled={isLoading || !location.trim()}
          >
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </form>
    </div>
  );
}
