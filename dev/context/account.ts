import React, { useContext } from "react";
import { AccountStoreType, accountStore } from "../stores/account";

export const AccountContext: React.Context<AccountStoreType> =
  React.createContext(accountStore);

export function useAccount(): AccountStoreType {
  return useContext(AccountContext as any);
}
