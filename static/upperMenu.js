const mainURL = "www.indmoney.com";
export const Modal2Props = {
  indStocks: [
    { label: `Stocks`, url: `${mainURL}/stocks` },
    { label: `SIP in Stocks`, url: `${mainURL}/sip-in-stocks` },
    { label: `Indices`, url: `${mainURL}/indices` },
    { label: `IPO`, url: `${mainURL}/ipo` },
    { label: `Futures & Options`, url: `${mainURL}/futures-options` },
  ],
  usStocks: [
    { label: `US Stocks`, url: `${mainURL}/us-stocks` },
    { label: `ETFs`, url: `${mainURL}/etfs` },
    { label: `Global ETFs`, url: `${mainURL}/global-etfs` },
    { label: `Gold ETFs`, url: `${mainURL}/gold-etfs` },
    { label: `All ETFs`, url: `${mainURL}/all-etfs` },
  ],
  mutualFunds: [
    { label: `All Mutual Funds`, url: `${mainURL}/all-mutual-funds` },
    { label: `Equity Funds`, url: `${mainURL}/equity-funds` },
    { label: `Index Funds`, url: `${mainURL}/index-funds` },
    { label: `Debt Funds`, url: `${mainURL}/debt-funds` },
    { label: `Hybrid Funds`, url: `${mainURL}/hybrid-funds` },
  ],
  nps: [
    { label: `Invest in NPS`, url: `${mainURL}/invest-nps` },
    { label: `NPS Calculator`, url: `${mainURL}/nps-calculator` },
  ],
  otherInstruments: [
    { label: `Fixed Deposits`, url: `${mainURL}/fixed-deposits` },
    { label: `Insurance`, url: `${mainURL}/insurance` },
  ],
  calculators: [
    { label: `SIP Calculator`, url: `${mainURL}/sip-calculator` },
    { label: `Brokerage Calculator`, url: `${mainURL}/brokerage-calculator` },
    { label: `SWP Calculator`, url: `${mainURL}/swp-calculator` },
    {
      label: `Regular vs Direct MF Calculator`,
      url: `${mainURL}/regular-direct-mf-calculator`,
    },
    { label: `Lumpsum Calculator`, url: `${mainURL}/lumpsum-calculator` },
    { label: `GST Calculator`, url: `${mainURL}/gst-calculator` },
    { label: `NPS Calculator`, url: `${mainURL}/nps-calculator` },
    {
      label: `Post Office RD Calculator`,
      url: `${mainURL}/post-office-rd-calculator`,
    },
    { label: `Salary Calculator`, url: `${mainURL}/salary-calculator` },
    { label: `Gratuity Calculator`, url: `${mainURL}/gratuity-calculator` },
    {
      label: `Mutual Fund Returns Calculator`,
      url: `${mainURL}/mf-returns-calculator`,
    },
    { label: `View all Calculators`, url: `${mainURL}/all-calculators` },
  ],
  features: [
    { label: `Trading App`, url: `/trading-app` },
    { label: `Mutual Fund Analytics`, url: `/mf-analytics` },
    { label: `Goals Tracker`, url: `/goals-tracker` },
    { label: `Compare Mutual Funds`, url: `/compare-mf` },
    { label: `Track Your Finances`, url: `/track-finances` },
    { label: `Switch Regular to Direct MF`, url: `/switch-mf` },
    { label: `Instant Withdrawals`, url: `/instant-withdrawals` },
    { label: `Track Family Mutual Funds`, url: `/track-family-mf` },
    { label: `Credit Score`, url: `/credit-score` },
    { label: `Set Nominee for Mutual Funds`, url: `/set-nominee-mf` },
    { label: `Blogs`, url: `/blogs` },
    { label: `View all Features`, url: `/all-features` },
  ],
  marketToday: [
    { label: `Market Movers`, url: `/market-movers` },
    { label: `52 Week High`, url: `/52-week-high` },
    { label: `52 Week Low`, url: `/52-week-low` },
    { label: `Top Gainers`, url: `/top-gainers` },
    { label: `Top Losers`, url: `/top-losers` },
    { label: `Only Buyers`, url: `/only-buyers` },
    { label: `Only Sellers`, url: `/only-sellers` },
  ],
  stockCategory: [
    { label: `Stocks to buy today`, url: `${mainURL}/stocks-to-buy-today` },
    { label: `Penny Stocks`, url: `${mainURL}/penny-stocks` },
    { label: `Multi-bagger Stocks`, url: `${mainURL}/multi-bagger-stocks` },
    { label: `Nifty 50 Stocks`, url: `${mainURL}/nifty-50-stocks` },
    { label: `Large Cap Stocks`, url: `${mainURL}/large-cap-stocks` },
    { label: `Mid Cap Stocks`, url: `${mainURL}/mid-cap-stocks` },
    { label: `Small Cap Stocks`, url: `${mainURL}/small-cap-stocks` },
  ],
  indices: [
    { label: `BSE Sensex`, url: `${mainURL}/bse-sensex` },
    { label: `Nifty 50`, url: `${mainURL}/nifty-50` },
    { label: `Nifty Midcap 100`, url: `${mainURL}/nifty-midcap-100` },
    { label: `Bank Nifty`, url: `${mainURL}/bank-nifty` },
    { label: `FINNIFTY`, url: `${mainURL}/finnifty` },
    { label: `Nifty 500`, url: `${mainURL}/nifty-500` },
    { label: `Nifty IT`, url: `${mainURL}/nifty-it` },
    { label: `Global Indices`, url: `${mainURL}/global-indices` },
    { label: `Gift Nifty`, url: `${mainURL}/gift-nifty` },
    { label: `Dow Jones Industrial Average`, url: `${mainURL}/dow-jones` },
    { label: `S&P 500`, url: `${mainURL}/sp-500` },
    { label: `Nasdaq 100`, url: `${mainURL}/nasdaq-100` },
    { label: `Russell 2000 Index`, url: `${mainURL}/russell-2000` },
    { label: `Dow Jones Market`, url: `${mainURL}/dow-jones-market` },
    { label: `View all Indices`, url: `${mainURL}/all-indices` },
  ],
};

export const Modal1Props = {
  Invest: {
    title: "Invest",
    // heading: "Discover INDmoney",

    data: {
      indStocks: { title: "INDstocks", fields: Modal2Props["indStocks"] },
      usStocks: { title: "US Stocks", fields: Modal2Props["usStocks"] },
      mutualFunds: {
        title: "Mutual Funds",
        fields: Modal2Props["mutualFunds"],
      },
      nps: { title: "NPS", fields: Modal2Props["nps"] },
      otherInstruments: {
        title: "Other Instruments",
        fields: Modal2Props["otherInstruments"],
      },
    },
  },
  Features: {
    title: "Features",
    // heading: "Discover Features",
    data: {
      calculators: { title: "Calculators", fields: Modal2Props["calculators"] },
      features: { title: "Features", fields: Modal2Props["features"] },
    },
  },
  Market: {
    title: "Market Today",
    // heading: "Market Today",
    data: {
      marketToday: {
        title: "Market Movers",
        fields: Modal2Props["marketToday"],
      },
      stockCategory: {
        title: "Stock Category",
        fields: Modal2Props["stockCategory"],
      },
      indices: { title: "Indices", fields: Modal2Props["indices"] },
    },
  },
};
