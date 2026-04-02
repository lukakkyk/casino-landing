export type AuthUser = {
  id: string;
  name: string;
  avatarUrl?: string;
};

export type UserBalanceState = {
  user: AuthUser | null;
  balance: number;
  isBalanceLoading: boolean;
  balanceError: string | null;
};

export type UserBalanceActions = {
  setUser: (user: AuthUser | null) => void;
  setBalance: (balance: number) => void;
  setBalanceLoading: (value: boolean) => void;
  setBalanceError: (message: string | null) => void;
  refreshBalance: () => Promise<void>;
};

export type UserBalanceStore = UserBalanceState & UserBalanceActions;
