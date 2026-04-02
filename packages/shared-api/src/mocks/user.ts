import type { UserBalanceResponse } from "../types/balance";

export const mockUserBalanceResponse: UserBalanceResponse = {
  userId: "u_1",
  balance: 1288.42,
  currency: "$",
  updatedAt: new Date().toISOString(),
};
