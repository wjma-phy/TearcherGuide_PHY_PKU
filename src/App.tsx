import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { recordClick } from '@/lib/tracker';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    recordClick(sectionId);
    setActiveSection(sectionId);
    setMobileSidebarOpen(false);
  };

  const handleFAQClick = () => {
    recordClick('faq');
    setActiveSection('faq');
    setMobileSidebarOpen(false);
  };

  const handleHomeClick = () => {
    recordClick('home');
    setActiveSection('home');
    setMobileSidebarOpen(false);
  };

  const handleRegulationsClick = () => {
    recordClick('regulations');
    setActiveSection('regulations');
    setMobileSidebarOpen(false);
  };

  const handleContactClick = () => {
    recordClick('contact');
    setActiveSection('contact');
    setMobileSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-[hsl(40,20%,97%)]">
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2.5 rounded-xl bg-[#94070A] text-white shadow-lg shadow-red-900/30 border border-white/20"
        aria-label="打开菜单"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity",
            mobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "z-50 transition-transform duration-300 ease-in-out",
            "fixed inset-y-0 left-0 lg:static lg:transform-none",
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <Sidebar
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            onFAQClick={handleFAQClick}
            onHomeClick={handleHomeClick}
            onRegulationsClick={handleRegulationsClick}
            onContactClick={handleContactClick}
            onClose={() => setMobileSidebarOpen(false)}
          />
        </div>

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <ContentArea activeSection={activeSection} onSectionChange={handleSectionChange} />
        </ScrollArea>
      </div>

      {/* Footer */}
      <footer className="bg-[hsl(40,15%,98.5%)] border-t border-red-100 px-6 py-3 text-center text-sm text-stone-500 shrink-0 shadow-[0_-2px_8px_rgba(148,7,10,0.04)]">
        <p>北京大学物理学院 © 2026 | 如有问题请联系综合办公室（62751732，mqzhou@pku.edu.cn）</p>
      </footer>
    </div>
  );
}

export default App;
