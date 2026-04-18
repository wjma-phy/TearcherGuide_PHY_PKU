const STORAGE_KEY = 'pku-physics-wiki-clicks';

export function recordClick(sectionId: string) {
  if (!sectionId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const counts: Record<string, number> = raw ? JSON.parse(raw) : {};
    counts[sectionId] = (counts[sectionId] || 0) + 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
  } catch {
    // ignore localStorage errors
  }
}

export function getClickCounts(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getHotSections(topN: number = 6): string[] {
  const counts = getClickCounts();
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([id]) => id);
}

export function isHot(sectionId: string, threshold: number = 3): boolean {
  const counts = getClickCounts();
  return (counts[sectionId] || 0) >= threshold;
}

export function getHeatLevel(sectionId: string): number {
  const counts = getClickCounts();
  const count = counts[sectionId] || 0;
  if (count >= 10) return 3; // super hot
  if (count >= 5) return 2;  // hot
  if (count >= 2) return 1;  // warm
  return 0;
}
