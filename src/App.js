import React from 'react';
import Header from './components/Header';
import Typography from '@material-ui/core/Typography';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Typography variant="h6" gutterBottom>
      <Header />
      <Routes />
    </Typography>
  </div>
);

export default App;
