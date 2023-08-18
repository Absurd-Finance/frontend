"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useEffect, createContext, useContext } from 'react';
import { useState } from 'react';

const PostHogContext = createContext(null);

let posthogInstance;

if (typeof window !== 'undefined') {
  import('posthog-js').then(posthogModule => {
    posthogInstance = posthogModule.default;
    posthogInstance.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!
    });
  });
}

function PHProvider({ children }) {
  const [posthog, setPosthog] = useState(posthogInstance);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('posthog-js').then(posthogModule => {
        const ph = posthogModule.default;
        ph.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!
        });
        setPosthog(ph);
      });
    }
  }, []);

  if (!posthog) {
    return null; // add loading spinner 
  }

  return (
    <PostHogContext.Provider value={posthog}>
      {children}
    </PostHogContext.Provider>
  );
}

function usePostHog() {
  const context = useContext(PostHogContext);
  if (context === null) {
    throw new Error("usePostHog must be used within a PHProvider.");
  }
  return context;
}

function PostHogPageview() {
  const posthog = usePostHog();

  useEffect(() => {
      if (!posthog) return;

      const capturePageview = () => {
          posthog.capture('$pageview', {
              '$current_url': window.location.href,
          });
      };

      capturePageview();

      window.addEventListener('popstate', capturePageview);

      return () => {
          window.removeEventListener('popstate', capturePageview);
      };
  }, [posthog]);

  return null;
}

function Providers({ children }: { children: React.ReactNode }) {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, sepolia],
    [
      alchemyProvider({ apiKey: "it4Um4ecMPP87zNShCGV2GhoFJvxulF8" }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Absurd Finance",
    projectId: "012272fdefaad3c3ccc4217ebed6ea99",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} showRecentTransactions={true}>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export { PostHogPageview, PHProvider, Providers, usePostHog };
