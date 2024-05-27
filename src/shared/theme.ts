'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
      light: '#e1bee7',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          fontWeight: 'bold',
          padding: '10px 25px',
          width: 'fit-content',
        },
      },
    },
  },
});

export default theme;
