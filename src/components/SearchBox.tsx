import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { wikiData, faqData } from '@/data/wikiData';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  onResultClick: (sectionId: string) => void;
}

interface SearchResult {
  id: string;
  title: string;
  category: string;
  type: 'guide' | 'faq';
  preview: string;
}

export function SearchBox({ onResultClick }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    wikiData.forEach(category => {
      category.sections.forEach(section => {
        const matchTitle = section.title.toLowerCase().includes(searchTerm);
        const matchContent = section.description?.toLowerCase().includes(searchTerm);
        const matchSteps = section.steps?.some(step => step.toLowerCase().includes(searchTerm));
        
        if (matchTitle || matchContent || matchSteps) {
          searchResults.push({
            id: `${category.id}-${section.id}`,
            title: section.title,
            category: category.title,
            type: 'guide',
            preview: section.description || section.steps?.[0] || ''
          });
        }
      });
    });

    faqData.forEach(faq => {
      const matchQuestion = faq.question.toLowerCase().includes(searchTerm);
      const matchAnswer = faq.answer.toLowerCase().includes(searchTerm);
      
      if (matchQuestion || matchAnswer) {
        searchResults.push({
          id: 'faq',
          title: faq.question,
          category: faq.category,
          type: 'faq',
          preview: faq.answer.substring(0, 100) + '...'
        });
      }
    });

    return searchResults.slice(0, 8);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    onResultClick(result.type === 'faq' ? 'faq' : result.id);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative group">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-red-200 group-focus-within:text-[#94070A] transition-colors" />
        <Input
          type="text"
          placeholder="搜索办事指南、常见问题..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 w-40 sm:w-56 md:w-80 h-10 rounded-full border-white/20 bg-white/10 text-white placeholder:text-red-100/70 focus:bg-white focus:text-slate-800 focus:placeholder:text-slate-400 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/40 transition-all text-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-4 h-4 text-red-100 hover:text-white transition-colors" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-[hsl(40,15%,98.5%)] rounded-xl shadow-card-hover border border-stone-100 z-50 max-h-96 overflow-auto animate-fade-in">
            {results.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94070A]"></span>
                  搜索结果 ({results.length})
                </div>
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left px-4 py-3 hover:bg-[hsl(40,12%,96%)] transition-colors border-b border-stone-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full font-medium",
                        result.type === 'guide' 
                          ? "bg-red-50 text-[#94070A] border border-red-100" 
                          : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      )}>
                        {result.type === 'guide' ? '办事指南' : '常见问题'}
                      </span>
                      <span className="text-xs text-slate-400">{result.category}</span>
                    </div>
                    <p className="font-medium text-slate-800 mb-0.5 text-base">{result.title}</p>
                    <p className="text-sm text-slate-500 line-clamp-1">{result.preview}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-[hsl(40,12%,94%)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-5 h-5 text-stone-400" />
                </div>
                <p className="text-stone-600 text-base">未找到相关结果</p>
                <p className="text-sm text-stone-400 mt-1">请尝试其他关键词</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
