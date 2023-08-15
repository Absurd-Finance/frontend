import fs from 'fs';
import path from 'path';
import { Address } from "viem";
import { Chain, QuoteCurrency } from "./api";
import { runScoringChecks } from "./analysis";

export async function addJobToQueue(walletAddress: Address, quoteCurrency: QuoteCurrency): Promise<string> {
  console.log("Add job to queue")

  const configFilePath = path.join(process.cwd(), 'chains.json');
  const chainData: Chain[] = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

  // TODO use an actual queue here and return the job ID
  try {
    const job = await runScoringChecks(walletAddress, chainData, quoteCurrency);
  } catch (e) {
    console.log("error", e);
  }

  return "1";
}
