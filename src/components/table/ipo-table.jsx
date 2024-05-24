import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ipoData from '../../../assets/data/data';
import './ipo-table.less';
import images from '../../../assets/images/*.jpg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#EEEDEB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function IpoTable() {
  console.log(ipoData);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, fontWeight: 'bold' }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Company Name/ Issue Date</StyledTableCell>
            <StyledTableCell align="center">Issue size</StyledTableCell>
            <StyledTableCell align="center">Price Range</StyledTableCell>
            <StyledTableCell align="center">Number of Lots</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ipoData.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                <img src={`${images[data.companyLogo]}`} className="logo" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Link
                  to={`/details/${data.id}`}
                  onClick={() => setTickerId(`${data.id}`)}
                >
                  {' '}
                  <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>
                    {' '}
                    {data.companyName}
                  </Typography>
                </Link>

                <Typography sx={{ fontSize: 'small' }}>
                  {' '}
                  {data.issueDate}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>
                  {' '}
                  <CurrencyRupeeIcon fontSize="sm" />
                  {data.issueSize} Crores
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                {' '}
                <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>
                  {' '}
                  <CurrencyRupeeIcon fontSize="sm" />
                  {`${data.priceRange.min} - ${data.priceRange.max}`}{' '}
                </Typography>
              </StyledTableCell>

              <StyledTableCell align="center">
                <Typography sx={{ fontWeight: 'bold', fontSize: 'large' }}>
                  {' '}
                  <CurrencyRupeeIcon fontSize="sm" />
                  {data.minInvest}{' '}
                </Typography>
                <Typography sx={{ fontSize: 'small' }}>
                  {data.numberOfLots}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
