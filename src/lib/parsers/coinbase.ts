import { QuoteCurrency, getPrice } from '../api';

const COINBASE_ENDPOINT = "https://api.coinbase.com/v2/accounts/";

type Balance = {
  amount: string;
  currency: string;
};

type AccountData = {
  id: string;
  name: string;
  primary: boolean;
  type: string;
  currency: string;
  balance: Balance;
  created_at: string;
  updated_at: string;
  resource: string;
  resource_path: string;
  ready: boolean;
};

type Accounts = {
  pagination: Record<string, any>;
  data: AccountData[];
};

const getUserBalance = async (bearerToken: string): Promise<number> => {
  const headers = new Headers({
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  });

  try {
    const response = await fetch(COINBASE_ENDPOINT, { method: 'GET', headers: headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const accounts: Accounts = await response.json();
    let totalBalance: number = 0;

    for (const account of accounts.data) {
        const currency = account.balance.currency;
        const amount = parseFloat(account.balance.amount);

        // Skip null values
        if (amount == 0) continue;

        totalBalance += await getPrice(currency, QuoteCurrency.USD) * amount;
    }

    return totalBalance;

  } catch (error) {
    console.error('There was a problem fetching data:', error);

    return 0;
  }
};


