//import { render } from '@testing-library/react';
//import { BrowserRouter as Router, Route } from 'react-router-dom' 
import React from 'react';
import { Router } from 'react-router-dom';

import history from './history';
import Routes from './routes'

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
/*
function App() {
  return(
    <div>
      <Routes />
    </div>
  );
};

export default App;
 */

/*
export default class App extends React.Component {
  render() {
    return(
    <Router>
     <Routes />
    </Router>
    );
  }
}
*/
