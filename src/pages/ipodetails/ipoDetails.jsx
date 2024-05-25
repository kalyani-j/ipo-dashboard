import React from 'react';
import { Container, Card, CardHeader, CardContent } from '@mui/material';
import OutlinedTimeline from '../../components/timeline/timeline';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './index.less';
import ipoData from '../../../assets/data/data';
import { useNavigate, useParams } from 'react-router-dom';
import images from '../../../assets/images/*.jpg';

const IPODetails = () => {
  const { id } = useParams();
  const ipo = ipoData.find((x) => x.id === parseInt(id, 10));
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <div className="ipo-details-title">
          <div className="icon-container">
            <button onClick={() => handleNavigate()}>
              <ArrowBackIosIcon></ArrowBackIosIcon>
            </button>
            <img src={`${images[ipo.companyLogo]}`} className="logo" />
            {ipo.ticker}
            <div className="comp-name">{ipo.companyName}</div>
          </div>

          <div className="btn-container">
            <button className="btn-download" onClick={() => handleNavigate()}>
              <DownloadIcon></DownloadIcon>
            </button>
            <button
              size="large"
              variant="contained"
              className="btn-apply"
              onClick={() => handleNavigate()}
            >
              Apply now
            </button>
          </div>
        </div>
        {/* IPO Details */}
        <Card variant="outlined">
          <CardHeader title="IPO Details" className="ipo-details-header" />

          <CardContent>
            <div className="ipo-details-info">
              <div className="ipo-details-data">
                Issue Size:
                <div>
                  {' '}
                  <CurrencyRupeeIcon fontSize="sm" />
                  {ipo?.issueSize} Crores
                </div>
              </div>
              <div className="ipo-details-data">
                Price Range:
                <div>
                  <CurrencyRupeeIcon fontSize="sm" />{' '}
                  {`${ipo?.priceRange.min} - ${ipo?.priceRange.max}`}
                </div>
              </div>
              <div className="ipo-details-data">
                Minimum Amount:
                <div>
                  <CurrencyRupeeIcon fontSize="sm" /> {ipo?.minInvest}
                </div>
              </div>
              <div className="ipo-details-data">
                Lot size:
                <div>{ipo?.numberOfLots}</div>
              </div>
            </div>

            <div className="ipo-details-info">
              <div className="ipo-details-data">
                Issue Dates:
                <div>{ipo?.issueDate}</div>
              </div>
              <div className="ipo-details-data">
                Listed On:
                <div>{ipo?.ipoTimeline.listedDate.value}</div>
              </div>
              <div className="ipo-details-data">
                Listed Price:
                <div>
                  <CurrencyRupeeIcon fontSize="sm" /> {ipo?.listedPrice}
                </div>
              </div>
              <div className="ipo-details-data">
                Listing Gains:
                <div>
                  <CurrencyRupeeIcon fontSize="sm" /> {ipo?.listingGains}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}

        <Card variant="outlined" style={{ marginTop: '24px' }}>
          <CardHeader
            title="IPO Timeline"
            className="ipo-details-header"
          ></CardHeader>
          <OutlinedTimeline timeline={ipo.ipoTimeline} />
        </Card>

        {/* Display Company Information */}
        <Card variant="outlined" className="" style={{ marginTop: '24px' }}>
          <CardHeader
            title="About the Company"
            className="ipo-details-header"
          ></CardHeader>
          <CardContent>{ipo.ipoDetails}</CardContent>
        </Card>
      </Container>
    </>
  );
};

export default IPODetails;
