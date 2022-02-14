---
id: "index"
title: "@kiroboio/web3-react-native-safe-transfer"
slug: "/Api/context/"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

### Context

#### Kirobo Provider

`KiroboProvider` wrap all children with `AccountContext` and implement all actions related to `web3` like `deposit` ,`retrieve`, `collect`, `swap` transaction after invoking appropriate action from `AccountProvider`

#### Use Account

_<a href="/docs/Api/stores/interfaces/IAccount">Account Store Interface</a>_

To use `account` store wrap application `components` with `KiroboProvider` context

---

_KiroboProvider Application Wrapper_

```typescript
import { KiroboProvider } from "./kirobo";
import { Connect } from "./Connect";
import { INFURA_KEY, API_KEY, API_SECRET } from "react-native-dotenv";

export const App = () => {
  return (
    <KiroboProvider
      infuraKey={INFURA_KEY}
      apiKey={API_KEY}
      apiSecret={API_SECRET}
    >
      <Connect />
    </KiroboProvider>
  );
};
```

Account store use `mobx-state-tree` lib for [reactive state management ](https://mobx-state-tree.js.org/intro/welcome). To re-render react component on account state change use [observer](https://mobx-state-tree.js.org/intro/getting-started#getting-to-the-ui)

_Each `observer` declaration will enable the React component to only re-render if any of it's observed data changes._

---

_Connect with metamask_

```typescript
export const App = observer(() => {
  const { connect } = useAccount();

  const handleLogin = ({ chainId, privateKey }) => {
    connect.run({ chainId, key: privateKey });
  };

  return <Wallet onLogin={handleLogin} />;
});
```

---

_Account Store States_

```typescript
import React from "react";
import { Wallet } from "./Wallet";
import {
  useAccount,
  observer,
} from "@kiroboio/web3-react-native-safe-transfer";

export const Wallet = observer(() => {
  const { address, balance } = useAccount();

  return (
    <div className="wallet">
      address: {address}
      balance: {balance}
    </div>
  );
});
```

---

_Account Store States & Deposit Action_

```typescript
import React from "react";
import { Button } from "./Button";
import {
  useAccount,
  observer,
  Connectors,
  currencyValueToWei,
} from "@kiroboio/web3-react-native-safe-transfer";

export const DepositButton = observer(() => {
  const { address, deposit, currency } = useAccount();

  const handleDeposit = ({ to, value, passcode, message }: DepositParams) => {
    deposit.run({
      to,
      value: currencyValueToWei(value, currency.decimals),
      passcode,
      message,
    });
  };

  return <Button title="Send" onClick={handleDeposit} />;
});
```
