"use client";

import { Button } from "@chakra-ui/react";
import CoinGecko from "coingecko-api";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const session = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = "http://localhost:3000/api/auth/callback/coinbase"; //searchParams.get("callbackUrl") || "/profile";

  if (session.data) {
    console.log(session.data);
  }

  const getprice = async () => {
    const params = {
      tickers: false,
      developer_data: false,
      localization: false,
      market_data: true,
    };
    const CoinGeckoClient = new CoinGecko();
    let data = await CoinGeckoClient.coins.fetch("bitcoin", params);
    console.log(data["data"]["market_data"]["current_price"]["usd"]);
  };

  return (
    <>
      <Button onClick={() => getprice()}>Get Price</Button>
      <Button onClick={() => signIn("coinbase", { callbackUrl })}>
        SignIn
      </Button>
    </>
  );
}
