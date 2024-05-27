'use client';

import { ThemeProvider } from '@mui/material';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';
import theme from './theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Next13ProgressBar options={{ showSpinner: true }} showOnShallow />
    </ThemeProvider>
  );
};

export default Providers;
