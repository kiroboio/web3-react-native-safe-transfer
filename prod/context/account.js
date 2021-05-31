import React, { useContext } from "react";
import { accountStore } from "../stores/account";
export var AccountContext = React.createContext(accountStore);
export function useAccount() {
    return useContext(AccountContext);
}
