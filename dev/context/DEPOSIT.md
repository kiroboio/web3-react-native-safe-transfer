------

##### Deposit

```typescript
import React from 'react'
import { Button } from "./Button"
import { useAccount, observer, Connectors, currencyValueToWei } from '@kiroboio/web3-react-safe-transfer'


export const DepositButton = observer(() => {
    const {
        address,
        deposit,
        currency,
    } = useAccount()

    const handleDeposit = ({
            to,
            value,
            passcode,
            message,
        }: DepositParams) => {

        deposit.run({
            to,
            value: currencyValueToWei(value, currency.decimals),
            passcode,
            message,
        })
    }
    
    return <Button title="Send" onClick={handleDeposit} />
})
```
<a href="/docs/api/stores/interfaces/IAccount#deposit">deposit</a>

##### Status

```typescript
const {
    depositCmd,
  } = useAccount()
```

<a href="/docs/api/stores/interfaces/ICmdStatus">deposit.is</a>
