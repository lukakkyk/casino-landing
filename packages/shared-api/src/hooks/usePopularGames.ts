import { useQuery } from "@tanstack/react-query";

import gameOne from "../../../../apps/mobile/assets/app-images/game-one.png";
import gameTwo from "../../../../apps/mobile/assets/app-images/game-two.png";
import gameThree from "../../../../apps/mobile/assets/app-images/game-three.png";
import gameFour from "../../../../apps/mobile/assets/app-images/game-four.png";
import gameFive from "../../../../apps/mobile/assets/app-images/game-five.png";

export interface PopularGame {
  id: string;
  title: string;
  subtitle: string;
  playersCount: number;
  imageUrl: string;
}

const POPULAR_GAMES: PopularGame[] = [
  {
    id: "game_1",
    title: "Triple Pot Diamond",
    subtitle: "Pragmatic Play",
    playersCount: 374,
    imageUrl: gameOne,
  },
  {
    id: "game_2",
    title: "Gates of Olympus 1000",
    subtitle: "Pragmatic Play",
    playersCount: 491,
    imageUrl: gameTwo,
  },
  {
    id: "game_3",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 623,
    imageUrl: gameThree,
  },
  {
    id: "game_4",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 897,
    imageUrl: gameFour,
  },
  {
    id: "game_5",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 453,
    imageUrl: gameFive,
  },
];

const GAMES_DELAY_MS = 800;

async function fetchPopularGames(): Promise<PopularGame[]> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, GAMES_DELAY_MS);
  });
  return POPULAR_GAMES;
}

export function usePopularGames() {
  return useQuery({
    queryKey: ["popularGames"],
    queryFn: fetchPopularGames,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    placeholderData: [],
  });
}
