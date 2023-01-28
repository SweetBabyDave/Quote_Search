import { HomeQuotePage } from './pages/HomeQuotePage';
import { QuotePage } from './pages/QuotePage';
import { SearchBar } from './components/SearchBar';
import './App.css'
import { useState } from 'react';

export function App () {
  const [hasSearched, setSearched] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Quote Search</h1>
      <SearchBar name={name} setName={(newName) => setName(newName)}/>
      <button id="button" type="submit" onClick={() => setSearched(name)}>Search</button>
      {(() => {
        if (!hasSearched) {
          return <HomeQuotePage />;
        } 
        return <QuotePage name={name} />;
      })()}
    </div>
  );
}
