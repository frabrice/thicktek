import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SolutionsPage from '@/pages/SolutionsPage';
import InnovationsPage from '@/pages/InnovationsPage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import SchedulePage from '@/pages/SchedulePage';
import { PropertyTechArticle } from '@/components/articles/PropertyTechArticle';
import { DataDrivenArticle } from '@/components/articles/DataDrivenArticle';
import { WebsiteArticle } from '@/components/articles/WebsiteArticle';
import { CustomSoftwareArticle } from '@/components/articles/CustomSoftwareArticle';
import { MobileAppsArticle } from '@/components/articles/MobileAppsArticle';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/innovations" element={<InnovationsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/articles/property-tech" element={<PropertyTechArticle />} />
            <Route path="/articles/data-driven" element={<DataDrivenArticle />} />
            <Route path="/articles/website-design" element={<WebsiteArticle />} />
            <Route path="/articles/custom-software" element={<CustomSoftwareArticle />} />
            <Route path="/articles/mobile-apps" element={<MobileAppsArticle />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}