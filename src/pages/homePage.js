import * as React from 'react';
import Navbar from '../components/navbar';
import IpoTable from '../components/ipo-table';

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <h1>This is HomePage</h1>
      <IpoTable></IpoTable>
    </>
  );
}
