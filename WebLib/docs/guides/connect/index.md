---
id: "index"
title: "web-lib"
slug: "/guides/connect"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

#### Connect

------

*KiroboProvider Application Wrapper*

```typescript
import { KiroboProvider } from './kirobo'

ReactDOM.render(
  <KiroboProvider>
    <App />
  </KiroboProvider>,
  document.getElementById('root')
)

```

------

*Connect with metamask*

```typescript
export const App = observer(() => {
  const {
    connect,
  } = useAccount()
  
  const handleLogin = () => {
      connect(Connectors.Injected)
  }
  
  return <Wallet onLogin={handleLogin} />
})
```

<a href="/docs/api/stores/interfaces/IAccount#connect">connect</a>

##### Status

```typescript
const {
    depositCmd,
  } = useAccount()
```

<a href="/docs/api/stores/interfaces/ICmdStatus">connect.is</a>
