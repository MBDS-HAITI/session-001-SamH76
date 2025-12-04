import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',              
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f5f5f5',  
        },
        columnHeaders: {
          backgroundColor: '#1a0e5e',
          color: '#13844dff',
          fontSize: '16px',
        },
        row: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#f0f0f0',
          },
          '&:hover': {
            backgroundColor: '#d0d0ff',
          },
        },
      },
    },
  },
});

export {theme}