import React from 'react';
import { useState } from 'react';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
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
  const [tickerId, setTickerId] = useState('');

  console.log(ipoData)

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, fontWeight: 'bold' }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Name/ Issue Date</StyledTableCell>
            <StyledTableCell align="right">Issue size</StyledTableCell>
            <StyledTableCell align="right">Price Range</StyledTableCell>
            <StyledTableCell align="center">Number of Lots</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ipoData.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                <Link
                  to={`/details/${data.id}`}
                  onClick={() => setTickerId(`${data.id}`)}
                >
                  {' '}
                  {data.companyName}
                </Link>
                <Typography> {data.issueDate}</Typography>
              </StyledTableCell>
              {/* <StyledTableCell>{ipodata.issueDate}</StyledTableCell> */}
              <StyledTableCell align="right">
                <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />
                {data.issueSize} Crores
              </StyledTableCell>
              <StyledTableCell align="right">
                {`${data.priceRange.min} - ${data.priceRange.max}`}
              </StyledTableCell>

              <StyledTableCell align="center">
                {data.minInvest}
                <Typography>{data.numberOfLots}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
