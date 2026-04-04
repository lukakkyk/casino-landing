import { useQuery } from "@tanstack/react-query";

export interface HeroSlide {
  id: string;
  imageUrl: string | number;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaColor: string;
}

import gameOne from "../../../../apps/mobile/assets/app-images/background-one.png";
import gameTwo from "../../../../apps/mobile/assets/app-images/background-two.png";
import gameThree from "../../../../apps/mobile/assets/app-images/background-three.png";

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero_1",
    imageUrl: gameOne,
    title: "Daily Welcome Boost",
    subtitle:
      "Kick off your session with curated bonus packs and cashback perks.",
    ctaLabel: "Claim Bonus",
    ctaColor: "#F59E0B",
  },
  {
    id: "hero_2",
    imageUrl: gameTwo,
    title: "Live Tables Tonight",
    subtitle:
      "Join premium blackjack and roulette streams with instant seat access.",
    ctaLabel: "Join Live",
    ctaColor: "#8B5CF6",
  },
  {
    id: "hero_3",
    imageUrl: gameThree,
    title: "Weekly Jackpot Drops",
    subtitle: "New promotions, bigger prizes, and more chances to win.",
    ctaLabel: "View Offers",
    ctaColor: "#10B981",
  },
];

const SLIDES_DELAY_MS = 800;

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function fetchHeroSlides(): Promise<HeroSlide[]> {
  await wait(SLIDES_DELAY_MS);
  return HERO_SLIDES;
}

export function useHeroSlides() {
  return useQuery({
    queryKey: ["heroSlides"],
    queryFn: fetchHeroSlides,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    placeholderData: [],
  });
}
