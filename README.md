# Frontend

The official frontend of Absurd finance.

## Onboarding

The onboarding flow starts with the user connecting up to three wallets they own, signing a message and calculating their total credit score.
Should the user have a credit score of 0, they are rejected and the onboarding flow ends, otherwise, the user is presented a list of the features and the credit line they are entitled to (which depends on the scores of the wallets they connected).
Finally, the user chooses the card subscription they prefer, if _basic_ or _premium_ and proceed to KYC.

## Credit Calculation

This Next JS app calculates the on-chain credit score of an Ethereum wallet by looking at the transaction history.

### How it is done

#### Step 1 - Data acquisition

For the past 6 months the following data points are acquired:

- for each token in the top 10 list
- for the chains user selected (max 3)
  - Average wallet balance over the previous
  - History of incoming and outgoing transactions

Users can connect up to three wallets.

#### Step 2 - Analysis

From this data, the following indicators can be obtained:

- wallet activity
- a salary or recurrent income
- HODL'd assets
- gambling attitude
- eventual interactions with sanctioned wallets

An inactive wallet or a wallet with less than 3 months history and 20 transactions is insufficient to derive a valid score thus it must be rejected or combined with another wallet.

In case of the latter, an immediate red flag is generated and the score is automatically zero.
The practice of interacting with hackers by sending zero value transactions with messages encoded in the data field (usually "begging" for money) is also negatively flagged.
