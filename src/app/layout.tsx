import type { Metadata } from "next";

import { Providers, PHProvider, PostHogPageview } from "./providers";

export const metadata: Metadata = {
  title: "Absurd finance - App",
  description: "The first web3-powered credit card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PHProvider>
          <PostHogPageview />
          <Providers>{children}</Providers>
        </PHProvider>
      </body>
    </html>
  );
}
