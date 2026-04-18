import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, FlaskConical, Users, GraduationCap, Wallet, Building, Heart, UserCog, Globe, HelpCircle, Shield, UserPlus, ExternalLink, Home, FileText, Phone, Sparkles, LayoutGrid, Briefcase, Plane, Building2, Cpu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { wikiData, quickLinks } from '@/data/wikiData';
import { getHeatLevel } from '@/lib/tracker';
import { SearchBox } from '@/components/SearchBox';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onFAQClick: () => void;
  onHomeClick: () => void;
  onRegulationsClick: () => void;
  onContactClick: () => void;
  onClose?: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  FlaskConical,
  Users,
  GraduationCap,
  Wallet,
  Building,
  Heart,
  UserCog,
  Globe,
  Shield,
  UserPlus,
  Sparkles,
  LayoutGrid,
  Briefcase,
  Plane,
  Building2,
  Cpu,
};

const categoryConfig: Record<string, { gradient: string }> = {
  onboarding: { gradient: 'from-emerald-500 to-teal-600' },
  teaching: { gradient: 'from-blue-500 to-indigo-600' },
  research: { gradient: 'from-indigo-500 to-violet-600' },
  hr: { gradient: 'from-cyan-500 to-blue-600' },
  postdoc: { gradient: 'from-violet-500 to-purple-600' },
  finance: { gradient: 'from-amber-500 to-orange-600' },
  equipment: { gradient: 'from-lime-600 to-green-600' },
  communication: { gradient: 'from-sky-500 to-blue-600' },
  welfare: { gradient: 'from-rose-500 to-pink-600' },
  admin: { gradient: 'from-slate-500 to-gray-600' },
  safety: { gradient: 'from-red-500 to-rose-600' },
};

export function Sidebar({
  activeSection,
  onSectionChange,
  onFAQClick,
  onHomeClick,
  onRegulationsClick,
  onContactClick,
  onClose
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['onboarding']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="w-72 bg-[hsl(40,15%,98.5%)] border-r border-red-100 flex flex-col h-full overflow-hidden shadow-[2px_0_12px_rgba(148,7,10,0.04)]">
      {/* Logo */}
      <div className="p-4 border-b border-red-100 shrink-0 bg-gradient-to-br from-[#94070A] to-[#7A0608] flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-95 transition-opacity"
          onClick={onHomeClick}
        >
          <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner">
            <span className="text-white font-bold text-lg tracking-wider">物</span>
          </div>
          <div>
            <h1 className="font-bold text-white text-sm leading-tight tracking-wide">北京大学</h1>
            <p className="text-xs text-red-100/80 font-light">物理学院职工手册Wiki</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="关闭菜单"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search */}
      <div className="p-3 border-b border-red-100 shrink-0 bg-gradient-to-br from-[#94070A] to-[#7A0608]">
        <SearchBox onResultClick={onSectionChange} variant="light" />
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-b border-red-50 shrink-0 bg-gradient-to-b from-[hsl(40,12%,96%)]/80 to-[hsl(40,15%,98.5%)]">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onHomeClick}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm",
              activeSection === 'home'
                ? "bg-[#94070A] text-white shadow-md shadow-red-900/20"
                : "bg-[hsl(40,15%,98.5%)] text-stone-600 hover:bg-red-50 hover:text-[#94070A] border border-stone-100"
            )}
          >
            <Home className="w-3.5 h-3.5" />
            返回首页
          </button>
          <button
            onClick={onFAQClick}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm",
              activeSection === 'faq'
                ? "bg-[#94070A] text-white shadow-md shadow-red-900/20"
                : "bg-[hsl(40,15%,98.5%)] text-stone-600 hover:bg-red-50 hover:text-[#94070A] border border-stone-100"
            )}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            常见问题
          </button>
          <button
            onClick={onRegulationsClick}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm",
              activeSection === 'regulations'
                ? "bg-[#94070A] text-white shadow-md shadow-red-900/20"
                : "bg-[hsl(40,15%,98.5%)] text-stone-600 hover:bg-red-50 hover:text-[#94070A] border border-stone-100"
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            规章制度
          </button>
          <button
            onClick={onContactClick}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm",
              activeSection === 'contact'
                ? "bg-[#94070A] text-white shadow-md shadow-red-900/20"
                : "bg-[hsl(40,15%,98.5%)] text-stone-600 hover:bg-red-50 hover:text-[#94070A] border border-stone-100"
            )}
          >
            <Phone className="w-3.5 h-3.5" />
            通讯录
          </button>
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-3">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
              办事指南
            </p>
            {wikiData.map((category) => {
              const Icon = iconMap[category.icon] || BookOpen;
              const isExpanded = expandedCategories.includes(category.id);
              const cfg = categoryConfig[category.id];

              return (
                <div key={category.id} className="mb-1.5">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base transition-all",
                      activeSection.startsWith(category.id)
                        ? "bg-red-50 text-[#94070A] shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white shadow-sm", cfg?.gradient || 'from-slate-400 to-gray-500')}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">{category.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400 transition-transform" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 transition-transform" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="ml-5 mt-1 space-y-0.5 border-l-2 border-red-100 pl-3">
                      {category.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => onSectionChange(`${category.id}-${section.id}`)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2",
                            activeSection === `${category.id}-${section.id}`
                              ? "bg-[#94070A]/10 text-[#94070A] font-semibold shadow-sm"
                              : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                          )}
                        >
                          <span className="truncate">{section.title}</span>
                          {getHeatLevel(`${category.id}-${section.id}`) > 0 && (
                            <span className={cn(
                              "shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1",
                              getHeatLevel(`${category.id}-${section.id}`) >= 3
                                ? "bg-red-100 text-red-600"
                                : getHeatLevel(`${category.id}-${section.id}`) >= 2
                                  ? "bg-orange-100 text-orange-600"
                                  : "bg-amber-100 text-amber-600"
                            )}>
                              {getHeatLevel(`${category.id}-${section.id}`) >= 3 ? '超热' : getHeatLevel(`${category.id}-${section.id}`) >= 2 ? '热' : '温'}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="p-3 border-t border-red-50 bg-[hsl(40,12%,96%)]/60 shrink-0">
        <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2 px-2">
          常用链接
        </p>
        <div className="flex flex-wrap items-center gap-2 px-2">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-stone-500 hover:text-white hover:bg-[#94070A] transition-all rounded-full px-2.5 py-1 bg-[hsl(40,15%,98.5%)] border border-stone-200 hover:border-[#94070A] shadow-xs"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
