import { NextRequest, NextResponse } from "next/server";
import { isAddress } from "viem";

import { QuoteCurrency, isWalletSanctioned } from "../../../lib/api";
import { addJobToQueue } from "../../../lib/queue";

export async function GET(req: NextRequest) {
  const walletAddress: string =
    req.nextUrl.searchParams.get("walletAddress") || "";

  if (!isAddress(walletAddress)) {
    return NextResponse.json(
      { error: "Invalid wallet address provided" },
      { status: 400 }
    );
  }

  const isSanctioned = await isWalletSanctioned(walletAddress);
  if (isSanctioned) {
    return NextResponse.json(
      { error: "Wallet is sanctioned" },
      { status: 400 }
    );
  }

  // Queue the job and return a unique job ID
  try {
    const jobId = await addJobToQueue(walletAddress, QuoteCurrency.EUR);

    return NextResponse.json({ message: jobId });
  } catch (e) {
    return NextResponse.json(
      { error: "Error pushing the job to queue" },
      { status: 400 }
    );
  }
}
