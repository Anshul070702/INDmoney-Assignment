const mainURL = "https://www.indmoney.com";
const Inner = {
  indStocks: [
    { title: `Stocks`, data: {}, url: `${mainURL}/stocks` },
    { title: `SIP in Stocks`, data: {}, url: `${mainURL}/sip-in-stocks` },
    { title: `Indices`, data: {}, url: `${mainURL}/indices` },
    { title: `IPO`, data: {}, url: `${mainURL}/ipo` },
    { title: `Futures & Options`, data: {}, url: `${mainURL}/futures-options` },
  ],
  usStocks: [
    { title: `US Stocks`, data: {}, url: `${mainURL}/us-stocks` },
    { title: `ETFs`, data: {}, url: `${mainURL}/etfs` },
    { title: `Global ETFs`, data: {}, url: `${mainURL}/global-etfs` },
    { title: `Gold ETFs`, data: {}, url: `${mainURL}/gold-etfs` },
    { title: `All ETFs`, data: {}, url: `${mainURL}/all-etfs` },
  ],
  mutualFunds: [
    { title: `All Mutual Funds`, data: {}, url: `${mainURL}/all-mutual-funds` },
    { title: `Equity Funds`, data: {}, url: `${mainURL}/equity-funds` },
    { title: `Index Funds`, data: {}, url: `${mainURL}/index-funds` },
    { title: `Debt Funds`, data: {}, url: `${mainURL}/debt-funds` },
    { title: `Hybrid Funds`, data: {}, url: `${mainURL}/hybrid-funds` },
  ],
  nps: [
    { title: `Invest in NPS`, data: {}, url: `${mainURL}/invest-nps` },
    { title: `NPS Calculator`, data: {}, url: `${mainURL}/nps-calculator` },
  ],
  otherInstruments: [
    { title: `Fixed Deposits`, data: {}, url: `${mainURL}/fixed-deposits` },
    { title: `Insurance`, data: {}, url: `${mainURL}/insurance` },
  ],
  calculators: [
    { title: `SIP Calculator`, data: {}, url: `${mainURL}/sip-calculator` },
    {
      title: `Brokerage Calculator`,
      data: {},
      url: `${mainURL}/brokerage-calculator`,
    },
    { title: `SWP Calculator`, data: {}, url: `${mainURL}/swp-calculator` },
    {
      title: `Regular vs Direct MF Calculator`,
      data: {},
      url: `${mainURL}/regular-direct-mf-calculator`,
    },
    {
      title: `Lumpsum Calculator`,
      data: {},
      url: `${mainURL}/lumpsum-calculator`,
    },
    { title: `GST Calculator`, data: {}, url: `${mainURL}/gst-calculator` },
    { title: `NPS Calculator`, data: {}, url: `${mainURL}/nps-calculator` },
    {
      title: `Post Office RD Calculator`,
      data: {},
      url: `${mainURL}/post-office-rd-calculator`,
    },
    {
      title: `Salary Calculator`,
      data: {},
      url: `${mainURL}/salary-calculator`,
    },
    {
      title: `Gratuity Calculator`,
      data: {},
      url: `${mainURL}/gratuity-calculator`,
    },
    {
      title: `Mutual Fund Returns Calculator`,
      data: {},
      url: `${mainURL}/mf-returns-calculator`,
    },
    {
      title: `View all Calculators`,
      data: {},
      url: `${mainURL}/all-calculators`,
    },
  ],
  features: [
    { title: `Trading App`, data: {}, url: `/trading-app` },
    { title: `Mutual Fund Analytics`, data: {}, url: `/mf-analytics` },
    { title: `Goals Tracker`, data: {}, url: `/goals-tracker` },
    { title: `Compare Mutual Funds`, data: {}, url: `/compare-mf` },
    { title: `Track Your Finances`, data: {}, url: `/track-finances` },
    { title: `Switch Regular to Direct MF`, data: {}, url: `/switch-mf` },
    { title: `Instant Withdrawals`, data: {}, url: `/instant-withdrawals` },
    { title: `Track Family Mutual Funds`, data: {}, url: `/track-family-mf` },
    { title: `Credit Score`, data: {}, url: `/credit-score` },
    { title: `Set Nominee for Mutual Funds`, data: {}, url: `/set-nominee-mf` },
    { title: `Blogs`, data: {}, url: `/blogs` },
    { title: `View all Features`, data: {}, url: `/all-features` },
  ],
  marketToday: [
    { title: `Market Movers`, data: {}, url: `/market-movers` },
    { title: `52 Week High`, data: {}, url: `/52-week-high` },
    { title: `52 Week Low`, data: {}, url: `/52-week-low` },
    { title: `Top Gainers`, data: {}, url: `/top-gainers` },
    { title: `Top Losers`, data: {}, url: `/top-losers` },
    { title: `Only Buyers`, data: {}, url: `/only-buyers` },
    { title: `Only Sellers`, data: {}, url: `/only-sellers` },
  ],
  stockCategory: [
    {
      title: `Stocks to buy today`,
      data: {},
      url: `${mainURL}/stocks-to-buy-today`,
    },
    { title: `Penny Stocks`, data: {}, url: `${mainURL}/penny-stocks` },
    {
      title: `Multi-bagger Stocks`,
      data: {},
      url: `${mainURL}/multi-bagger-stocks`,
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
    { title: `Global Indices`, data: {}, url: `${mainURL}/global-indices` },
    { title: `Gift Nifty`, data: {}, url: `${mainURL}/gift-nifty` },
    {
      title: `Dow Jones Industrial Average`,
      data: {},
      url: `${mainURL}/dow-jones`,
    },
    { title: `S&P 500`, data: {}, url: `${mainURL}/sp-500` },
    { title: `Nasdaq 100`, data: {}, url: `${mainURL}/nasdaq-100` },
    { title: `Russell 2000 Index`, data: {}, url: `${mainURL}/russell-2000` },
    { title: `Dow Jones Market`, data: {}, url: `${mainURL}/dow-jones-market` },
    { title: `View all Indices`, data: {}, url: `${mainURL}/all-indices` },
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
      globalindices: {
        title: "Global Indices",
        data: Inner["globalindices"],
        url: "",
      },
    },
    url: "",
  },
  Pricing: {
    title: "Pricing",
    data: {},
    url: "/pricing",
  },
  Disclosure: {
    title: "Disclosure",
    data: {
      complainStatus: {
        title: "Complaint Status",
        data: Inner["complainStatus"],
        url: "",
      },
      sebi: {
        title: "SEBI Investor Charter - Investment Advisor",
        data: Inner["sebi"],
        url: "",
      },
      more: { title: "Indices", data: Inner["more"], url: "" },
    },
    url: "",
  },
};
export default Outer;
