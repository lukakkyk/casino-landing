import { useQuery } from "@tanstack/react-query";
import { fetchMockUserBalance } from "../services/userService";

export function useUserBalance(userId?: string) {
  return useQuery({
    queryKey: ["user-balance", userId],
    queryFn: () => fetchMockUserBalance(),
    enabled: Boolean(userId),
    staleTime: 30 * 1000,
    retry: 1,
  });
}
