import React from 'react';
import { Container, Card, CardHeader, CardContent } from '@mui/material';
import OutlinedTimeline from '../../components/timeline/timeline';
import './index.less';

import ipoData from '../../../assets/data/data';
import { useNavigate, useParams } from 'react-router-dom';

const IPODetails = () => {
  const { id } = useParams();
  const ipo = ipoData.find((x) => x.id === parseInt(id, 10));
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  console.log(ipo);
  return (
    <>
      <Container>
        <div className='ipo-details-title'>
          <div><button onClick={() => handleNavigate()}>&lt;</button>{ipo.ticker}</div>
          
        </div>
        {/* IPO Details */}
        <Card variant="outlined">
          <CardHeader title="IPO Details"   className='ipo-details-header'/>

          <CardContent>
            <div className="ipo-details-info">
              <div className="ipo-details-data">
                Issue Size:
                <div>{ipo?.issueSize} Crores</div>
              </div>
              <div className="ipo-details-data">
                Price Range:
                <div>{`${ipo?.priceRange.min} - ${ipo?.priceRange.max}`}</div>
              </div>
              <div className="ipo-details-data">Minimum Amount:
              <div>{ipo?.minInvest}</div>
              </div>
              <div className="ipo-details-data">Lot size:
              <div>{ipo?.numberOfLots}</div>
              </div>
            </div>

            <div className="ipo-details-info">
              <div className="ipo-details-data">Issue Dates:
              <div>{ipo?.issueDate}</div>
              </div>
              <div className="ipo-details-data">Listed On:
              <div>{ipo?.ipoTimeline.listedDate.value }</div>
              </div>
              <div className="ipo-details-data">Listed Price:
              <div>{ipo?.listedPrice}</div>
              </div>
              <div className="ipo-details-data">Listing Gains:
              <div>{ipo?.listingGains}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}

        <Card variant="outlined" style={{ marginTop: '24px'}}>
          <CardHeader title="IPO Timeline" className='ipo-details-header'></CardHeader>
          <OutlinedTimeline timeline={ipo.ipoTimeline}/>
        </Card>

        {/* Display Company Information */}
        <Card variant="outlined" className='' style={{ marginTop: '24px'}}>
          <CardHeader title="About the Company" className='ipo-details-header'></CardHeader>
          <CardContent>
            {ipo.ipoDetails}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default IPODetails;
