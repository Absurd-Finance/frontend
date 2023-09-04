const BASE_URL = 'YOUR_BASE_URL_HERE';

type AccountData = {
  asset: string;
  free: string;
  locked: string;
  freeze: string;
  withdrawing: string;
  ipoable: string;
  btcValuation: string;
};

const getUserBalance = async (bearerToken: string): Promise<number> => {
  const endpoint = `${BASE_URL}/sapi/v3/asset/getUserAsset`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,  // Setting bearer token in headers
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timestamp: Date.now()  // Sending current timestamp
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: AccountData[] = await response.json();

    // Extracting data and reducing to get sum of 'free' and 'locked'
    const sum = data.reduce((acc, asset) => {
      return acc + parseFloat(asset.free) + parseFloat(asset.locked);
    }, 0);

    return sum;

  } catch (error) {
    console.error('There was a problem fetching data:', error);

    return 0;
  }
};
