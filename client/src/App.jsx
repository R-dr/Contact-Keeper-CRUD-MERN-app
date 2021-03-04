import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Contexts/ State
import ContactState from './context/contact/ContactState';

//Layout
import { Navbar } from './components/layout/Navbar';

//Pages
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';

// Components
function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
