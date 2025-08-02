import React, { useState } from 'react';
import { IconBrandLinkedin, IconBrandInstagram, IconWorld } from '@tabler/icons-react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage'; // Modified for the event theme
import GameRules from './pages/GameRules'; // New page for mini-games
import LeaderboardPage from './pages/LeaderboardPage'; // Leaderboard

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
                <div className="flex items-center gap-0">
                  <Link to="/" class="app-logo">
                    <img src="/logo.png" alt="E-Cell Logo" style={{ width: 48, height: 48, objectFit: 'contain' }} />
                  </Link>
                  <Link to="/" class="app-logo text-inherit no-underline">
                    <span>E-Cell IIIT</span>
                  </Link>
                </div>

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
                </nav>
              </div>
            </header>

            <main className="app-main">
              <div className="container">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/game" element={<GameRules />} />
                  <Route path="/leaderboard" element={<LeaderboardPage />} />
                </Routes>
              </div>
            </main>

            <footer className="app-footer">
              <div className="container flex flex-row justify-between items-center py-4">
                <p className="m-0 text-white">&copy; {currentYear} ECell IIIT</p>
                <div className="flex gap-4 items-center">
                  <a href="https://www.linkedin.com/company/ecell-iiith" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex">
                    <IconBrandLinkedin size={24} color="white" />
                  </a>
                  <a href="https://www.instagram.com/ecell_iith" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex">
                    <IconBrandInstagram size={24} color="white" />
                  </a>
                  <a href="https://ecell.iiit.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="Website" className="flex">
                    <IconWorld size={24} color="white" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
