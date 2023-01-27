import { HomeQuotePage } from './pages/HomeQuotePage';
import { QuotePage } from './pages/QuotePage';
import { SearchBar } from './components/SearchBar';
import './App.css'
import { useState, useEffect } from 'react';

export function App () {
  const [pageName, setPageName] = useState("homequotepage");

  return (
    <div>
      <h1>Quote Search</h1>
      <SearchBar name="Albert" />
      <button type="submit" onClick={() => setPageName("quotepage")}>Search</button>
      {pageName === "homequotepage" && <HomeQuotePage />}
      {pageName === "quotepage" && <QuotePage />}
    </div>
  );
}
