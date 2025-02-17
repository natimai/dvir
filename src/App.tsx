import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Layout from './components/Layout';
import './index.css';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    secondary: {
      main: '#c2410c',
    },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
