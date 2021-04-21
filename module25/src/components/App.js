import React from 'react';
import '../scss/style.scss';
import Header from './Header';
import Footer from './Footer';
import RegForm from './RegForm/RegForm';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return(
      <>
        <Header/>
          
        <Footer/>
        <Router>
          <Switch>
            {/* <Route path="/" component={App}/>
            <Route path="/about" component={App}/> */}
            <Route path="/qa" component={RegForm}/>

          </Switch>
        </Router>
      </>
    );
}

export default App;
