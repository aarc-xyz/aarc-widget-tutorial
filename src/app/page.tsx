"use client";
import { useAarc, AarcProvider } from "@aarc-dev/deposit-widget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@aarc-dev/deposit-widget/dist/style.css";
import { WagmiProvider, createConfig, http } from "wagmi";
import { polygon } from "wagmi/chains";
import Link from "next/link";
const wagmiConfig = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http("https://rpc-mainnet.maticvigil.com/"),
  },
});
const AARC_API_KEY: string= process.env.NEXT_PUBLIC_AARC_API_KEY? process.env.NEXT_PUBLIC_AARC_API_KEY: "";

const config = {
  destination: {
    chainId: 137,
    tokenAddress: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    walletAddress: "0x1Cb30cb181D7854F91c2410BD037E6F42130e860",
    tokenSymbol: "USDC",
    tokenDecimals: 6,
  },
  appearance: {
    logoUrl: "https://raw.githubusercontent.com/megabyte0x/aarc-widget-tutorial/main/src/app/aarc.png",
    themeColor: "#1677FF",
  },
  apiKeys: {
    transak: "your-transak-api-key",
    aarcSDK: AARC_API_KEY
  },
};
function App() {
  const open = useAarc();
  const queryClient = new QueryClient();
  
  return (
    <div className="App min-h-screen flex items-center justify-center">
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AarcProvider config={config}>
            <div className="flex items-center justify-center">
              <head>
                <title>Aarc FDK Widget Tutorial </title>
                <meta name="A complete guide to integrating Aarc FDK Widget in your Next.js app" />
                <link href="/favicon.ico" rel="icon" />
              </head>
              <main className="flex flex-col items-center p-24 border-[#ffffff] border-[1px] border-solid rounded-xl bg-[#d4d4d419] w-fit h-fit">
                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
                <div className="">
                  <h1 className="text-[36px] font-thin text-center">
                    Experience seamless User Oboarding by{" "}
                    <Link
                      className="no-underline bg-[#ffffff] text-[#000000] rounded-full px-[15px] py-[6px] font-normal hover:bg-[#42a4c7]"
                      href="https://aarc.xyz"
                    >
                      Aarc ❇️
                    </Link>
                  </h1>
                </div>
                <div className="">
                  <a
                    href="https://megabyte0x.xyz/posts/aarc-widget-tutorial"
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="hover:underline text-[#ffffff] no-underline font-semibold text-[27px]">
                      Click here for a tutorial on integrating Aarc FDK Widget
                      in your Next.js app.
                    </h2>
                  </a>
                </div>
                <button
                  onClick={() => open()}
                  className="rounded-lg hpver:rounded-full text-[21px] border px-6 py-3 bg-[#ffffff] shadow-inner hover:cursor-pointer hover:opacity-60 mt-[18px]"
                >
                  Open Aarc Widget
                </button>
              </main>
            </div>
          </AarcProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
export default App;
