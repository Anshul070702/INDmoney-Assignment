const mainURL = "https://www.indmoney.com";
const Inner = {
  indStocks: [
    { title: `Stocks`, data: {}, url: `${mainURL}/stocks` },
    {
      title: `SIP in Stocks`,
      data: {},
      url: `${mainURL}/stocks/category/sip-in-stocks`,
    },
    { title: `Indices`, data: {}, url: `${mainURL}/indices` },
    { title: `IPO`, data: {}, url: `${mainURL}/ipo` },
    {
      title: `Futures & Options`,
      data: {},
      url: `${mainURL}/futures-and-options`,
    },
  ],
  usStocks: [{ title: `US Stocks`, data: {}, url: `${mainURL}/us-stocks` }],
  ETFs: [
    { title: `ETFs`, data: {}, url: `${mainURL}/etfs` },
    {
      title: `Global ETFs`,
      data: {},
      url: `${mainURL}/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories`,
    },
    {
      title: `Gold ETFs`,
      data: {},
      url: `${mainURL}/stocks/category/gold-etfs`,
    },
    { title: `All ETFs`, data: {}, url: `${mainURL}/stocks/etf` },
  ],
  mutualFunds: [
    { title: `All Mutual Funds`, data: {}, url: `${mainURL}/mutual-funds` },
    {
      title: `Equity Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/equity-funds`,
    },
    {
      title: `Index Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/best-index-funds`,
    },
    {
      title: `Debt Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/debt-funds`,
    },
    {
      title: `Hybrid Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/hybrid-funds`,
    },
  ],
  nps: [
    {
      title: `Invest in NPS`,
      data: {},
      url: `${mainURL}/features/nps-national-pension-scheme`,
    },
    {
      title: `NPS Calculator`,
      data: {},
      url: `${mainURL}/calculators/nps-calculator`,
    },
  ],
  otherInstruments: [
    { title: `Fixed Deposits`, data: {}, url: `${mainURL}/fixed-deposit` },
    { title: `Insurance`, data: {}, url: `${mainURL}/insurance` },
  ],

  calculators: [
    {
      title: `SIP Calculator`,
      data: {},
      url: `${mainURL}/calculators/sip-calculator`,
    },
    {
      title: `Brokerage Calculator`,
      data: {},
      url: `${mainURL}/calculators/brokerage-calculator`,
    },
    {
      title: `SWP Calculator`,
      data: {},
      url: `${mainURL}/calculators/swp-calculator`,
    },
    {
      title: `Regular vs Direct MF Calculator`,
      data: {},
      url: `${mainURL}/calculators/direct-regular-mutual-funds`,
    },
    {
      title: `Lumpsum Calculator`,
      data: {},
      url: `${mainURL}/calculators/lumpsum-calculator`,
    },
    {
      title: `GST Calculator`,
      data: {},
      url: `${mainURL}/calculators/gst-calculator`,
    },
    {
      title: `NPS Calculator`,
      data: {},
      url: `${mainURL}/calculators/nps-calculator`,
    },
    {
      title: `Post Office RD Calculator`,
      data: {},
      url: `${mainURL}/calculators/post-office-rd-calculator`,
    },
    {
      title: `Salary Calculator`,
      data: {},
      url: `${mainURL}/calculators/salary-calculator`,
    },
    {
      title: `Gratuity Calculator`,
      data: {},
      url: `${mainURL}/calculators/gratuity-calculator`,
    },
    {
      title: `Mutual Fund Returns Calculator`,
      data: {},
      url: `${mainURL}/calculators/mutual-funds-returns-calculator`,
    },
    { title: `View all Calculators`, data: {}, url: `${mainURL}/calculators` },
  ],

  features: [
    {
      title: `Trading App`,
      data: {},
      url: `${mainURL}/features/best-trading-app`,
    },
    {
      title: `Mutual Fund Analytics`,
      data: {},
      url: `${mainURL}/features/mutual-fund-analytics`,
    },
    {
      title: `Goals Tracker`,
      data: {},
      url: `${mainURL}/features/goals-tracker`,
    },
    {
      title: `Compare Mutual Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/compare`,
    },
    {
      title: `Track Your Finances`,
      data: {},
      url: `${mainURL}/features/track-all-investments`,
    },
    {
      title: `Switch Regular to Direct MF`,
      data: {},
      url: `${mainURL}/features/switch-regular-to-direct-mutual-fund`,
    },
    {
      title: `Instant Withdrawals`,
      data: {},
      url: `${mainURL}/features/instant-withdrawals`,
    },
    {
      title: `Track Family Mutual Funds`,
      data: {},
      url: `${mainURL}/features/track-family-mutual-funds`,
    },
    {
      title: `Credit Score`,
      data: {},
      url: `${mainURL}/check-free-credit-score`,
    },
    {
      title: `Set Nominee for Mutual Funds`,
      data: {},
      url: `${mainURL}/mutual-funds/mutual-fund-nomination`,
    },
    { title: `Blogs`, data: {}, url: `${mainURL}/articles` },
    { title: `View all Features`, data: {}, url: `${mainURL}/features` },
  ],

  marketmovers: [
    { title: `Market Today`, data: {}, url: `${mainURL}/market` },
    { title: `52 Week High`, data: {}, url: `${mainURL}/52-week-high` },
    { title: `52 Week Low`, data: {}, url: `${mainURL}/52-week-low` },
    { title: `Top Gainers`, data: {}, url: `${mainURL}/top-gainers` },
    { title: `Top Losers`, data: {}, url: `${mainURL}/top-losers` },
    { title: `Only Buyers`, data: {}, url: `${mainURL}/only-buyers` },
    { title: `Only Sellers`, data: {}, url: `${mainURL}/only-sellers` },
  ],
  stockCategory: [
    {
      title: `Stocks to buy today`,
      data: {},
      url: `${mainURL}/buy-stocks`,
    },
    { title: `Penny Stocks`, data: {}, url: `${mainURL}/penny-stocks` },
    {
      title: `Multi-bagger Stocks`,
      data: {},
      url: `${mainURL}/multibagger-stocks`,
    },
    { title: `Nifty 50 Stocks`, data: {}, url: `${mainURL}/nifty-50-stocks` },
    { title: `Large Cap Stocks`, data: {}, url: `${mainURL}/large-cap-stocks` },
    { title: `Mid Cap Stocks`, data: {}, url: `${mainURL}/mid-cap-stocks` },
    { title: `Small Cap Stocks`, data: {}, url: `${mainURL}/small-cap-stocks` },
  ],
  indices: [
    { title: `BSE Sensex`, data: {}, url: `${mainURL}/bse-sensex` },
    { title: `Nifty 50`, data: {}, url: `${mainURL}/nifty-50` },
    { title: `Nifty Midcap 100`, data: {}, url: `${mainURL}/nifty-midcap-100` },
    { title: `Bank Nifty`, data: {}, url: `${mainURL}/bank-nifty` },
    { title: `FINNIFTY`, data: {}, url: `${mainURL}/finnifty` },
    { title: `Nifty 500`, data: {}, url: `${mainURL}/nifty-500` },
    { title: `Nifty IT`, data: {}, url: `${mainURL}/nifty-it` },
  ],
  globalIndices: [
    { title: `Gift Nifty`, data: {}, url: `${mainURL}/gift-nifty` },
    {
      title: `Dow Jones Industrial Average`,
      data: {},
      url: `${mainURL}/dow-jones-industrial-average`,
    },
    { title: `S&P 500`, data: {}, url: `${mainURL}/s-p-500` },
    { title: `Nasdaq 100`, data: {}, url: `${mainURL}/nasdaq-100` },
    {
      title: `Russell 2000 Index`,
      data: {},
      url: `${mainURL}/russell-2000-index`,
    },
    { title: `Dow Jones Market`, data: {}, url: `${mainURL}/dow-jones-market` },
    { title: `View all Indices`, data: {}, url: `${mainURL}/indices` },
  ],
};

