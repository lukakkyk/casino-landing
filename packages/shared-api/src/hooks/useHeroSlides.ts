import { useQuery } from "@tanstack/react-query";

/**
 * Hero slider item returned by the landing API.
 */
export interface HeroSlide {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero_1",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    title: "Daily Welcome Boost",
    subtitle: "Kick off your session with curated bonus packs and cashback perks.",
    ctaLabel: "Claim Bonus",
    ctaColor: "#F59E0B",
  },
  {
    id: "hero_2",
    imageUrl:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80",
    title: "Live Tables Tonight",
    subtitle: "Join premium blackjack and roulette streams with instant seat access.",
    ctaLabel: "Join Live",
    ctaColor: "#8B5CF6",
  },
  {
    id: "hero_3",
    imageUrl:
      "https://images.unsplash.com/photo-1606166325683-e6deb697d301?auto=format&fit=crop&w=1200&q=80",
    title: "Jackpot Surge",
    subtitle: "Progressive pools are climbing fast across top-rated slot rooms.",
    ctaLabel: "Play Slots",
    ctaColor: "#EF4444",
  },
  {
    id: "hero_4",
    imageUrl:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1200&q=80",
    title: "Weekend VIP Race",
    subtitle: "Compete on leaderboards to unlock VIP points and tournament tickets.",
    ctaLabel: "View Race",
    ctaColor: "#10B981",
  },
  {
    id: "hero_5",
    imageUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
    title: "Fast-Paced Picks",
    subtitle: "Discover short-session games built for quick wins and smooth payouts.",
    ctaLabel: "Explore Games",
    ctaColor: "#06B6D4",
  },
];

const SLIDES_DELAY_MS = 800;

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

/**
 * Simulates loading hero slides from a stable API endpoint.
 */
async function fetchHeroSlides(): Promise<HeroSlide[]> {
  await wait(SLIDES_DELAY_MS);
  return HERO_SLIDES;
}

/**
 * React Query hook for hero slider content.
 */
export function useHeroSlides() {
  return useQuery({
    queryKey: ["heroSlides"],
    queryFn: fetchHeroSlides,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    placeholderData: [],
  });
}
