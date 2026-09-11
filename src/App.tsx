import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { WebsitesPage } from './pages/WebsitesPage';
import { WebsiteDetailPage } from './pages/WebsiteDetailPage';
import { UIUXPage } from './pages/UIUXPage';
import { UIUXDetailPage } from './pages/UIUXDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TicketaCaseStudyPage } from './pages/TicketaCaseStudyPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/websites/:id" element={<WebsiteDetailPage />} />
            <Route path="/ui-ux" element={<UIUXPage />} />
            <Route path="/ui-ux/:id" element={<UIUXDetailPage />} />
            <Route path="/case-study/ticketa" element={<TicketaCaseStudyPage />} />
            <Route path="/ticketa" element={<TicketaCaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
