import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import { createTheme } from '@mui/material/styles';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#009688',
        darker: '#004d40',
      },
      neutral: {
        main: '#263238',
        contrastText: '#cfd8dc',
      },
    },
  });

  return (
    <div className='App'>
      {!loggedIn ? (
        <SignIn theme={theme} />
      ) : (
        <Layout>
          <HomePage theme={theme} />
        </Layout>
      )}
    </div>
  );
}

export default App;
