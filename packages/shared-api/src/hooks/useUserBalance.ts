import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  useRefreshTrigger,
  useUserStore,
} from "@casino/shared-stores";

type BalanceResponse = {
  balance: number;
};

const DELAY_MS = 1200;

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Unable to fetch balance.";

const shouldFailRequest = (): boolean => Math.random() < 0.2;

/**
 * Simulates a wallet balance request with random failure.
 */
async function fetchBalance(userId: string): Promise<BalanceResponse> {
  await wait(DELAY_MS);

  if (shouldFailRequest()) {
    throw new Error("Network issue while refreshing wallet balance.");
  }

  const userEntropy = userId.length * 3;
  const randomizedBalance = Number((1000 + Math.random() * 500 + userEntropy).toFixed(2));

  return { balance: randomizedBalance };
}

/**
 * React Query hook that keeps wallet balance in sync with the user store.
 */
export function useUserBalance() {
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setBalance = useUserStore((state) => state.setBalance);
  const setBalanceStatus = useUserStore((state) => state.setBalanceStatus);
  const setBalanceError = useUserStore((state) => state.setBalanceError);
  const refreshTrigger = useRefreshTrigger();

  const userId = user?.id;
  const canFetchBalance = isAuthenticated && Boolean(userId);

  const query = useQuery({
    queryKey: ["balance", userId],
    queryFn: () => fetchBalance(userId ?? ""),
    enabled: canFetchBalance,
    staleTime: 30_000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!canFetchBalance) {
      setBalanceStatus("idle");
      return;
    }

    if (query.isFetching) {
      setBalanceStatus("loading");
      setBalanceError(null);
    }
  }, [canFetchBalance, query.isFetching, setBalanceError, setBalanceStatus]);

  useEffect(() => {
    if (!query.data) {
      return;
    }

    setBalance(query.data.balance);
    setBalanceError(null);
    setBalanceStatus("success");
  }, [query.data, setBalance, setBalanceError, setBalanceStatus]);

  useEffect(() => {
    if (!query.error) {
      return;
    }

    setBalanceStatus("error");
    setBalanceError(getErrorMessage(query.error));
  }, [query.error, setBalanceError, setBalanceStatus]);

  useEffect(() => {
    if (!canFetchBalance || refreshTrigger === 0) {
      return;
    }

    void query.refetch();
  }, [canFetchBalance, query.refetch, refreshTrigger]);

  return query;
}
