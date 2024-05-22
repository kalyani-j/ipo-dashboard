import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

//create sample data for IPO Dashboard
function createIPOData(
  companyName,
  companyLogo,
  issueDate,
  issueSize,
  priceRange,
  minInvest,
  numberOfLots
) {
  return {
    companyName,
    companyLogo,
    issueDate,
    issueSize,
    priceRange,
    minInvest,
    numberOfLots,
  };
}

// create data for the table
const ipodata = [
  createIPOData(
    'Go Air',
    '',
    '12-June-2024',
    3600,
    '50 - 60',
    50000,
    '100 shares/5 lots'
  ),
  createIPOData(
    'Bajaj Energy',
    '',
    '30-June-2024',
    3600,
    '50 - 60',
    50000,
    '100 shares/5 lots'
  ),
  createIPOData(
    'OYO',
    '',
    'To be announced',
    3600,
    '50 - 60',
    50000,
    '100 shares/5 lots'
  ),
];

export default function IpoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, fontWeight: 'bold' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Name/ Issue Date</StyledTableCell>
            <StyledTableCell align="right">Issue size</StyledTableCell>
            <StyledTableCell align="right">Price Range</StyledTableCell>
            <StyledTableCell align="right">Minimum Investment</StyledTableCell>
            <StyledTableCell align="right">Number of Lots</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ipodata.map((ipodata) => (
            <StyledTableRow key={ipodata.companyLogo}>
              <StyledTableCell component="th" scope="row">
                
                {ipodata.companyName}
                <Typography>  {ipodata.issueDate}</Typography>
              
              </StyledTableCell>
              {/* <StyledTableCell>{ipodata.issueDate}</StyledTableCell> */}
              <StyledTableCell align="right">
              {/* <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> */}
                {ipodata.issueSize} Crores
              </StyledTableCell>
              <StyledTableCell align="right">
                {ipodata.priceRange}
              </StyledTableCell>
              <StyledTableCell align="right">
              {/* <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /> */}
                {ipodata.minInvest}
              </StyledTableCell>

              <StyledTableCell align="right">{ipodata.numberOfLots}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}