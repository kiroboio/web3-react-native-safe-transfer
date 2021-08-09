

### Connect

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

