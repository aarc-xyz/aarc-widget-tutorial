
import Link from "next/link";
import { useAarc } from "@aarc-xyz/deposit-widget";
import { AarcProvider } from "@aarc-xyz/deposit-widget";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import "@aarc-dev/deposit-widget/dist/style.css";

const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http("https://mainnet.example.com"),
    [sepolia.id]: http("https://sepolia.example.com"),
  },
});

export default function Home() {
  const open = useAarc();
  return (
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
        <button onClick={() => open()} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Open Aarc Widget</button>
      </main>
    </div>
  );
}
