import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import VendorList from './Components/VendorList/VendorList';
import VendorDetails from './Components/VendorDetails/VendorDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/vendor-list' component={VendorList} />
          <Route exact path='/vendor-details' component={VendorDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
