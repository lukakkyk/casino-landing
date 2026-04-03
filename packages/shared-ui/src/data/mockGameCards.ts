import type { PopularGame } from "../components/GameCard/gameCardTypes";

import gameOne from "../../../../apps/mobile/assets/app-images/game-one.png";
import gameTwo from "../../../../apps/mobile/assets/app-images/game-two.png";
import gameThree from "../../../../apps/mobile/assets/app-images/game-three.png";
import gameFour from "../../../../apps/mobile/assets/app-images/game-four.png";
import gameFive from "../../../../apps/mobile/assets/app-images/game-five.png";
import gameSix from "../../../../apps/mobile/assets/app-images/game-six.png";

export const popularGames: PopularGame[] = [
  {
    id: "1",
    title: "Triple Pot Diamond",
    subtitle: "Pragmatic Play",
    playersCount: 374,
    image: gameOne,
  },
  {
    id: "2",
    title: "Gates of Olympus 1000",
    subtitle: "Pragmatic Play",
    playersCount: 491,
    image: gameTwo,
  },
  {
    id: "3",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 623,
    image: gameThree,
  },
  {
    id: "4",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 897,
    image: gameFour,
  },
  {
    id: "5",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 453,
    image: gameFive,
  },
  {
    id: "6",
    title: "Blackjack Live",
    subtitle: "Pragmatic Play",
    playersCount: 342,
    image: gameSix,
  },
];
