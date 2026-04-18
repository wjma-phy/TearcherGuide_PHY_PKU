import { useState } from 'react';
import { ExternalLink, Download, Phone, Mail, MapPin, AlertCircle, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, User, BookOpen, HelpCircle, Flame, FileText, Sparkles, LayoutGrid, GraduationCap, Building2, Briefcase, Heart, Plane, Wallet, Shield, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { SearchBox } from '@/components/SearchBox';
import { wikiData, faqData, contactData, hotTopics, regulationsData, findContact } from '@/data/wikiData';
import { isHot } from '@/lib/tracker';
import { cn } from '@/lib/utils';

interface ContentAreaProps {
  activeSection: string;
  onSectionChange?: (sectionId: string) => void;
}

const categoryConfig: Record<string, { icon: React.ElementType; gradient: string; lightBg: string }> = {
  onboarding: { icon: User, gradient: 'from-emerald-500 to-teal-600', lightBg: 'bg-emerald-50 text-emerald-600' },
  teaching: { icon: GraduationCap, gradient: 'from-blue-500 to-indigo-600', lightBg: 'bg-blue-50 text-blue-600' },
  research: { icon: BookOpen, gradient: 'from-indigo-500 to-violet-600', lightBg: 'bg-indigo-50 text-indigo-600' },
  hr: { icon: Briefcase, gradient: 'from-cyan-500 to-blue-600', lightBg: 'bg-cyan-50 text-cyan-600' },
  postdoc: { icon: Sparkles, gradient: 'from-violet-500 to-purple-600', lightBg: 'bg-violet-50 text-violet-600' },
  finance: { icon: Wallet, gradient: 'from-amber-500 to-orange-600', lightBg: 'bg-amber-50 text-amber-600' },
  communication: { icon: Plane, gradient: 'from-sky-500 to-blue-600', lightBg: 'bg-sky-50 text-sky-600' },
  welfare: { icon: Heart, gradient: 'from-rose-500 to-pink-600', lightBg: 'bg-rose-50 text-rose-600' },
  admin: { icon: Building2, gradient: 'from-slate-500 to-gray-600', lightBg: 'bg-slate-50 text-slate-600' },
  safety: { icon: Shield, gradient: 'from-red-500 to-rose-600', lightBg: 'bg-red-50 text-red-600' },
  equipment: { icon: Cpu, gradient: 'from-lime-600 to-green-600', lightBg: 'bg-lime-50 text-lime-600' },
};

export function ContentArea({ activeSection, onSectionChange }: ContentAreaProps) {
  const [expandedPolicies, setExpandedPolicies] = useState<Record<string, boolean>>({});
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);


  const togglePolicy = (sectionId: string) => {
    setExpandedPolicies(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleLinkClick = (link: string) => {
    if (onSectionChange) onSectionChange(link);
  };

  if (activeSection === 'home') {
    return (
      <div className="min-h-full bg-[hsl(40,20%,97%)] animate-fade-in">
        {/* Hero Section - 学术精致风 */}
        <div className="relative bg-gradient-to-br from-[#94070A] via-[#B3090C] to-[#7A0608] text-white overflow-hidden">
          {/* 纹理背景 */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-5 leading-tight">
                  物理学院<br />
                  <span className="text-red-100/90">教职工办事指南</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-red-50/90 max-w-xl leading-relaxed font-light">
                  从办事者视角出发，整合学院各项业务流程与规章制度，快速找到您需要办理的事务
                </p>
              </div>
              
              {/* 右侧装饰卡片 */}
              <div className="hidden lg:flex flex-col gap-4 min-w-[240px]">
                <div className="glass rounded-2xl p-5 border border-white/20 shadow-xl">
                  <div className="text-3xl font-bold mb-1 text-white">{wikiData.reduce((acc, c) => acc + c.sections.length, 0)}+</div>
                  <div className="text-base text-white/90">办事指南</div>
                </div>
                <div className="glass rounded-2xl p-5 border border-white/20 shadow-xl ml-8">
                  <div className="text-3xl font-bold mb-1 text-white">{regulationsData.reduce((acc, c) => acc + c.items.length, 0)}+</div>
                  <div className="text-base text-white/90">规章制度</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部波浪过渡 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
              <path d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z" fill="hsl(40 20% 97%)"/>
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-12">
          {/* Search Box - 悬浮卡片 */}
          <div className="relative z-10 -mt-6 md:-mt-8 mb-10 md:mb-12">
            <div className="max-w-2xl mx-auto">
              <SearchBox onResultClick={handleLinkClick} variant="light" />
            </div>
          </div>


          {/* Quick Access */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                快速入口
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {hotTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleLinkClick(topic.id)}
                  className="group relative flex flex-col items-center gap-3 p-5 bg-[hsl(40,15%,98.5%)] rounded-2xl border border-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(148,7,10,0.12)] hover:border-red-200 transition-all duration-300 hover:-translate-y-1"
                >
                  {isHot(topic.id) && (
                    <span className="absolute -top-2 -right-1 px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold rounded-full shadow-md">
                      热门
                    </span>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#94070A] to-[#D10D12] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:scale-110 group-hover:shadow-red-500/40 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-semibold text-slate-700 group-hover:text-[#94070A] transition-colors">{topic.title}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Hot Questions */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#94070A]" />
                  热门问题
                </h2>
              </div>
              <button
                onClick={() => handleLinkClick('faq')}
                className="text-sm text-[#94070A] hover:text-[#6B0508] font-semibold flex items-center gap-1 transition-colors"
              >
                查看全部
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.slice(0, 6).map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => faq.link && handleLinkClick(faq.link)}
                  className="w-full text-left p-5 bg-[hsl(40,15%,98.5%)] rounded-2xl border border-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(148,7,10,0.08)] hover:border-red-100 transition-all group hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 mt-0.5 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4 text-[#94070A]" />
                    </div>
                    <span className="text-slate-700 text-base font-medium group-hover:text-[#94070A] transition-colors leading-relaxed">{faq.question}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Categories Grid */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-indigo-500" />
                办事指南
              </h2>
            </div>
            <p className="text-slate-500 text-sm mb-5">点击类别展开，查看详细办事指南</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {wikiData.map((category) => {
                const cfg = categoryConfig[category.id];
                const Icon = cfg?.icon || LayoutGrid;
                return (
                  <Card key={category.id} className="overflow-hidden border-stone-100/80 hover:border-red-100 hover:shadow-[0_8px_24px_rgba(148,7,10,0.08)] transition-all duration-300 bg-[hsl(40,15%,98.5%)]/95 group">
                    <Collapsible open={expandedCategory === category.id} onOpenChange={() => handleCategoryClick(category.id)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="py-5 cursor-pointer hover:bg-[hsl(40,12%,96%)] transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-md", cfg?.gradient || 'from-slate-400 to-gray-500')}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900 text-lg">{category.title}</h3>
                                {category.description && (
                                  <p className="text-sm text-slate-500 mt-0.5">{category.description}</p>
                                )}
                              </div>
                            </div>
                            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-all", expandedCategory === category.id ? "bg-red-50" : "bg-[hsl(40,12%,96%)] group-hover:bg-red-50")}>
                              {expandedCategory === category.id ? (
                                <ChevronUp className="w-5 h-5 text-[#94070A]" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#94070A]" />
                              )}
                            </div>
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <div className="space-y-1 border-t border-slate-100 pt-4">
                            {category.sections.map((section) => (
                              <button
                                key={section.id}
                                onClick={() => handleLinkClick(`${category.id}-${section.id}`)}
                                className="w-full text-left px-4 py-3 text-base text-slate-600 hover:bg-red-50 hover:text-[#94070A] rounded-xl transition-all flex items-center justify-between group/item"
                              >
                                <span className="flex items-center gap-2 font-medium">
                                  {section.title}
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover/item:text-[#94070A] group-hover/item:translate-x-1 transition-all" />
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-base text-stone-400 pt-10 border-t border-stone-100">
            <p className="font-light">北京大学物理学院 © 2026 | 教职工Wiki系统</p>
          </div>
        </div>
      </div>
    );
  }

  // 渲染FAQ页面
  if (activeSection === 'faq') {
    return (
      <div className="min-h-full bg-[hsl(40,20%,97%)] p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#94070A] to-[#D10D12] flex items-center justify-center shadow-lg shadow-red-500/20">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">常见问题解答</h1>
              <p className="text-slate-500 mt-1">快速查找常见问题的答案，点击查看详细办理流程</p>
            </div>
          </div>

          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <Card key={faq.id} className="overflow-hidden border-stone-100 hover:border-red-100 hover:shadow-[0_6px_20px_rgba(148,7,10,0.08)] transition-all duration-300 bg-[hsl(40,15%,98.5%)]">
                <CardHeader className="bg-gradient-to-r from-[hsl(40,15%,96%)] to-[hsl(40,15%,98.5%)] py-5 border-b border-stone-100">
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="shrink-0 bg-red-50 text-[#94070A] border border-red-100 font-semibold">
                      {faq.category}
                    </Badge>
                    <CardTitle className="text-base font-bold text-slate-900 leading-relaxed">
                      {index + 1}. {faq.question}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <p className="text-slate-700 text-base leading-relaxed mb-4">{faq.answer}</p>
                  {faq.link && onSectionChange && (
                    <button
                      onClick={() => onSectionChange(faq.link!)}
                      className="inline-flex items-center gap-2 text-base text-[#94070A] hover:text-[#6B0508] font-semibold group transition-colors"
                    >
                      <span>查看详细办理流程</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 渲染规章制度汇编页面
  if (activeSection === 'regulations') {
    return (
      <div className="min-h-full bg-[hsl(40,20%,97%)] p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">规章制度汇编</h1>
              <p className="text-slate-500 mt-1">物理学院相关规章制度及政策文件</p>
            </div>
          </div>

          <div className="space-y-6">
            {regulationsData.map((category, idx) => (
              <Card key={idx} className="border-stone-100 hover:shadow-[0_6px_20px_rgba(148,7,10,0.08)] transition-all duration-300 bg-[hsl(40,15%,98.5%)] overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-50/40 to-[hsl(40,15%,98.5%)] border-b border-stone-50 py-5">
                  <CardTitle className="text-lg font-bold text-[#94070A] flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-[#94070A] rounded-full"></div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-50">
                    {category.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 hover:bg-[hsl(40,12%,94%)] transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-[#94070A]" />
                          </div>
                          <span className="text-slate-700 group-hover:text-[#94070A] font-medium transition-colors">{item.title}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {item.date && (
                            <span className="text-sm text-stone-500 bg-[hsl(40,12%,92%)] px-3 py-1 rounded-full font-medium">{item.date}</span>
                          )}
                          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#94070A] transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 渲染联系方式页面
  if (activeSection === 'contact') {
    const offices = Array.from(new Set(contactData.map(c => c.office)));

    return (
      <div className="min-h-full bg-[hsl(40,20%,97%)] p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">办公联系方式</h1>
              <p className="text-slate-500 mt-1">各办公室联系人及联系方式</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {offices.map((office) => (
              <Card key={office} className="border-stone-100 hover:shadow-[0_6px_20px_rgba(148,7,10,0.08)] transition-all duration-300 bg-[hsl(40,15%,98.5%)] overflow-hidden">
                <CardHeader className="pb-4 bg-gradient-to-r from-[hsl(40,15%,95%)] to-[hsl(40,15%,98.5%)] border-b border-stone-100">
                  <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-3">
                    <div className="w-1.5 h-5 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    {office}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contactData
                      .filter(c => c.office === office)
                      .map((contact, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-5 bg-[hsl(40,12%,94%)] rounded-2xl hover:bg-[hsl(40,12%,91%)] hover:shadow-sm transition-all border border-transparent hover:border-red-100">
                          <div className="w-11 h-11 bg-gradient-to-br from-[#94070A] to-[#D10D12] rounded-full flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
                            <span className="text-white font-bold text-sm">
                              {contact.name.charAt(0)}
                            </span>
                          </div>
                          <div className="space-y-1 min-w-0 flex-1">
                            <p className="font-bold text-slate-900">{contact.name}</p>
                            <div className="flex items-center gap-2 text-base text-slate-600">
                              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="truncate">{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-base text-slate-600">
                              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="truncate text-sm" title={contact.email}>{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-base text-slate-600">
                              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="truncate">{contact.room}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 渲染分类概览页（点击面包屑二级目录时）
  const overviewCategory = wikiData.find(c => c.id === activeSection);
  if (overviewCategory) {
    const cfg = categoryConfig[overviewCategory.id];
    const Icon = cfg?.icon || LayoutGrid;
    return (
      <div className="min-h-full bg-[hsl(40,20%,97%)] p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-6">
            <button onClick={() => handleLinkClick('home')} className="hover:text-[#94070A] transition-colors font-medium">首页</button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold">{overviewCategory.title}</span>
          </nav>

          {/* Title */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-md", cfg?.gradient || 'from-slate-400 to-gray-500')}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{overviewCategory.title}</h1>
            </div>
            {overviewCategory.description && (
              <p className="text-slate-600 text-lg leading-relaxed">{overviewCategory.description}</p>
            )}
          </div>

          {/* Section Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {overviewCategory.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleLinkClick(`${overviewCategory.id}-${section.id}`)}
                className="text-left p-5 bg-[hsl(40,15%,98.5%)] rounded-2xl border border-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(148,7,10,0.08)] hover:border-red-100 transition-all group"
              >
                <h3 className="text-base font-bold text-slate-800 group-hover:text-[#94070A] transition-colors mb-2">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-sm text-slate-500 line-clamp-2">{section.description}</p>
                )}
                <div className="mt-3 flex items-center gap-1 text-sm text-[#94070A] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 渲染具体办事指南
  const dashIndex = activeSection.indexOf('-');
  if (dashIndex === -1) {
    return (
      <div className="p-4 md:p-8">
        <p className="text-slate-500">请选择左侧导航栏中的办事指南</p>
      </div>
    );
  }

  const categoryId = activeSection.substring(0, dashIndex);
  const sectionId = activeSection.substring(dashIndex + 1);
  const category = wikiData.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="p-4 md:p-8">
        <p className="text-slate-500">请选择左侧导航栏中的办事指南</p>
      </div>
    );
  }

  const section = category.sections.find(s => s.id === sectionId);

  if (!section) {
    return (
      <div className="p-4 md:p-8">
        <p className="text-slate-500">请选择左侧导航栏中的办事指南</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[hsl(40,20%,97%)] p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-6">
          <button onClick={() => handleLinkClick('home')} className="hover:text-[#94070A] transition-colors font-medium">首页</button>
          <span className="text-slate-300">/</span>
          <button onClick={() => handleLinkClick(categoryId)} className="hover:text-[#94070A] transition-colors font-medium">{category?.title}</button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">{section.title}</span>
        </nav>

        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{section.title}</h1>

          </div>
          {section.description && (
            <p className="text-slate-600 text-lg leading-relaxed">{section.description}</p>
          )}
        </div>



        {/* Steps - Timeline 风格 */}
        {section.steps && section.steps.length > 0 && (
          <Card className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#94070A] to-[#D10D12]"></div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#94070A]" />
                </div>
                办理流程
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative pl-4">
                {/* 时间线竖线 */}
                <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#94070A] via-[#D10D12] to-red-200 rounded-full"></div>
                <div className="space-y-6">
                  {section.steps.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-5">
                      <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-[#94070A] to-[#D10D12] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-500/20 ring-4 ring-[hsl(40,15%,98.5%)]">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="pt-2 flex-1">
                        <p className="text-slate-700 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Links */}
        {section.links && section.links.length > 0 && (
          <Card className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-emerald-600" />
                </div>
                相关链接
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-emerald-50/50 rounded-xl hover:bg-emerald-100/60 transition-colors group border border-transparent hover:border-emerald-200"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 text-base font-semibold group-hover:underline">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Policies */}
        {section.policies && section.policies.length > 0 && (
          <Card className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-violet-500 to-purple-500"></div>
            <Collapsible open={expandedPolicies[section.id]} onOpenChange={() => togglePolicy(section.id)}>
              <CollapsibleTrigger asChild>
                <CardHeader className="pb-3 cursor-pointer hover:bg-[hsl(40,12%,96%)] transition-colors">
                  <CardTitle className="text-lg flex items-center justify-between text-slate-900">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-violet-600" />
                      </div>
                      相关规定
                    </div>
                    {expandedPolicies[section.id] ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {section.policies.map((policy, index) => (
                      <a
                        key={index}
                        href={policy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-4 bg-violet-50/50 rounded-xl hover:bg-violet-100/60 transition-colors group border border-transparent hover:border-violet-200"
                      >
                        <BookOpen className="w-4 h-4 text-violet-600 mt-0.5" />
                        <div>
                          <span className="text-violet-700 text-base font-semibold group-hover:underline block">
                            {policy.title}
                          </span>
                          {policy.description && (
                            <span className="text-violet-600 text-base mt-1 block">
                              {policy.description}
                            </span>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        )}

        {/* Downloads */}
        {section.downloads && section.downloads.length > 0 && (
          <Card className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Download className="w-5 h-5 text-orange-600" />
                </div>
                表格下载
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.downloads.map((download, index) => (
                  <a
                    key={index}
                    href={download.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-xl hover:bg-orange-100/60 transition-colors group border border-transparent hover:border-orange-200"
                  >
                    <Download className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700 text-base font-semibold group-hover:underline">
                      {download.text}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tables */}
        {section.tables && section.tables.map((table, tableIndex) => (
          <Card key={tableIndex} className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[hsl(40,12%,94%)] hover:bg-[hsl(40,12%,94%)]">
                    {table.headers.map((header, idx) => (
                      <TableHead key={idx} className="font-bold text-slate-900">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {table.rows.map((row, rowIdx) => (
                    <TableRow key={rowIdx} className="hover:bg-[hsl(40,12%,96%)]">
                      {row.map((cell, cellIdx) => (
                        <TableCell key={cellIdx} className="text-slate-700">
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}

        {/* Contacts */}
        {section.contacts && section.contacts.length > 0 && (
          <Card className="mb-6 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[hsl(40,15%,98.5%)] overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-slate-900">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-600" />
                </div>
                联系方式
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.contacts.map((contactRef, index) => {
                  const contactInfo = findContact(contactRef.name, contactRef.office);
                  return (
                    <div key={index} className="p-5 bg-cyan-50/40 rounded-2xl border border-transparent hover:border-cyan-200 hover:shadow-sm transition-all">
                      <p className="font-bold text-slate-900 text-base mb-2">
                        {contactRef.name}
                        {contactRef.office && <span className="text-sm text-slate-500 ml-2">({contactRef.office})</span>}
                      </p>
                      {(contactRef.phone || contactInfo?.phone) && (
                        <div className="flex items-center gap-2 text-base text-slate-600 mb-1">
                          <Phone className="w-4 h-4 text-slate-400" />
                          {contactRef.phone || contactInfo?.phone}
                        </div>
                      )}
                      {(contactRef.email || contactInfo?.email) && (
                        <div className="flex items-center gap-2 text-base text-slate-600 mb-1">
                          <Mail className="w-4 h-4 text-slate-400" />
                          {contactRef.email || contactInfo?.email}
                        </div>
                      )}
                      {contactInfo?.room && (
                        <div className="flex items-center gap-2 text-base text-slate-600">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {contactInfo.room}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes */}
        {section.notes && section.notes.length > 0 && (
          <Alert className="bg-[hsl(40,20%,94%)] border-stone-200 rounded-2xl">
            <AlertCircle className="w-5 h-5 text-[#94070A]" />
            <AlertDescription>
              <p className="font-bold text-stone-800 text-base mb-2">注意事项：</p>
              <ul className="space-y-2">
                {section.notes.map((note, index) => (
                  <li key={index} className="text-stone-700 text-base leading-relaxed">
                    • {note}
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
