import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { DayPage } from './components/DayPage';
import { Home } from './pages/Home';
import { Practice } from './pages/Practice';
import { Settings } from './pages/Settings';
import { daysData } from './data/daysData';

type Page = 'home' | 'practice' | 'settings' | string;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Check if it's a day page
    if (currentPage.startsWith('day')) {
      const dayNum = parseInt(currentPage.replace('day', ''));
      const dayData = daysData.find(d => d.num === dayNum);
      
      if (dayData) {
        return (
          <DayPage
            dayNum={dayData.num}
            title={dayData.title}
            recapPhrases={dayData.recapPhrases}
            microChallenge={dayData.microChallenge}
            onNavigate={handleNavigate}
          />
        );
      }
    }

    // Main pages
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'practice':
        return <Practice onNavigate={handleNavigate} />;
      case 'settings':
        return <Settings onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const getPageType = () => {
    if (currentPage.startsWith('day')) return 'home';
    return currentPage;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={getPageType()} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
