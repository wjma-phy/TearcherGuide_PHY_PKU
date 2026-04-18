import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import { SearchBox } from '@/components/SearchBox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileSidebarOpen(false);
  };

  const handleFAQClick = () => {
    setActiveSection('faq');
    setMobileSidebarOpen(false);
  };

  const handleHomeClick = () => {
    setActiveSection('home');
    setMobileSidebarOpen(false);
  };

  const handleRegulationsClick = () => {
    setActiveSection('regulations');
    setMobileSidebarOpen(false);
  };

  const handleContactClick = () => {
    setActiveSection('contact');
    setMobileSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-[hsl(40,20%,97%)]">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#94070A] via-[#B3090C] to-[#94070A] text-white px-4 md:px-6 py-3.5 flex items-center justify-between shrink-0 shadow-lg shadow-red-900/20">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner shrink-0">
              <span className="text-white font-bold text-base md:text-lg tracking-wider">物</span>
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-semibold tracking-wide">
                物理学院教职工Wiki系统
              </h1>
              <p className="hidden sm:block text-xs md:text-sm text-red-100/80 font-light tracking-wider">
                FACULTY & STAFF HANDBOOK
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden md:block h-7 bg-white/20" />
          <span className="hidden md:block text-base text-red-50/90 font-medium">
            北京大学物理学院
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <SearchBox onResultClick={handleSectionChange} />
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="打开菜单"
          >
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </header>

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
