import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HousingPackagesPage } from './pages/HousingPackagesPage';
import { CosignerPage } from './pages/CosignerPage';
import { VerifiedIncomePage } from './pages/VerifiedIncomePage';
import { InstantApprovalPage } from './pages/InstantApprovalPage';
import { BookOnlinePage } from './pages/BookOnlinePage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { QuestionnaireModal } from './components/QuestionnaireModal';
import { LoginModal } from './components/LoginModal';
import { ReplicationInspectorModal } from './components/ReplicationInspectorModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [inspectorOpen, setInspectorOpen] = useState(false);

  // Sync window scroll whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'housing-packages':
        return (
          <HousingPackagesPage
            setCurrentPage={setCurrentPage}
            onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          />
        );
      case 'cosigner':
        return (
          <CosignerPage
            setCurrentPage={setCurrentPage}
            onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          />
        );
      case 'verified-income':
        return (
          <VerifiedIncomePage
            setCurrentPage={setCurrentPage}
            onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          />
        );
      case 'instant-approval':
        return (
          <InstantApprovalPage
            setCurrentPage={setCurrentPage}
            onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          />
        );
      case 'book-online':
        return <BookOnlinePage setCurrentPage={setCurrentPage} />;
      case 'book-consultation':
        return <BookConsultationPage setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#0D4F3D] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenQuestionnaire={() => setQuestionnaireOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Interactive Questionnaire Modal ("Get Started ➜") */}
      <QuestionnaireModal
        isOpen={questionnaireOpen}
        onClose={() => setQuestionnaireOpen(false)}
        onNavigateToService={(page) => setCurrentPage(page)}
        onNavigateToBooking={() => setCurrentPage('book-consultation')}
      />

      {/* Secure Client Portal Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      {/* Floating 109% Replication Inspector Button & Modal */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setInspectorOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-gray-900/90 hover:bg-black text-white text-xs font-bold rounded-full shadow-2xl backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer group"
          title="Open Replication & Architecture Breakdown"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>109% Replication Notes</span>
        </button>
      </div>

      <ReplicationInspectorModal
        isOpen={inspectorOpen}
        onClose={() => setInspectorOpen(false)}
      />
    </div>
  );
}
