export default {
  globalError: null,
  globalLoading: false,
  initLoading: true,
  zeroAddy: "0x0000000000000000000000000000000000000000",

  activeNetwork: localStorage.activeNetwork || "eth",

  web3: {
    instance: null,
    isConnected: false,
    chainId: null,
    address: "",
    userBalance: "",
  },

  oklgInst: null,

  eth: {
    networks: [
      {
        name: "Binance Smart Chain",
        short_name: "bsc",
        chain: "smartchain",
        network: "mainnet",
        chain_id: 56,
        network_id: 56,
        explorer_url: "https://bscscan.com",
        rpc_url: "https://bsc-dataseed.binance.org/",
        blocks_per_day: 28800,
        native_currency: {
          symbol: "BNB",
          name: "BNB",
          decimals: 18,
          contractAddress: "",
          balance: "",
        },
        logo: `@/assets/images/icons/bscscan.svg`,
        contracts: {
          oklg: "0x55e8b37a3c43b049dedf56c77f462db095108651",
        },
      },
      {
        name: "Ethereum Mainnet",
        short_name: "eth",
        chain: "ETH",
        network: "mainnet",
        chain_id: 1,
        network_id: 1,
        explorer_url: "https://etherscan.io",
        rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
        blocks_per_day: 6450,
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: 18,
          contractAddress: "",
          balance: "",
        },
        contracts: {
          oklg: "0x5dbb9f64cd96e2dbbca58d14863d615b67b42f2e",
        },
      },
    ],
  },
};
