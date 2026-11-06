'use client';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#265B62' },
    secondary: { main: '#B49640', contrastText: '#111111' },
    success: { main: '#1E4E2C' },
    error: { main: '#DF1D22' },
    text: { primary: '#111111', secondary: '#444444' },
    background: { default: '#F3EFE6', paper: '#FBF9F4' },
  },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1 },
    h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: '1.75rem', fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } } },
    MuiCard: { defaultProps: { variant: 'outlined' } },
  },
});