import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserBalanceStore } from "./types";
import { fetchMockUserBalance } from "@casino/shared-api";

export const useUserBalanceStore = create<UserBalanceStore>()(
  persist(
    (set, get) => ({
      user: {
        id: "u_1",
        name: "John Doe",
      },
      balance: 1245.75,
      isBalanceLoading: false,
      balanceError: null,

      setUser: (user) => set({ user }),
      setBalance: (balance) => set({ balance }),
      setBalanceLoading: (value) => set({ isBalanceLoading: value }),
      setBalanceError: (message) => set({ balanceError: message }),

      refreshBalance: async () => {
        try {
          set({ isBalanceLoading: true, balanceError: null });

          const response = await fetchMockUserBalance();

          set({
            balance: response.balance,
            isBalanceLoading: false,
            balanceError: null,
          });
        } catch (error) {
          set({
            isBalanceLoading: false,
            balanceError:
              error instanceof Error
                ? error.message
                : "Failed to refresh balance",
          });
        }
      },
    }),
    {
      name: "casino-user-balance-store",
    },
  ),
);
