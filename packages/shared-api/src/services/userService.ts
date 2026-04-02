import { mockUserBalanceResponse } from "../mocks/user";
import type { UserBalanceResponse } from "../types/balance";

export async function fetchMockUserBalance(): Promise<UserBalanceResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const shouldFail = false;

  if (shouldFail) {
    throw new Error("Unable to fetch user balance");
  }

  return {
    ...mockUserBalanceResponse,
    balance: Number(
      (mockUserBalanceResponse.balance + Math.random() * 20).toFixed(2),
    ),
    updatedAt: new Date().toISOString(),
  };
}
