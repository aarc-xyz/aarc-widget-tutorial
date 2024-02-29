'use client'
import { useAarc, AarcProvider } from '@aarc-dev/deposit-widget';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@aarc-dev/deposit-widget/dist/style.css';
import { WagmiConfig, WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
  },
})
function App() {
  const open = useAarc();
  const queryClient = new QueryClient();
  const config = {
    destination: {
      chainId: 137,
      tokenAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      walletAddress: "0x7C1a357e76E0D118bB9E2aCB3Ec4789922f3e050",
      tokenSymbol: "USDC",
      tokenDecimals: 6,
    },
    appearance: {
      logoUrl: "",
      themeColor: "#1677FF",
    },
    apiKeys: {
      transak: "your-transak-api-key",
      aarcSDK: "3f88f673-5b2b-4832-83f1-4a883bab5409",
    }
  }
  return (
    <div className="App">
      <h1>Create React App Template for Aarc Deposit widget</h1>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AarcProvider config={config}>
            <button onClick={() => open()}>Deposit</button>
          </AarcProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
export default App;