import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import VendorList from './Components/VendorList/VendorList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/vendorlist' component={VendorList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
