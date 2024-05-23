import IPODetails from '../../src/pages/ipodetails/ipoDetails';

// Create object for ipo data
export default ipoData = [
  {
    id: 1,
    ticker: 'GO',
    companyName: 'GO AIR',
    companyLogo: 'go-air.jpg',
    listingGains: 10,
    listedPrice: 150,
    issueSize: '3600',
    issueDate: '4th - 7th Oct 2022',
    priceRange: {
      min: 50,
      max: 60
    },
    minInvest: 50000,
    numberOfLots: '100 shares/slots',
    ipoTimeline: {
      biddingStartDate: {
        label: 'Bidding Starts',
        value: '12 Dec 2023'
      },
      biddingEndDate: {
        label: 'Bidding Ends',
        value: '15 Dec 2023'
      },
      allotmentFinalDate: {
        label: 'Allotment Finalization',
        value: '18 Dec 2023'
      },
      refundInitiationDate: {
        label: 'Refund Initiation',
        value: '18 Dec 2023'
      },
      dematTransferDate: {
        label: 'Demat Transfer',
        valur: '18 Dec 2023'
      },
      listedDate: {
        label: 'Listing Date',
        value: '15 Dec 2022'
      },
    },
    ipoDetails:
      'Go First aka GoAir filed DRHP with SEBI for an IPO worth ₹3600 Crores. The GoAir is owned by the Wadia Group started the airlines in 2005. The company name was GoAir now rebranded to Go First. The company is the 5th largest airlines company in India based on the data as of 2017 with a market share of around 8.4%. They operate daily more than 300 flights including 36 destinations and 27 domestic and 9 international destinations. Go First is India’s ultra-low-cost airline with multiple domestic and international destinations with a focus on young Indians, leisure customers, and MSME business travelers. The retail portion of the IPO is 10% while QIB is 75% and NII is 15%. GoAir IPO to list on NSE and BSE both the indices. Stay tuned for GoAir IPO details.',
  },
];
