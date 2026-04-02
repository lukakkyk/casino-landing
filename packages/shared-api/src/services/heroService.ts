import { mockHeroSlidesResponse } from "../mocks/slides";
import type { HeroSlidesResponse } from "../types/slide";

export async function fetchMockHeroSlides(): Promise<HeroSlidesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return mockHeroSlidesResponse;
}
