import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from "zustand/middleware";

/**
 * Authenticated user domain model.
 */
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  currency: string;
}

export interface UserState {
  user: User | null;
  balance: number;
  isAuthenticated: boolean;
  balanceStatus: "idle" | "loading" | "success" | "error";
  balanceError: string | null;
  refreshTrigger: number;
  setUser: (user: User) => void;
  logout: () => void;
  setBalance: (balance: number) => void;
  setBalanceStatus: (status: UserState["balanceStatus"]) => void;
  setBalanceError: (error: string | null) => void;
  triggerRefresh: () => void;
}

const mockUser: User = {
  id: "usr_001",
  name: "Luka Kekalainen",
  avatarUrl: "https://i.pravatar.cc/150?u=luka",
  currency: "USD",
};

const inMemoryStorage = new Map<string, string>();
const ASYNC_STORAGE_MODULE = "@react-native-async-storage/async-storage";

type AsyncStorageModule = {
  default: {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
  };
};

const fallbackStorage: StateStorage = {
  getItem: (name) => inMemoryStorage.get(name) ?? null,
  setItem: (name, value) => {
    inMemoryStorage.set(name, value);
  },
  removeItem: (name) => {
    inMemoryStorage.delete(name);
  },
};

const nativeStorage: StateStorage = {
  getItem: async (name) => {
    try {
      const module = (await import(ASYNC_STORAGE_MODULE)) as AsyncStorageModule;
      return await module.default.getItem(name);
    } catch {
      return fallbackStorage.getItem(name);
    }
  },
  setItem: async (name, value) => {
    try {
      const module = (await import(ASYNC_STORAGE_MODULE)) as AsyncStorageModule;
      await module.default.setItem(name, value);
      return;
    } catch {
      fallbackStorage.setItem(name, value);
    }
  },
  removeItem: async (name) => {
    try {
      const module = (await import(ASYNC_STORAGE_MODULE)) as AsyncStorageModule;
      await module.default.removeItem(name);
      return;
    } catch {
      fallbackStorage.removeItem(name);
    }
  },
};

const webStorage = (): StateStorage => {
  const globalScope = globalThis as {
    localStorage?: {
      getItem: (key: string) => string | null;
      setItem: (key: string, value: string) => void;
      removeItem: (key: string) => void;
    };
  };

  return globalScope.localStorage ?? fallbackStorage;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: mockUser,
      balance: 1288.42,
      isAuthenticated: true,
      balanceStatus: "idle",
      balanceError: null,
      refreshTrigger: 0,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          balance: 0,
          isAuthenticated: false,
          balanceStatus: "idle",
          balanceError: null,
        }),
      setBalance: (balance) => set({ balance }),
      setBalanceStatus: (balanceStatus) => set({ balanceStatus }),
      setBalanceError: (balanceError) => set({ balanceError }),
      triggerRefresh: () =>
        set((state) => ({
          refreshTrigger: state.refreshTrigger + 1,
        })),
    }),
    {
      name: "casino-user-store",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? webStorage() : nativeStorage,
      ),
      partialize: (state) => ({
        user: state.user,
        balance: state.balance,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

export const useUser = () => useUserStore((state) => state.user);

export const useBalance = () => useUserStore((state) => state.balance);

export const useBalanceStatus = () =>
  useUserStore((state) => state.balanceStatus);

export const useBalanceError = () =>
  useUserStore((state) => state.balanceError);

export const useRefreshTrigger = () =>
  useUserStore((state) => state.refreshTrigger);
