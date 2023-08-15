import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { type WalletClient } from 'wagmi'
import { walletClientToSigner } from "./ethersAdapters";

const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26
const schemaUID = "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995";

export async function onchainAttest(walletClient: WalletClient) {
  const signer = walletClientToSigner(walletClient);

  const eas = new EAS(EASContractAddress);
  eas.connect(signer);
  
  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder("uint256 score");
  const encodedData = schemaEncoder.encodeData([
    { name: "score", value: 1, type: "uint256" },
  ]);

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
      expirationTime: BigInt(0),
      revocable: false,
      data: encodedData,
    },
  });
  
  const newAttestationUID = await tx.wait();
}


export async function offchainAttest(walletClient: WalletClient) {
  const signer = walletClientToSigner(walletClient);

  const eas = new EAS(EASContractAddress);
  eas.connect(signer);
  const offchain = await eas.getOffchain();

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder("uint256 score");
  const encodedData = schemaEncoder.encodeData([
    { name: "score", value: 1, type: "uint256" },
  ]);

  const offchainAttestation = await offchain.signOffchainAttestation({
    recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
    // Unix timestamp of when attestation expires. (0 for no expiration)
    expirationTime: BigInt(0),
    // Unix timestamp of current time
    time: BigInt(1671219636),
    revocable: true, // Be aware that if your schema is not revocable, this MUST be false
    version: 1,
    nonce: BigInt(0),
    schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
    refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
    data: encodedData,
  }, signer);
}