const Outer = {
  Invest: {
    title: "Invest",
    data: {
      indStocks: {
        title: "INDstocks",
        data: Inner["indStocks"],
        url: "",
      },
      usStocks: {
        title: "US Stocks",
        data: Inner["usStocks"],
        url: "",
      },
      ETFs: {
        title: "ETFs",
        data: Inner["ETFs"],
        url: "",
      },
      mutualFunds: {
        title: "Mutual Funds",
        data: Inner["mutualFunds"],
        url: "",
      },
      nps: { title: "NPS", data: Inner["nps"], url: "" },
      otherInstruments: {
        title: "Other Instruments",
        data: Inner["otherInstruments"],
        url: "",
      },
    },
    url: "",
  },
  Features: {
    title: "Features",
    data: {
      calculators: {
        title: "Calculators",
        data: Inner["calculators"],
        url: "",
      },
      features: { title: "Features", data: Inner["features"], url: "" },
    },
    url: "",
  },
  Market: {
    title: "Market Today",
    data: {
      marketmovers: {
        title: "Market Movers",
        data: Inner["marketmovers"],
        url: "",
      },
      stockCategory: {
        title: "Stock Category",
        data: Inner["stockCategory"],
        url: "",
      },
      indices: { title: "Indices", data: Inner["indices"], url: "" },
      globalIndices: {
        title: "Global Indices",
        data: Inner["globalIndices"],
        url: "",
      },
    },
    url: "",
  },
  Pricing: {
    title: "Pricing",
    data: {},
    url: "/pricing?type=indian-stocks",
  },
  Disclosure: {
    title: "Disclosure",
    data: {
      complainStatus: {
        title: "Complaint Status",
        data: Inner["complainStatus"],
        url: `${mainURL}/complaints-status`,
      },
      sebi: {
        title: "SEBI Investor Charter - Investment Advisor",
        data: Inner["sebi"],
        url: `${mainURL}/sebi-investor-charter`,
      },
      more: {
        title: "Indices",
        data: Inner["more"],
        url: `${mainURL}/policy-center`,
      },
    },
    url: "",
  },
};
export default Outer;
