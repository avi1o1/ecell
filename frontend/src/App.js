import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage'; // Modified for the event theme
import GameRules from './pages/GameRules'; // New page for mini-games
import LeaderboardPage from './pages/LeaderboardPage'; // Leaderboard
import ThemesPage from './pages/ThemesPage';

// Context
import { ThemeProvider } from './context/ThemeContext';

// UI Components
import { ToastProvider } from './components/ui/Toast';

function App() {
  const currentYear = new Date().getFullYear();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="App">
            <header className="app-header">
              <div className="container">
                <Link to="/" className="app-logo">ECell IIIT</Link>

                <button
                  className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle navigation menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <nav className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                  <NavLink to="/game" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>Game Rules</NavLink>
                  <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>Leaderboard</NavLink>
                  <NavLink to="/themes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={closeMobileMenu}>Themes</NavLink>
                </nav>
              </div>
            </header>

            <main className="app-main">
              <div className="container">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/game" element={<GameRules />} />
                  <Route path="/leaderboard" element={<LeaderboardPage />} />
                  <Route path="/themes" element={<ThemesPage />} />
                </Routes>
              </div>
            </main>

            <footer className="app-footer">
              <div className="container">
                <p>&copy; {currentYear} ECell IIIT</p>
              </div>
            </footer>
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
