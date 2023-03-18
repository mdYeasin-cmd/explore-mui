import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider, Paper, Switch } from '@mui/material';
import HeroCard from './components/HeroCard';
import { useState } from 'react';



function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fff000'
      }
    }
  });

  const theme2 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff0000'
      }
    }
  });

  console.log(darkMode);

  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>
      <Switch onClick={() => setDarkMode(!darkMode)} />
      <Paper
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <CssBaseline />
        <HeroCard />

      </Paper>
    </ThemeProvider>
  );
}

export default App;
