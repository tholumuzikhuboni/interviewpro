import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import InterviewPrep from './pages/InterviewPrep';
import InterviewQuestions from './pages/InterviewQuestions';
import EmailWriter from './pages/EmailWriter';
import CoverLetter from './pages/CoverLetter';
import React, { useEffect } from 'react';

export default function AdSense() {
  useEffect(() => {
    // Load the AdSense script dynamically
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4758250154385307';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4758250154385307"
        data-ad-slot="7700454671"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
}
// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/interview-questions" element={<InterviewQuestions />} />
            <Route path="/email-writer" element={<EmailWriter />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
