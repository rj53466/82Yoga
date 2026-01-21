import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Handle Scroll to Top and Hash Scrolling
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legal page remains separate for compliance, or could be a modal */}
          <Route path="/legal" element={<div className="container mx-auto py-20 px-4"><h2>Privacy Policy & Terms Placeholder</h2></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;