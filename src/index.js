import React from 'react';
import { createRoot } from 'react-dom/client';
import reactDom from 'react-dom';
import App from './App';

// reactDom.render(<App />, document.getElementById('root'));
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);