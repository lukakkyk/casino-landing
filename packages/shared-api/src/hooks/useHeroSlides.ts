import { useQuery } from "@tanstack/react-query";
import { fetchMockHeroSlides } from "../services/heroService";

export function useHeroSlides() {
  return useQuery({
    queryKey: ["hero-slides"],
    queryFn: fetchMockHeroSlides,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
