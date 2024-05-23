import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ipoData from '../../data/data';

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
          {ipoData.map((ipodata) => (
            <StyledTableRow key={ipodata.id}>
              <StyledTableCell component="th" scope="row">
                {ipodata.companyName}
                <Typography> {ipodata.issueDate}</Typography>
              </StyledTableCell>
              {/* <StyledTableCell>{ipodata.issueDate}</StyledTableCell> */}
              <StyledTableCell align="right">
                <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />
                {ipodata.issueSize} Crores
              </StyledTableCell>
              <StyledTableCell align="right">
                {ipodata.priceRange}
              </StyledTableCell>

              <StyledTableCell align="center">
              {ipodata.minInvest}
              <Typography>{ipodata.numberOfLots}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
