export type UserBalanceRequest = {
  userId: string;
};

export type UserBalanceResponse = {
  userId: string;
  balance: number;
  currency: string;
  updatedAt: string;
};
