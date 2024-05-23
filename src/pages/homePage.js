import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '@mui/material';
import IpoTable from '../components/table/ipo-table';

export default function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Container maxWidth={matches ? 'lg' : 'sm'}>
        <IpoTable></IpoTable>
      </Container>
    </>
  );
}
