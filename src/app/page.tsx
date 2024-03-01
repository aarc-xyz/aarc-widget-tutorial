'use client'
import { useAarc, AarcProvider } from '@aarc-dev/deposit-widget';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@aarc-dev/deposit-widget/dist/style.css';
import { WagmiProvider, createConfig, http } from 'wagmi'
import {  polygon } from 'wagmi/chains'
import Link from 'next/link';
const wagmiConfig = createConfig({
  chains: [ polygon],
  transports: {
    [polygon.id]: http('https://mainnet.example.com'),
  },
})
function App() {
  const open = useAarc();
  const queryClient = new QueryClient();
  const config = {
    destination: {
      chainId: 137,
      tokenAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      walletAddress: "0x1Cb30cb181D7854F91c2410BD037E6F42130e860",
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
          <div>
            <head>
              <title>Aarc FDK Widget Tutorial </title>
              <meta name="A complete guide to integrating Aarc FDK Widget in your Next.js app" />
              <link href="/favicon.ico" rel="icon" />
            </head>
            <main className="flex min-h-screen flex-col items-center p-24">
              <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className="text-5xl font-semibold">
                  Experience seamless User Oboarding by <br></br>
                  <Link href="https://aarc.xyz">Aarc ❇️</Link>
                </h1>
              </div>
              <div className="m-40">
                <a
                  href="https://docs.aarc.xyz"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={`mb-3 text-2xl font-semibold`} >
                    This is a tutorial for integrating Aarc FDK Widget in your Next.js
                    app.
                  </h2>
                </a>
              </div>
              <button onClick={() => open()} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:light:border-neutral-700 hover:light:bg-neutral-800/30">Open Aarc Widget</button>
            </main>
          </div>
          </AarcProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
export default App;